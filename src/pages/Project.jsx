import { gql, useQuery } from '@apollo/client'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { ArrowBigDown, ArrowDown, Calendar, ChevronDown, Focus, Mouse } from 'lucide-react'
import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import WaitScreen from '../components/WaitScreen'
import { motion, useScroll, useTransform } from 'framer-motion'

const GETPROJECT = gql`
    query getProject($projectId : ID) {
        project(id : $projectId) {
            data {
                id
                attributes {
                    title
                    year
                    lens
                    description
                    addAwards {
                        id
                        Title
                        description
                        year
                        Logo {
                            data {
                                attributes {
                                    url
                                    formats
                                }
                            }
                        }
                    }
                    featured_image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                    gallery {
                        data {
                            id
                            attributes {
                                url
                                formats
                            }
                        }
                    }
                }
            }
        }
        projects {
            data {
                id
                attributes {
                    title
                }
            }
        }
    }
`

const Project = () => {
    
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const scrollBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])


    const { id } = useParams()

    const { loading, error, data } = useQuery(GETPROJECT, {
        variables : {
            projectId : id
        }
    })

    if (loading) return <WaitScreen loading={loading}/>
    if (error) return <WaitScreen error={error}/>

    const backgroundImage = `http://localhost:1337${data.project.data.attributes.featured_image.data.attributes.formats.large.url}`

    return (
        <>
            <section ref={ref} className='relative min-h-screen flex pb-10 overflow-hidden'>
                <motion.div className="absolute inset-0 z-0 bg-cover bg-center" style={{ y : scrollBg, backgroundImage: `url(${backgroundImage})` }} />
                <div className="m-auto z-20">
                    <h2 className='overflow-hidden'>
                        <motion.div
                            initial={{y : 100}}
                            animate={{y : 0,
                                transition : { 
                                    delay: 0.5,
                                    duration: 0.3
                                }
                            }}                            >
                            {data.project.data.attributes.title}
                        </motion.div>
                    </h2>
                </div>
                <div className="absolute inset-x-0 bottom-0 m-10 z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-end">
                        <div className="">
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
            <section className='py-40'>
                <div className=" max-w-screen-lg mx-auto">
                    <div className="space-y-5 mb-10">
                        <h5>{data.project.data.attributes.title}</h5>
                        <div className='space-y-2 text-gray-400 cursor-default'>
                            <div><Calendar width={16} height={16} className='inline mr-2'/>{data.project.data.attributes.year}</div>
                            <div><Focus width={16} height={16} className='inline mr-2'/>{data.project.data.attributes.lens}</div>
                        </div>
                        <div className="prose prose-invert bloc">
                            <BlocksRenderer content={[ ...data.project.data.attributes.description ]}/>
                        </div>
                    </div>
                    {data.project.data.attributes.addAwards && (
                        <div className='p-3 mb-10 grid gap-5 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2'>
                            {data.project.data.attributes.addAwards.map((award) => (
                                <div key={award.id} className='p-5 bg-zinc-900 space-y-2'>
                                    <img src={`http://localhost:1337${award.Logo.data.attributes.url}`} alt={award.Logo.data.attributes.title} className='mb-5' />
                                    <p>{award.Title}</p>
                                    <p className='text-xs'>{award.year}</p>
                                    <p className='text-xs text-gray-300'>{award.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="space-y-5">
                        {data.project.data.attributes.gallery.data.map((image)=>(
                            <Zoom classDialog="custom-zoom" key={image.id}>
                                <picture className='flex justify-end'>
                                    <source media='(max-width: 1920px)' srcSet={`http://localhost:1337${image.attributes.formats.large.url}`}/>
                                    <source media='(max-width: 720px)' srcSet={`http://localhost:1337${image.attributes.formats.medium.url}`}/>
                                    <img
                                        alt=""
                                        src={`http://localhost:1337${image.attributes.url}`}
                                    />
                                </picture>
                            </Zoom>
                        ))}
                    </div>
                </div>
            </section>
            <section className='bg-neutral-300 text-black flex'>
                <div className="my-auto">
                    <h6 className='mb-5'>More Projects <ChevronDown className='inline' size={24}/></h6>
                    <div className="flex flex-col justify-center items-start space-y-5">
                        {data.projects.data.map((single_project) => (
                            <h3 className='hover:underline' key={single_project.id}>
                                <Link to={`/projects/${single_project.id}`} key={single_project.id} className='nav-link' data-char={`${single_project.attributes.title}`}>
                                    <span>{single_project.attributes.title}</span>
                                </Link>
                            </h3>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project