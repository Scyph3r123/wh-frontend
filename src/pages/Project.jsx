import { gql, useQuery } from '@apollo/client'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { ArrowBigDown, ArrowDown, Calendar, ChevronDown, Focus, Mouse, Scale } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import WaitScreen from '../components/WaitScreen'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import apiPath from '../apiPath'

const GETPROJECT = gql`
    query getProject($projectId : ID) {
        project(id : $projectId) {
            data {
                id
                attributes {
                    title
                    year
                    description
                    director
                    format
                    starring
                    producer
                    dop
                    editor
                    score
                    writer
                    url
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
    const { id } = useParams()
    const { loading, error, data } = useQuery(GETPROJECT, {
        variables : {
            projectId : id
        }
    })
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const scrollBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

    if (loading) return <WaitScreen loading={loading}/>
    if (error) return <WaitScreen error={error}/>

    const backgroundImage = `${apiPath}${data.project.data.attributes.featured_image.data.attributes.formats.large.url}`

    return (
        <>
            <section ref={ref} className='relative min-h-screen flex pb-10 overflow-hidden'>
                <motion.div className="absolute inset-0 z-0 bg-cover bg-center" style={{ y : scrollBg, backgroundImage: `url(${backgroundImage})` }} />
                <div className="m-auto z-20">
                    <h2 className='overflow-hidden tracking-wide'>
                        <motion.div
                            initial={{y : 100}}
                            animate={{y : 0,
                                transition : { 
                                    delay: 0.5,
                                    duration: 0.3
                                }
                            }}>
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
                    <div className="flex md:flex-row flex-col">
                        <div className="w-full md:w-2/3 md:pr-10">
                            <div className="prose prose-lg prose-invert">
                                <BlocksRenderer content={[ ...data.project.data.attributes.description ]}/>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 my-10 md:my-0">
                            <div className="mb-5 font-karla font-medium text-gray-200">Project Details <ChevronDown size={16} className='inline'/></div>
                            <dl className='divide-y divide-gray-700'>
                                {data.project.data?.attributes.year && (
                                    <div className='flex flex-col pb-3'>
                                        <dt className='text-gray-400 font-karla'>Year</dt>
                                        <dd className='text-lg'>{data.project.data.attributes.year}</dd>
                                    </div>
                                )}
                                {data.project.data?.attributes.director && (
                                    <div className='flex flex-col py-3'>
                                        <dt className='text-gray-400 font-karla'>Director</dt>
                                        <dd className='text-lg'>{data.project.data.attributes.director}</dd>
                                    </div>
                                )}
                                {data.project.data?.attributes.writer && (
                                    <div className='flex flex-col py-3'>
                                        <dt className='text-gray-400 font-karla'>Writer</dt>
                                        <dd className='text-lg'>{data.project.data.attributes.writer}</dd>
                                    </div>
                                )}
                                {data.project.data?.attributes.producer && (
                                    <div className='flex flex-col py-3'>
                                        <dt className='text-gray-400 font-karla'>Producer</dt>
                                        <dd className='text-lg'>{data.project.data.attributes.producer}</dd>
                                    </div>
                                )}
                                {data.project.data?.attributes.dop && (
                                    <div className='flex flex-col py-3'>
                                        <dt className='text-gray-400 font-karla'>DoP</dt>
                                        <dd className='text-lg'>{data.project.data.attributes.dop}</dd>
                                    </div>
                                )}
                                {data.project.data?.attributes.editor && (
                                    <div className='flex flex-col py-3'>
                                        <dt className='text-gray-400 font-karla'>Editor</dt>
                                        <dd className='text-lg'>{data.project.data.attributes.editor}</dd>
                                    </div>
                                )}
                                {data.project.data?.attributes.score && (
                                    <div className='flex flex-col py-3'>
                                        <dt className='text-gray-400 font-karla'>Score</dt>
                                        <dd className='text-lg'>{data.project.data.attributes.score}</dd>
                                    </div>
                                )}
                                {data.project.data?.attributes.starring && (
                                    <div className='flex flex-col py-3'>
                                        <dt className='text-gray-400 font-karla'>Starring</dt>
                                        <dd className='text-lg'>{data.project.data.attributes.starring}</dd>
                                    </div>
                                )}
                                {data.project.data?.attributes.format && (
                                    <div className='flex flex-col pt-3'>
                                        <dt className='text-gray-400 font-karla'>Format</dt>
                                        <dd className='text-lg'>{data.project.data.attributes.format}</dd>
                                    </div>
                                )}
                            </dl>
                        </div>
                    </div>
                    {data.project.data.attributes.addAwards && (
                        <div className='p-3 mb-10 grid gap-5 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2'>
                            {data.project.data.attributes.addAwards.map((award) => (
                                <div key={award.id} className='p-5 bg-zinc-900 space-y-2'>
                                    <img src={`${apiPath}${award.Logo.data.attributes.url}`} alt={award.Logo.data.attributes.title} className='mb-5' />
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
                                    <source media='(max-width: 1920px)' srcSet={`${apiPath}${image.attributes.formats.large.url}`}/>
                                    <source media='(max-width: 720px)' srcSet={`${apiPath}${image.attributes.formats.medium.url}`}/>
                                    <img
                                        alt=""
                                        src={`${apiPath}${image.attributes.url}`}
                                    />
                                </picture>
                            </Zoom>
                        ))}
                    </div>
                </div>
            </section>
            <section className='bg-neutral-300 text-black flex'>
                <div className="my-auto">
                    <h6 className='mb-5 font-spectral'>More Projects <ChevronDown className='inline' size={24}/></h6>
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