import React from 'react'
import logo from '../assets/logo.png'
import text from '../assets/text.svg'
import { motion } from 'framer-motion'
import { gql, useQuery } from '@apollo/client'
import WaitScreen from '../components/WaitScreen'
import apiPath from '../apiPath'

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

const GETHOMEPAGE = gql`
  query getHomepage {
    homepage {
      data {
        attributes {
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

const Home = (client) => {
  const { loading, error, data } = useQuery(GETHOMEPAGE)
  
  if (loading) return <WaitScreen loading={loading}/>
  if (error) return <WaitScreen error={error}/>
  const backgroundImage = `${client.uri}${data.homepage.data.attributes.background.data.attributes.formats.large.url}`
  
  return (
    <>
      <div className='min-h-[calc(100vh-100px)] flex bg-cover bg-center relative'>
        <motion.div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/60 z-10" />
        <div className="m-auto flex flex-col items-center static z-10">
          <motion.img variants={logoVariant} initial="initial" animate="animate" src={logo} alt="Winter Hymns" className='h-[250px] pointer-events-none inline-block mb-5' />
          <motion.img variants={textVariant} initial="initial" animate="animate" src={text} alt="Winter Hymns" className='w-[300px] pointer-events-none inline-block' />
        </div>
      </div>
    </>
  )
}

export default Home