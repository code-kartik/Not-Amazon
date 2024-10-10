import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-5 py-5 bg-black text-white overflow-hidden'>
        <h2 className='text-xxl font-bold'>Not Amazon</h2>
        <div className='flex items-center justify-center space-x-5 underline'>
            <Link to='/' className='hover:text-gray-300'>Home</Link>
            <Link to='/product' className='hover:text-gray-300'>Products</Link>
            <Link to='/contact' className='hover:text-gray-300'>Contact</Link>
            <Link to='/about' className='hover:text-gray-300'>About</Link>
        </div>
        <div>
          <button className='border-white border rounded-md px-2 py-1 text-[14px]'>Sign up</button>
          <button className='rounded-md py-1 px-2 bg-white text-black font-semibold ml-3 text-[14px]'>Log in</button>
        </div>
    </div>
  )
}

export default Header