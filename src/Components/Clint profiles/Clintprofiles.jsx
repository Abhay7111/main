import React from 'react'
import Vnav from '../Nav/Vnav'
import Profile from './Profile'

function Clintprofiles() {
  return (
    <div className='calc-h bg-zinc-900 flex flex-col sm:flex-row'>
     <div className='w-1/4'>
          <Vnav/>
     </div>
     <div className='w-3/4 overflow-y-auto'>
          <Profile/>
     </div>
    </div>
  )
}

export default Clintprofiles