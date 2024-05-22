import { Mouse, Tag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <>
            <section className='min-h-screen flex pb-10 '>
                <div className="absolute inset-x-0 bottom-0 m-10">
                    <div className="grid grid-cols-3 items-end">
                        <div className="text-sm">
                            <h2 className='mb-2 mt-auto'>Projects</h2>
                        </div>
                        <div className="text-center">
                            <span className="text-xs uppercase">Scroll Down</span> <br />
                            <Mouse className='text-white text-opacity-40 inline-block' size={40} strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-40">
                <div className="sm:w-1/2 xl:w-1/3 mb-16">
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur ad, ea quo veniam, est et soluta necessitatibus fugit ab saepe, nobis sit velit. Magnam nesciunt doloremque hic enim saepe.</p>
                </div>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                <Link to="/" className='h-[500px] lg:h-[800px] overflow-hidden group relative'>
                    <img src="https://picsum.photos/id/117/500/700" alt="Project image" className='object-cover w-full h-full group-hover:scale-[1.2] hover:grayscale-0 duration-1000 grayscale' />
                    <div className="absolute top-0 inset-x-0 m-10">
                    <div className="flex justify-between uppercase font-medium">
                        <p>Lorem Ipsum</p>
                        <p><Tag className='inline' size={18}/> Design</p>
                    </div>
                    </div>
                </Link>
                <Link to="/" className='h-[500px] lg:h-[800px] overflow-hidden group relative'>
                    <img src="https://picsum.photos/id/137/500/700" alt="Project image" className='object-cover w-full h-full group-hover:scale-[1.2] hover:grayscale-0 duration-1000 grayscale' />
                    <div className="absolute top-0 inset-x-0 m-10">
                    <div className="flex justify-between uppercase font-medium">
                        <p>Lorem Ipsum</p>
                        <p><Tag className='inline' size={18}/> Design</p>
                    </div>
                    </div>
                </Link>
                <Link to="/" className='h-[500px] lg:h-[800px] overflow-hidden group relative'>
                    <img src="https://picsum.photos/id/116/500/700" alt="Project image" className='object-cover w-full h-full group-hover:scale-[1.2] hover:grayscale-0 duration-1000 grayscale' />
                    <div className="absolute top-0 inset-x-0 m-10">
                    <div className="flex justify-between uppercase font-medium">
                        <p>Lorem Ipsum</p>
                        <p><Tag className='inline' size={18}/> Design</p>
                    </div>
                    </div>
                </Link>
                <Link to="/" className='h-[500px] lg:h-[800px] overflow-hidden group relative'>
                    <img src="https://picsum.photos/id/118/500/700" alt="Project image" className='object-cover w-full h-full group-hover:scale-[1.2] hover:grayscale-0 duration-1000 grayscale' />
                    <div className="absolute top-0 inset-x-0 m-10">
                    <div className="flex justify-between uppercase font-medium">
                        <p>Lorem Ipsum</p>
                        <p><Tag className='inline' size={18}/> Design</p>
                    </div>
                    </div>
                </Link>
                </div>
                {/* <div className="text-center mt-10">
                    <Link to="/" className="nav-link" data-char="More Projects">
                        <span>More Projects</span>
                    </Link>
                </div> */}
            </section>
        </>
    )
}

export default Projects