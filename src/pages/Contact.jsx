import { gql, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import WaitScreen from '../components/WaitScreen'
import { useForm } from 'react-hook-form'
import apiPath from '../apiPath'
import { motion } from 'framer-motion'

const GETCONTACTPAGE = gql`
    query getContactPage {
        contactPage {
            data {
                attributes {
                    background {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`
const CREATE_MESSAGE = gql`
  mutation CreateContactForm($input: MessageInput!) {
    createMessage(data: $input) {
            data {
                id
                attributes {
                    name
                    email
                    subject
                    message
                }
            }
        }
    }
`

const Contact = () => {
    const { loading, error, data } = useQuery(GETCONTACTPAGE)
    const [createMessage, { loading: queryLoading } ] = useMutation(CREATE_MESSAGE)
    const { register, handleSubmit, reset, formState: { errors }} = useForm()
    const [ statusMessage, setStatusMessage ] = useState()

    const onSubmit = async (formData) => {
        try {
            await createMessage({
                variables: {
                    input : formData
                }
            })
            setStatusMessage('We have recieved your message! Thank you for contacting us.')
            reset()
        } catch (err) {
            setStatusMessage('There was an error submitting your message. Please try again.')
        }
    }

    if (loading) return <WaitScreen loading={loading}/>
    if (error) return <WaitScreen error={error}/>

    const backgroundImage = data?.contactPage ? `${apiPath}${data.contactPage.data.attributes.background.data.attributes.formats.large.url}` : ''

    return (
        <div className='min-h-screen grid md:grid-cols-2'>
            <div className='bg-cover bg-center min-h-[550px]' style={{backgroundImage: `url(${backgroundImage})`}} />
            <div className="my-auto">
                <div className="p-8 lg:p-20">
                    <h2 className='mb-5 flex md:flex-col flex-row md:gap-0 gap-2.5'><span>Get in</span><span>Touch</span></h2>
                    <p className='text-lg'>Feel free to drop us a message. or mail us at <a href="mailto:films@thejario.com" className='underline underline-offset-2'>films@thejario.com</a></p>
                    <div className='mt-20'>
                        <form action="" onSubmit={handleSubmit(onSubmit)} className='grid gap-6 grid-cols-2'>
                            <div>
                                <label htmlFor="name" className='label'>Name</label>
                                <input name='name' type="text" className='input' placeholder='Enter name' {...register('name', { required: 'Name is required' })}/>
                                {errors.name && <p className="error">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className='label'>Email</label>
                                <input name='email' type="email" className='input' placeholder='Email address'
                                {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address' 
                                }
                                })}/>
                                {errors.email && <p className="error">{errors.email.message}</p>}
                            </div>
                            <div className='col-span-full'>
                                <label htmlFor="email" className='label'>Subject</label>
                                <input name='subject' type="text" className='input' placeholder='Hello' {...register('subject', { required: 'Subject is required' })} />
                                {errors.subject && <p className="error">{errors.subject.message}</p>}
                            </div>
                            <div className='col-span-full'>
                                <label htmlFor="email" className='label'>Message</label>
                                <textarea name='message' className='textarea' placeholder='Write a message...' rows={5} cols={5} {...register('message', { required: 'Message is required' })}></textarea>
                                {errors.message && <p className="error">{errors.message.message}</p>}
                            </div>
                            <div className='col-span-full'>
                                <button type='submit' className='px-5 py-3 border border-gray-500'>Submit</button>
                                {statusMessage && 
                                <motion.p
                                initial={{y : 50, opacity: 0}}
                                animate={{y:0, opacity: 1}}
                                className='mt-5'
                                >{statusMessage}</motion.p>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact