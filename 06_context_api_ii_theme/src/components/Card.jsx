import React from 'react'

function Card() {
  return (
      <>
        <div  className="w-1/2 m-auto mt-20  text-black light:bg-gray-700 dark:bg-blue-400 dark:text-white p-4 rounded"  >
        <h2 className='text-center text-3xl'>Login</h2>
        <div className='flex flex-col items-center'>

        <input type="text" placeholder="username" 
               className='w-50 h-7 bg-gray-700 text-white border-0 rounded-md p-2 mt-4 focus:bg-gray-600 focus:outline-none 
                          transition ease-in-out duration-150 placeholder-gray-300'/>

        <input type="text" placeholder="password" 
                className='w-50 h-7 bg-gray-700 text-white border-0 rounded-md p-2 mt-1 focus:bg-gray-600 focus:outline-none 
                transition ease-in-out duration-150 placeholder-gray-300'/>

                
                 <button className='text-sm bg-violet-700 px-3 py-2 m-auto flex flex-wrap items-center mt-5 rounded-2xl'>submit</button>
         
        </div>

       
        </div>
        </>
  )
}

export default Card
