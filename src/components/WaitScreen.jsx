import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const WaitScreen = ({loading, error}) => {
  return (
    <section className='min-h-screen flex'>
        <p className='m-auto text-sm text-gray-400 text-center'>
            {loading ? (
                <>
                    <img src={logo} alt="" width={100} className='animate-pulse' />
                    Loading...
                </>
            ) : (
                <>
                    Error! {error.message} <br />
                    <Link to='/' className="nav-link" data-char="Return Home"><span>Return Home</span></Link>
                </>
            )}
        </p>
    </section>
  )
}

export default WaitScreen