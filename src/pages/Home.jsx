import React from 'react'
import { Facebook, Instagram, Mail, Mouse, Plus, Tag, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import text from '../assets/Winter-Hymns-Text-.png'

const Home = () => {
  return (
    <>
      <section className='flex'>
        <div className="m-auto flex flex-col items-center">
          <img src={logo} alt="Winter Hymns" className='h-[250px] pointer-events-none inline-block mb-5' />
          <img src={text} alt="Winter Hymns" className='w-[400px] pointer-events-none inline-block' />
        </div>
        <div className="absolute inset-x-0 bottom-0 m-10 text-sm uppercase text-gray-500">
            <div className="grid grid-cols-3 items-end">
                <div className="">&copy; 2024</div>
                <div className="text-center">Winter Hymns</div>
                <div className="text-right">All Rights Reserved</div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home