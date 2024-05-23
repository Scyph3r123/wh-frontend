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
      </section>
    </>
  )
}

export default Home