import React from 'react'
import logo from '../assets/logo.png'
import text from '../assets/Winter-Hymns-Text-.png'
import { motion } from 'framer-motion'

const logoVariant = {
  initial : {
    scale: 3,
    opacity: 0
  },
  animate : {
    scale : 1,
    opacity: 1,
    transition : {
      duration : 2
    }
  }
}
const textVariant = {
  initial : {
    y: 100,
    opacity: 0
  },
  animate : {
    y: 0,
    opacity: 1,
    transition : {
      delay : 2,
      duration: 2
    }
  }
}

const Home = () => {
  return (
    <>
      <section className='flex'>
        <div className="m-auto flex flex-col items-center">
          <motion.img variants={logoVariant} initial="initial" animate="animate" src={logo} alt="Winter Hymns" className='h-[250px] pointer-events-none inline-block mb-5' />
          <motion.img variants={textVariant} initial="initial" animate="animate" src={text} alt="Winter Hymns" className='w-[300px] pointer-events-none inline-block' />
        </div>
      </section>
    </>
  )
}

export default Home