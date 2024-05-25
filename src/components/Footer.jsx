import React, { useEffect, useState } from 'react'


const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <>
            <div className="inset-x-0 bottom-0 m-10 text-xs cursor-default text-gray-500 font-medium">
                <div className="flex sm:flex-row flex-col text-center">
                    <div className="w-full sm:w-1/3 sm:text-left">&copy; {currentYear === 2024 ? currentYear : `2024-${currentYear}`}</div>
                    <div className="w-full sm:w-2/3 text-center flex items-center justify-center flex-wrap">Winter Hymns | Designed by <a href="https://nksquare.co.in" target="_blank" className='nav-link ml-1 inline' data-char="NK Square"><span>NK Square</span></a></div>
                    <div className="w-full sm:w-1/3 sm:text-right">All Rights Reserved</div>
                </div>
            </div>
        </>
    )
}

export default Footer