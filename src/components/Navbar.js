import React, { Component } from 'react'
import Logo from '../img/dc.png'

export class Navbar extends Component {
    render() {
        return (
            <div className='flex justify-between items-center text-white' style={{ "backgroundColor": "#2B2C2A" }}>
                {/* Logo */}
                <div className='p-4'>
                    <img alt='DC Logo' src={Logo} className='w-1/4 md:w-1/2' />
                </div>
                {/* Menu */}
                <div className='flex'>
                    <div className='p-2 md:p-4 text-md md:text-2xl' style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                        <a href='/' className='hover:text-[#FF620E]'>
                            HOME
                        </a>
                    </div>
                    <div className='p-2 md:p-4 text-md md:text-2xl' style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                        <a href='/' className='hover:text-[#FF620E]'>
                            ABOUT US
                        </a>
                    </div>
                    <div className='p-2 md:p-4 text-md md:text-2xl' style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                        <a href='/' className='hover:text-[#FF620E]'>
                            AWARDS
                        </a>
                    </div>
                    <div className='p-2 md:p-4 text-md md:text-2xl' style={{ "fontFamily": "Yanone Kaffeesatz" }}>
                        <a href='/' className='hover:text-[#FF620E]'>
                            JOIN US
                        </a>
                    </div>
                </div>
                {/* Search button */}
                <div className='p-2 pr-4 md:p-4 md:pr-6 hover:text-[#FF620E]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        )
    }
}

export default Navbar