import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavigaitonLinks from '../constants/NavigationLinks'
import { stagger, useAnimate, motion, animate, delay } from 'framer-motion'
import SocialLinks from '../constants/SocialLinks'

const menuVariant = {
    initial : {
        opacity : 0
    },
    enter : {
        opacity : 1,
        transition : {
            duration: 0.4,
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    },
    exit : {
        opacity : 0,
        transition : {
            duration: 0.5,
        }
    }
}

const listVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration : 0.4
        }
    }
}

const MobileMenu = ({setMenu, menu}) => {

    return (
        <motion.div className='fixed inset-0 bg-white flex flex-col text-black z-40' variants={ menuVariant } initial="initial" animate="enter" exit="exit">
            <ul className="text-center mt-auto flex flex-col text-6xl">
                {NavigaitonLinks.map((link)=> (
                    <motion.li key={link.id} variants={listVariants}>
                        <Link to={link.route} className='nav-link mobile-links' data-char={link.title} onClick={()=>setMenu(false)}>
                            <span>{link.title}</span>
                        </Link>
                    </motion.li>
                ))}
            </ul>
            <motion.ul initial={{opacity: 0}} animate={{opacity:1, transition:{duration:2}}} className='flex justify-center mt-auto mb-10'>
                {SocialLinks.map((social)=>(
                    <li key={social.id}>
                        <a href={social.route} title={social.title} className='p-2 block'>
                            <social.icon size={24} />
                        </a>
                    </li>
                ))}
            </motion.ul>
        </motion.div>
    )
}

export default MobileMenu