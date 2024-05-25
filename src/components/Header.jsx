import { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import NavigaitonLinks from '../constants/NavigationLinks'
import { AnimatePresence } from 'framer-motion'


const Header = () => {

    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    return (
        <div>
            <div className="fixed inset-x-0 top-0 flex items-start px-4 md:px-8 pt-5 md:pt-8 z-50 mix-blend-difference text-gray-300">
                <div className='font-semibold lg:text-[60px] text-[30px] leading-[0.8] uppercase cursor-default'>
                    Winter <br /> Hymns <span className='text-xs'>F i l m s</span>
                </div>
                <div className="lg:hidden ml-auto">
                    <button onClick={toggleMenu} className='p-3'>
                        {menu ? 'Close' : 'Menu'}
                    </button>
                </div>
                <div className='lg:flex items-center space-x-2 ml-auto hidden text-sm leading-none'>
                    {NavigaitonLinks.map((link)=> (
                        <Link key={link.id} to={link.route} className='nav-link border-8 border-transparent' data-char={link.title}>
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {menu && <MobileMenu setMenu={setMenu} toggleMenu={toggleMenu} />}
            </AnimatePresence>
        </div>
    )
}

export default Header