import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h20 z-10 fixed bg-white text-black duration-300 ease-in'>
        <div className='flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4'>
            {/* cliickable name link */}
            <Link href='/#home'>
                <h1 className='text-3xl lg:text41 font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer'>Bobby</h1>
            </Link>
            
            {/* list items */}
            <div>
                <ul>
                    <Link href='/#home'>
                        <li className='ml-10 textsm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>home</li>
                        {/* youtube vid at 25:37 */}
                    </Link>
                </ul>

            </div>
        </div>
    </div>
  );
}

export default Navbar