import { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div>
            <div className="fixed inset-x-0 top-0 flex items-start px-4 md:px-8 pt-5 md:pt-8 z-50 mix-blend-difference text-gray-300">
                <div className='font-semibold lg:text-[60px] text-[30px] leading-[0.8] uppercase cursor-default'>
                    Winter <br /> Hymns <span className='text-xs'>F i l m s</span>
                </div>
                <div className="lg:hidden ml-auto">
                    <button onClick={()=> setMenu(!menu)} className='p-3'>
                        {menu ? 'Close' : 'Menu'}
                    </button>
                </div>
                <div className='lg:flex items-center space-x-2 ml-auto hidden text-sm leading-none'>
                    <Link to="/" className='nav-link border-8 border-transparent' data-char="Home">
                        <span>Home</span>
                    </Link>
                    <Link to="/about" className='nav-link border-8 border-transparent' data-char="About Us">
                        <span>About Us</span>
                    </Link>
                    <Link to="/projects" className='nav-link border-8 border-transparent' data-char="Projects">
                        <span>Projects</span>
                    </Link>
                    <Link to="/contact" className='nav-link border-8 border-transparent' data-char="Contact">
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
            {menu && <MobileMenu setMenu={setMenu} />}
        </div>
    )
}

export default Header