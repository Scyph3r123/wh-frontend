import { gql, useQuery } from '@apollo/client';
import { Focus, Mouse, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import WaitScreen from '../components/WaitScreen';


const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            data {
                id
                attributes {
                    title
                    description
                    lens
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
    const { loading, error, data } = useQuery(GET_PROJECTS)

    if (loading) return <WaitScreen loading={loading}/>
    if (error) return <WaitScreen error={error}/>

    const backgroundImage = `http://localhost:1337${data.projectPage.data.attributes.background.data.attributes.formats.large.url}`

    return (
        <>
            <section className='relative min-h-screen flex pb-10 bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-x-0 bottom-0 m-10 z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-end">
                        <div className="text-sm">
                            <h2 className='mb-2 mt-auto'>Projects</h2>
                        </div>
                        <div className="text-center hidden lg:block">
                            <span className="text-xs uppercase">Scroll Down</span> <br />
                            <Mouse className='text-white text-opacity-40 inline-block' size={40} strokeWidth={1} />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
            </section>
            <section className="py-40">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="sm:w-1/2 xl:w-1/3 mb-16">
                        <p className='text-gray-300'>{data.projectPage.data.attributes.description}</p>
                    </div>
                    <div className="grid gap-5 grid-cols-1 xl:grid-cols-2">
                        {data.projects.data.map((project) => (
                            <Link key={project.id} to={`/projects/${project.id}`} className='aspect-video overflow-hidden group relative'>
                                <img src={`http://localhost:1337${project.attributes.featured_image.data.attributes.formats.medium.url}`} alt="Project image" className='object-cover w-full h-full group-hover:scale-[1.2] hover:grayscale-0 duration-1000 grayscale' />
                                <div className="absolute top-0 inset-x-0 m-10">
                                    <div className="flex justify-between uppercase font-medium">
                                        <p>{project.attributes.title}</p>
                                        <p><Focus className='inline' size={18}/> {project.attributes.lens}</p>
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