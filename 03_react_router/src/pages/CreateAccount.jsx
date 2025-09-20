
import React from 'react'
import { Link, Outlet, NavLink} from 'react-router';

export default function CreateAccount() {
  return (
    <>
      <h1 className='text-2xl text-blue-950 mt-10'>Sign_up or Log_in</h1>
      <p>nexted route click on button</p>
      <div className='w-fit flex flex-wrap m-auto ml-auto gap-1 '>     
        <Link className='p-2 bg-gray-500 rounded-xl hover:bg-red-700 hover:text-black' to="signup">Signup</Link><br/>
        <NavLink className='p-2 bg-gray-500 rounded-xl  hover:bg-green-700  hover:text-black' to="login">Login</NavLink>
      </div>
 
      <Outlet />
      
    </>
  )
}

