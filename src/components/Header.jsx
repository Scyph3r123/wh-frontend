import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import NavigaitonLinks from '../constants/NavigationLinks'
import { AnimatePresence, useScroll, motion } from 'framer-motion'
import SocialLinks from '../constants/SocialLinks'
import { Menu, X } from 'lucide-react'


const Header = () => {

    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        if (menu) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }

    const [ scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const HandleScroll = () => {
            if(window.scrollY > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', HandleScroll)

        return () => {
            window.removeEventListener('scroll', HandleScroll)
        }
    }, [])

    return (
        <div>
            <div className={`fixed inset-x-0 flex justify-between items-center top-0 px-4 md:px-8 pt-5 md:pt-8 z-50 ${menu ? 'text-black' : 'text-white'}`}>
                <div className='mr-20'>
                    <Link to={'/'} className='text-[22px] md:text-[30px] leading-[0.8] uppercase'>
                        Winter Hymns
                    </Link>
                </div>
                <div className='ml-auto mr-10 inset-x-0 lg:flex items-center justify-center space-x-2 hidden text-sm leading-none'>
                    {NavigaitonLinks.map((link)=> (
                        <Link key={link.id} to={link.route} className='nav-link border-8 border-transparent' data-char={link.title}>
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="">
                    <ul className="lg:flex items-center hidden">
                        {SocialLinks.map((links) => (
                            <li key={links.id}>
                                <a target="_blank" href={links.route} className='p-2 block text-white/70 hover:text-white'><links.icon size={20} strokeWidth={1.5}/></a>
                            </li>
                        ))}
                    </ul>
                    <button onClick={toggleMenu} className='p-1 lg:hidden text-sm'>
                        {menu ?  <X size={30}/> : <Menu size={30}/>}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {menu && <MobileMenu setMenu={setMenu} toggleMenu={toggleMenu} />}
            </AnimatePresence>
        </div>
    )
}

export default Header