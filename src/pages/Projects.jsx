import { gql, useQuery } from '@apollo/client';
import { ArrowDown, ArrowRight, Focus, Mouse } from 'lucide-react'
import { Link } from 'react-router-dom'
import WaitScreen from '../components/WaitScreen';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import apiPath from '../apiPath';


const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            data {
                id
                attributes {
                    title
                    description
                    featured_image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                    gallery {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
        projectPage {
            data {
                id
                attributes {
                    description
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


const Projects = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const scrollBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

    const { loading, error, data } = useQuery(GET_PROJECTS)

    if (loading) return <WaitScreen loading={loading}/>
    if (error) return <WaitScreen error={error}/>

    const backgroundImage = `${apiPath}${data.projectPage.data.attributes.background.data.attributes.formats.large.url}`



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
                                    Projects
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
                    <div className="sm:w-1/2 xl:w-1/3 mb-16 mx-auto">
                        <p className='text-gray-300 text-lg text-center'>{data.projectPage.data.attributes.description}</p>
                    </div>
                    <div className="grid gap-5 grid-cols-1 xl:grid-cols-2">
                        {data.projects.data.map((project) => (
                            <Link key={project.id} to={`/projects/${project.id}`} className='aspect-video overflow-hidden group relative'>
                                <img src={`${apiPath}${project.attributes.featured_image.data.attributes.formats.medium.url}`} alt="Project image" className='scale-100 group-hover:scale-125 transition-transform object-cover w-full h-full duration-1000' />
                                <div className="absolute top-0 inset-x-0 m-10">
                                    <div className="flex justify-between uppercase font-medium">
                                        <h4>{project.attributes.title}</h4>
                                        <ArrowRight size={30}/>
                                        {/* <p><Focus className='inline' size={18}/> {project.attributes.lens}</p> */}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* <div className="text-center mt-10">
                        <Link to="/" className="nav-link" data-char="More Projects">
                            <span>More Projects</span>
                        </Link>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Projects