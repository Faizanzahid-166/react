<<<<<<< HEAD
import React from 'react'
import { Link } from "react-router";

function Header() {
  return (
    <div className='w-full bg-blue-600 p-1 '>
        <div className='bg-gray-800 p-3 text-white grid grid-cols-2 gap-5 '>
            <div className='ml-5 p-1 col-span-1 '> 
              <h1 className='text-xl text-red-600'>React Router</h1>
           </div>

           <nav  className="p-1 space-x-10 col-span-1 justify-self-end ">
            <Link to="/">Home</Link>
            <Link to="/about">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/authpage">Create Account</Link>
            {/* <Link to="/achievements">Achievements</Link> */}
           </nav>
        </div>
    </div>
  )
}

export default Header
=======
import React from 'react'
import { Link } from "react-router";

function Header() {
  return (
    <div className='w-full bg-blue-600 p-1 '>
        <div className='bg-gray-800 p-3 text-white grid grid-cols-2 gap-5 '>
            <div className='ml-5 p-1 col-span-1 '> 
              <h1 className='text-xl text-red-600'>React Router</h1>
           </div>

           <nav  className="p-1 space-x-10 col-span-1 justify-self-end ">
            <Link to="/">Home</Link>
            <Link to="/about">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/authpage">Create Account</Link>
            {/* <Link to="/achievements">Achievements</Link> */}
           </nav>
        </div>
    </div>
  )
}

export default Header
>>>>>>> 84c16d9 (first commit)
