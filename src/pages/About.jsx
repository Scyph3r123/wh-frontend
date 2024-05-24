import { gql, useQuery } from '@apollo/client'
import { ChevronDown, Clapperboard, Facebook, Instagram, Mouse, Twitter } from 'lucide-react'
import React from 'react'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import WaitScreen from '../components/WaitScreen'

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
    const { loading, error, data } = useQuery(GETABOUT)

    if (loading) return <WaitScreen loading={loading}/>
    if (error) return <WaitScreen error={error}/>

    const backgroundImage = `http://localhost:1337${data.about.data.attributes.Background.data.attributes.formats.large.url}`

    return (
    <>
        
        <section className="relative pt-40 pb-20 min-h-screen flex flex-col overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="lg:w-2/3 xl:w-1/2 static z-10 mt-auto">
                <h3 className='mb-5'>About Us</h3>
                <div className="space-y-5 mb-10 prose prose-white prose-headings:underline prose-invert">
                    <BlocksRenderer content={[ ...data.about.data.attributes.Description ]} />
                </div>
            </div>
            <div className="mt-auto static z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 items-end">
                    <div className="text-sm">
                    </div>
                    <div className="text-center hidden lg:block group">
                        <span className="text-xs uppercase group-hover:animate-pulse group-hover:opacity-100 opacity-0">Scroll Down</span> <br />
                        <Mouse className='text-white text-opacity-40 inline-block' size={40} strokeWidth={1} />
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
        </section>
        <section className=" pt-40">
            <h6 className='mb-5'>The Team <ChevronDown className='inline' size={24}/></h6>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-0">
                {data.teams.data.map((team) => (
                    <div key={team.id} className='h-[600px] md:h-[500px] lg:h-[400px] xl:h-[800px] overflow-hidden relative group'>
                        <img src={`http://localhost:1337${team.attributes.image.data.attributes.formats.small.url}`} alt="" className='object-cover w-full h-full grayscale' />
                        <div className="absolute inset-0 bg-black group-hover:translate-x-0 -translate-x-full transition-transform ease-out duration-700"></div>
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
        </section>
    </>
    )
}

export default About