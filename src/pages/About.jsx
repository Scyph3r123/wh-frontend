import { gql, useQuery } from '@apollo/client'
import { ArrowDown, ChevronDown, Facebook, Instagram, Mouse, Twitter } from 'lucide-react'
import React, { useRef } from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import WaitScreen from '../components/WaitScreen'
import { motion, useScroll, useTransform } from 'framer-motion'
import apiPath from '../apiPath'

const GETABOUT = gql`
    query GetAboutAndTeams {
        about {
            data {
                id
                attributes {
                    Description
                    Background {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
        teams {
            data {
                id
                attributes {
                    fullname
                    image {
                        data {
                            id
                            attributes {
                                formats
                            }
                        }
                    }
                    bio
                }
            }
        }
    }
`
const About = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const scrollBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])


    const { loading, error, data } = useQuery(GETABOUT)
    
    if (loading) return <WaitScreen loading={loading}/>
    if (error) return <WaitScreen error={error}/>
    const backgroundImage = `${apiPath}${data.about.data.attributes.Background.data.attributes.formats.large.url}`

    return (
    <>
        
        <section ref={ref} className='relative min-h-screen flex pb-10 overflow-hidden'>
            <motion.div className="absolute inset-0 z-0 bg-cover bg-center" style={{ y : scrollBg, backgroundImage: `url(${backgroundImage})` }} />
            <div className="absolute inset-0 bg-black/20 z-10" />
            <div className="absolute inset-x-0 bottom-0 m-10 z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 items-end">
                    <div className="text-sm">
                        <h2 className='overflow-hidden'>
                            <motion.div
                                initial={{y : 100}}
                                animate={{y : 0,
                                    transition : { 
                                        delay: 0.5,
                                        duration: 0.3
                                    }
                                }}                            >
                                About Us
                            </motion.div>
                        </h2>
                    </div>
                    <div className="text-center hidden lg:block group relative ">
                        <Mouse className='text-white inline-block group-hover:-translate-y-5 transition-transform' size={40} strokeWidth={1} />
                        <div className='absolute inset-0 group-hover:translate-y-5 transition-transform'>
                            <ArrowDown className='group-hover:opacity-100 opacity-0 inline-block' size={20} strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-40">
            <div className="max-w-screen-2xl mx-auto">
                <div className="lg:w-2/3 xl:w-1/2 static mb-40">
                    <div className="mb-10 prose prose:lg prose-invert">
                        <BlocksRenderer content={[ ...data.about.data.attributes.Description ]} />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-0">
                    {data.teams.data.map((team) => (
                        <div key={team.id} className='h-[600px] md:h-[500px] lg:h-[400px] xl:h-[800px] overflow-hidden relative group'>
                            <img src={`${apiPath}${team.attributes.image.data.attributes.formats.medium.url}`} alt="" className='object-cover w-full h-full grayscale' />
                            <div className="absolute inset-0 bg-black group-hover:opacity-100 opacity-0 transition-opacity ease-out duration-700"></div>
                            <div className="absolute bottom-0 left-0 m-10">
                                <h6 className='mb-5 transition-all translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-600'>{team.attributes.fullname}</h6>
                                <p className='mb-5 transition-all translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-500'>{team.attributes.bio}</p>
                                <div className="flex items-center space-x-2 transition-all translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-300">
                                    <a href="" className='p-2'><Facebook/></a>
                                    <a href="" className='p-2'><Instagram/></a>
                                    <a href="" className='p-2'><Twitter/></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}

export default About