import React from 'react'
import { Outlet } from 'react-router-dom'

function Local() {
  return (
    <div className='bg-zinc-100 w-full'>Local Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, temporibus?
    <Outlet/>
    </div>
  )
}

export default Local