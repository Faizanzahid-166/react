import React, {useContext, useState} from 'react'
import Usercontext from "../context/Usercontext";


function Profile() {


    const {user, error} = useContext(Usercontext)


  if (!user || !user.username && !user.password)   return <div className='w-1/2 m-auto mt-20 p-6 bg-gray-600 rounded-2xl text-center text-xl'>
                        <h1>PLease login</h1>
                        {error && (
          <div className='text-red-500  mt-2 text-sm font-bold'>{error}</div>
        )}
                        </div>
  
                return <div className='w-1/2 m-auto mt-20 p-6 bg-gray-600 rounded-2xl text-center text-xl'>
                    Welcome {user.username}
                       </div>
  
}

export default Profile
