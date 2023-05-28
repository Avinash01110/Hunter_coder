import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className='max-w-sm:hidden bg-white w-full'>
      <ul className='flex justify-center text-black font-bold font-Inter pt-6 mx-auto'>
        <Link href='/'><li className='px-2 sm:px-6 flex items-center cursor-pointer hover:text-blue-600'>Home</li></Link>
        <Link href='/About'><li className='px-2 sm:px-6 flex items-center cursor-pointer hover:text-blue-600'>About</li></Link>
        <Link href='/Blogs'><li className='px-2 sm:px-6 flex items-center cursor-pointer hover:text-blue-600'>Blogs</li></Link>
        <Link href='/Contact_us'><li className='px-2 sm:px-6 flex items-center cursor-pointer hover:text-blue-600'>Contact us</li></Link>
      </ul>
    </nav>
    </>
  )
}

export default Navbar