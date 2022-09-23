import Link from 'next/link'
import React from 'react'

import {FaBars, FaTimes, FaTwitch, FaGithub, FaLinkedin} from 'react-icons/fa'

const Navbar = () => {
    
    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'portfolio'
        },
        {
            id:3,
            link: 'experience'
        },
        {
            id:4,
            link: 'me'
        },
        {
            id:5,
            link: 'contact'
        },
    ]
  
    return (
    <div className='w-full h20 z-10 fixed bg-white text-black duration-300 ease-in'>
        <div className='flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4'>
            {/* cliickable name link */}
            <Link href='/#home'>
                <h1 className='text-3xl lg:text41 font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer'>Bobby</h1>
            </Link>
            
            {/* menu list items */}
            <div>
                <ul className='hidden md:flex'>
                    {links.map(({id, link}) => (
                        <Link key={id} href={`/#{link}`}>
                            <li className='ml-10 textsm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>{link}</li>
                        </Link>
                    ))}
                </ul>

                <div className='md:hidden'>
                <FaBars size={30} />
                </div>
            </div>
        </div>

        <div className='fixed left-0 top-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500'></div>
    </div>
  );
}

export default Navbar