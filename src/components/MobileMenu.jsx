import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = (setMenu) => {
  return (
    <div className='fixed inset-0 bg-white flex text-black z-40'>
        <div className="text-center m-auto flex flex-col text-6xl">
            <Link to="/" className='uppercase' data-char="Home" onClick={()=>{setMenu(false)}}>
                <span>Home</span>
            </Link>
            <Link to="/about" className='uppercase' data-char="About Us" onClick={()=>{setMenu(false)}}>
                <span>About Us</span>
            </Link>
            <Link to="/projects" className='uppercase' data-char="Projects" onClick={()=>{setMenu(false)}}>
                <span>Projects</span>
            </Link>
            <Link to="/contact" className='uppercase' data-char="Contact" onClick={()=>{setMenu(false)}}>
                <span>Contact</span>
            </Link>
        </div>
        
    </div>
  )
}

export default MobileMenu