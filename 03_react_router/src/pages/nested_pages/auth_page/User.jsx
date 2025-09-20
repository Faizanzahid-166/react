
import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {id} = useParams();
  return (
    <div>
      <h1 className='m-auto  mt-10 text-blue-700'>User: {id}</h1>
    </div>
  )
}


export default User