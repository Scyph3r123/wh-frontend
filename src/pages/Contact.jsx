import { Facebook, Instagram, Youtube } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <section className='flex relative'>
            <div className="m-auto text-center">
                <div className='mb-10'>
                    <p className="text-gray-500 mb-3">Mail us</p>
                    <p>films@thejario.com</p>
                </div>
                <div>
                    <p className="text-gray-500 mb-3">Follow Us</p>
                    <div className="flex items-center justify-between">
                        <a href="" className='social-icon'><Facebook size={24} strokeWidth={1.5}/></a>
                        <a href="" className='social-icon'><Instagram size={24} strokeWidth={1.5}/></a>
                        <a href="" className='social-icon'><Youtube size={24} strokeWidth={1.5}/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact