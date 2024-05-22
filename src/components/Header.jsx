import { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div>
            <div className="fixed inset-x-0 top-0 flex items-start p-8 z-50 mix-blend-difference text-gray-300">
                <div className='font-semibold sm:text-[60px] text-[30px] leading-[0.8] uppercase cursor-none'>
                    Winter <br /> Hymns <span className='text-xs'>F i l m s</span>
                </div>
                <div className="lg:hidden ml-auto">
                    <button onClick={()=> setMenu(!menu)}>Menu</button>
                </div>
                <div className='lg:flex items-center space-x-5 ml-auto hidden'>
                    <Link to="/" className='nav-link' data-char="Home">
                        <span>Home</span>
                    </Link>
                    <Link to="/about" className='nav-link' data-char="About Us">
                        <span>About Us</span>
                    </Link>
                    <Link to="/projects" className='nav-link' data-char="Projects">
                        <span>Projects</span>
                    </Link>
                    <Link to="/contact" className='nav-link' data-char="Contact">
                        <span>Contact</span>
                    </Link>
                </div>
            </div>
            {menu && <MobileMenu setMenu={setMenu} />}
        </div>
    )
}

export default Header