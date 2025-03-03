import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    let {userid} = useParams();
  return (
    <div className='text-center'>User: {userid}</div>
  )
}

export default User