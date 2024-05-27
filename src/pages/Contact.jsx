import { gql, useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import WaitScreen from '../components/WaitScreen'
import SocialLinks from '../constants/SocialLinks'


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
const CREATE_CONTACT_FORM = gql`
  mutation CreateContactForm($input: createContactFormInput!) {
        createContactForm(input: $input) {
            contactForm {
                id
                name
                email
                subject
                message
            }
        }
    }
`

const Contact = () => {
    const { loading, error, data } = useQuery(GETCONTACTPAGE)
    
    if (loading) return <WaitScreen loading={loading}/>
    if (error) return <WaitScreen error={error}/>

    const backgroundImage = `http://localhost:1337${data.contactPage.data.attributes.background.data.attributes.formats.large.url}`

    const [createContactForm] = useMutation(CREATE_CONTACT_FORM)
    
    const [ formDate, setFormData ] = useState({
        name : '',
        email : '',
        subject: '',
        message : ''
    })
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const { data } = await createContactForm({
            variables: {
            input: {
                data: formData,
            },
            },
        });
            console.log('Form submitted successfully:', data);
        // Reset form or show success message
        } catch (error) {
            console.error('Error submitting form:', error);
        // Show error message
        }
    };

    return (
        <div className='min-h-screen grid md:grid-cols-2'>
            <div className='bg-cover bg-center min-h-screen' style={{backgroundImage: `url(${backgroundImage})`}} />
            <div className="my-auto">
                <div className="p-20">
                    <h2 className='mb-5'>Get in <br /> Touch</h2>
                    <p className='text-lg'>Feel free to drop us a message. or mail us at films@thejario.com</p>
                    <div className='mt-10'>
                        <form action="" onSubmit={handleSubmit} className='grid gap-6 grid-cols-2'>
                            <div>
                                <label htmlFor="name" className='label'>Name</label>
                                <input name='name' type="text" className='input' placeholder='Enter name' value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className='label'>Email</label>
                                <input name='email' type="email" className='input' placeholder='Email address' value={formData.email} onChange={handleChange} />
                            </div>
                            <div className='col-span-full'>
                                <label htmlFor="email" className='label'>Subject</label>
                                <input name='subject' type="text" className='input' placeholder='Hello' value={formData.subject} onChange={handleChange} />
                            </div>
                            <div className='col-span-full'>
                                <label htmlFor="email" className='label'>Message</label>
                                <textarea name='message' type="text" className='textarea' placeholder='Write a message...' rows={5} cols={5} value={formData.subject} onChange={handleChange}></textarea>
                            </div>
                            <div>
                                <button type='submit' className='px-5 py-3 border border-gray-500'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact