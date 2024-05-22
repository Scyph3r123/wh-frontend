import { ChevronDown, Clapperboard, Facebook, Instagram, Mouse, Twitter } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <>
        <section className='pt-40 pb-20 min-h-screen flex flex-col'>
            <div className="lg:w-1/2 mx-auto">
                <h2 className='mb-10'>About <br /> Us <Clapperboard size={68} strokeWidth={1} className='inline'/></h2>
                <div className="space-y-5 text-xl mb-10">
                    <p className=''>Winter Hymns, born in 2018 from the aspirations of a passionate and creative collective, is a production company on a mission to share compelling stories with a global audience. While our primary focus currently revolves around crafting captivating short films, our ambitions extend to the creation of feature films in the near future.</p>
                    <p>Our journey has been marked by recognition and acclaim, with our short films earning coveted slots at prestigious film festivals worldwide, including the International Film Festival of Rotterdam, the Clermont-Ferrand International Film Festival, the Melbourne International Film Festival, and the Palm Springs International ShortFest.</p>
                    <p>Although we find our roots in the vibrant culture of the North East of India, we've also ventured into the realm of international productions, showcasing our adaptability and ability to resonate with diverse audiences around the globe. At Winter Hymns, we are driven by a passion for storytelling and a commitment to sharing our narratives with the world.</p>
                </div>
            </div>
            <div className="mt-auto">
                <div className="grid grid-cols-3 items-end">
                    <div className="text-sm">
                    </div>
                    <div className="text-center">
                        <span className="text-xs uppercase">Scroll Down</span> <br />
                        <Mouse className='text-white text-opacity-40 inline-block' size={40} strokeWidth={1} />
                    </div>
                </div>
            </div>
        </section>
        <section className="">
            <h6 className='mb-5'>The Team <ChevronDown className='inline' size={24}/></h6>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-0">
                <div className='h-[600px] md:h-[400px] xl:h-[800px] overflow-hidden relative group'>
                    <img src="https://picsum.photos/id/106/500/700" alt="" className='object-cover w-full h-full' />
                    <div className="absolute inset-0 bg-black group-hover:translate-x-0 -translate-x-full transition-transform ease-out duration-700"></div>
                    <div className="absolute bottom-0 left-0 m-10">
                        <h6 className='mb-5 transition-all translate-y-10 group-hover:translate-y-0 delay-100 group-hover:opacity-100 opacity-0 duration-500'>Theja Rio</h6>
                        <div className="flex items-center space-x-2 transition-all translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-500">
                            <a href="" className='p-2'><Facebook/></a>
                            <a href="" className='p-2'><Instagram/></a>
                            <a href="" className='p-2'><Twitter/></a>
                        </div>
                    </div>
                </div>
                <div className='h-[600px] md:h-[400px] xl:h-[800px] overflow-hidden relative group'>
                    <img src="https://picsum.photos/id/102/500/700" alt="" className='object-cover w-full h-full' />
                    <div className="absolute inset-0 bg-black group-hover:translate-x-0 -translate-x-full transition-transform ease-out duration-700"></div>
                    <div className="absolute bottom-0 left-0 m-10">
                        <h6 className='mb-5 transition-all translate-y-10 group-hover:translate-y-0 delay-100 group-hover:opacity-100 opacity-0 duration-500'>Dan Pusa</h6>
                        <div className="flex items-center space-x-2 transition-all translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-500">
                            <a href="" className='p-2'><Facebook/></a>
                            <a href="" className='p-2'><Instagram/></a>
                            <a href="" className='p-2'><Twitter/></a>
                        </div>
                    </div>
                </div>
                <div className='h-[600px] md:h-[400px] xl:h-[800px] overflow-hidden relative group'>
                    <img src="https://picsum.photos/id/104/500/700" alt="" className='object-cover w-full h-full' />
                    <div className="absolute inset-0 bg-black group-hover:translate-x-0 -translate-x-full transition-transform ease-out duration-700"></div>
                    <div className="absolute bottom-0 left-0 m-10">
                        <h6 className='mb-5 transition-all translate-y-10 group-hover:translate-y-0 delay-100 group-hover:opacity-100 opacity-0 duration-500'>Kechavor Theunuo</h6>
                        <div className="flex items-center space-x-2 transition-all translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-500">
                            <a href="" className='p-2'><Facebook/></a>
                            <a href="" className='p-2'><Instagram/></a>
                            <a href="" className='p-2'><Twitter/></a>
                        </div>
                    </div>
                </div>
                <div className='h-[600px] md:h-[400px] xl:h-[800px] overflow-hidden relative group'>
                    <img src="https://picsum.photos/id/103/500/700" alt="" className='object-cover w-full h-full' />
                    <div className="absolute inset-0 bg-black group-hover:translate-x-0 -translate-x-full transition-transform ease-out duration-700"></div>
                    <div className="absolute bottom-0 left-0 m-10">
                        <h6 className='mb-5 transition-all translate-y-10 group-hover:translate-y-0 delay-100 group-hover:opacity-100 opacity-0 duration-500'>Lima Longchari</h6>
                        <div className="flex items-center space-x-2 transition-all translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-500">
                            <a href="" className='p-2'><Facebook/></a>
                            <a href="" className='p-2'><Instagram/></a>
                            <a href="" className='p-2'><Twitter/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About