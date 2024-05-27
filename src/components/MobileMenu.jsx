import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavigaitonLinks from '../constants/NavigationLinks'
import { stagger, useAnimate, motion, animate, delay } from 'framer-motion'

const menuVariant = {
    initial : {
        y: 100,
        opacity : 0
    },
    enter : {
        y: 0,
        opacity : 1,
        transition : {
            duration: 0.4,
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    },
    exit : {
        y: -100,
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
        <motion.div className='fixed inset-0 bg-white flex text-black z-40' variants={ menuVariant } initial="initial" animate="enter" exit="exit">
            <ul className="text-center m-auto flex flex-col text-6xl">
                {NavigaitonLinks.map((link)=> (
                    <motion.li key={link.id} variants={listVariants}>
                        <Link to={link.route} className='nav-link mobile-links' data-char={link.title} onClick={()=>setMenu(false)}>
                            <span>{link.title}</span>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default MobileMenu