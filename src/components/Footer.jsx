import React, { useEffect, useState } from 'react'


const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <>
            <div className="inset-x-0 bottom-0 m-10 text-xs uppercase cursor-default text-gray-400 font-medium">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-end text-center">
                    <div className="sm:text-left">&copy; {currentYear === 2024 ? currentYear : `2024-${currentYear}`}</div>
                    <div className="text-center flex items-center justify-center">Winter Hymns | Designed by <a href="https://nksquare.co.in" target="_blank" className='nav-link ml-1' data-char="NK Square"><span>NK Square</span></a></div>
                    <div className="sm:text-right">All Rights Reserved</div>
                </div>
            </div>
        </>
    )
}

export default Footer