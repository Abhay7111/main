import React from 'react'
import Vnav from '../Nav/Vnav'
import { Outlet } from 'react-router-dom'
import Inputs from '../Inputs/Inputs'
import Testingform from '../Testing/Testingform'
import Homeoutlet from './Homeoutlet'

function Home() {
  return (
     <div className='flex calc-h bg-zinc-900'>
          <div className='min-w-20 border-r border-zinc-700 flex flex-col items-center justify-start'>
          <Vnav/>
          </div>
          <div className='overflow-y-auto w-full'> <Outlet/> </div>
     </div>
  )
}

export default Home