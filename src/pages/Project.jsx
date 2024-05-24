import { gql, useQuery } from '@apollo/client'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import WaitScreen from '../components/WaitScreen'

const GETPROJECT = gql`
    query getProject($projectId : ID) {
        project(id : $projectId) {
            data {
                id
                attributes {
                    title
                    year
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

    if (loading) return <WaitScreen loading={loading}/>
    if (error) return <WaitScreen error={error}/>

    const backgroundImage = `http://localhost:1337${data.project.data.attributes.featured_image.data.attributes.formats.large.url}`

    return (
        <>
            <section className='min-h-screen flex flex-col bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="m-auto static z-10">
                    <h2 className='mb-5 text-center'>{data.project.data.attributes.title}</h2>
                </div>
                <div className="absolute inset-0 bg-pattern z-0 opacity-50"></div>
            </section>
            <section className='py-40'>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    <div className="space-y-5">
                        <h5>{data.project.data.attributes.title}</h5>
                        <p>{data.project.data.attributes.year}</p>
                        <div className="prose prose-invert block">
                            <BlocksRenderer content={[ ...data.project.data.attributes.description ]}/>
                        </div>
                    </div>
                    <div className="xl:col-span-2 gap-5 grid">
                        {data.project.data.attributes.gallery.data.map((image)=>(
                            <Zoom classDialog="custom-zoom" key={image.id}>
                                <picture className='flex justify-end'>
                                    <source media='(max-width: 1920px)' srcSet={`http://localhost:1337${image.attributes.formats.large.url}`}/>
                                    <source media='(max-width: 720px)' srcSet={`http://localhost:1337${image.attributes.formats.medium.url}`}/>
                                    <img
                                        alt=""
                                        src={`http://localhost:1337${image.attributes.formats.medium.url}`}
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
                        {data.projects.data.map((project) => (
                            <h3 className='hover:underline' key={project.id}>
                                <Link to={`/projects/${project.id}`} key={project.id} className='nav-link' data-char={`${project.attributes.title}`}>
                                    <span>{project.attributes.title}</span>
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