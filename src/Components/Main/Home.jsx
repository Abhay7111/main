import React from 'react'
import Vnav from '../Nav/Vnav'
import { Outlet } from 'react-router-dom'
import Inputs from '../Inputs/Inputs'
import Testingform from '../Testing/Testingform'
import Homeoutlet from './Homeoutlet'
import Webdetails from '../Details/Webdetails.jsx'

function Home() {
  return (
     <div className='flex sm:flex-row flex-col calc-h bg-zinc-900'>
          <div className='min-w-20 flex flex-col items-center justify-start'>
          <Vnav/>
          </div>
          <div className='w-full h-fit overflow-y-auto sm:flex-row flex-col flex items-start justify-between px-3'>
          <div className='sm:w-[63vw] w-full overflow-y-auto calc-h'>
          <Testingform/>
          </div>
          <div className='relative w-full sm:w-[30vw] px-3 h-fit sm:h-screen overflow-y-auto border-t sm:border-l border-zinc-500'>
          <div className='w-full mb-1 rounded-lg p-1 text-zinc-300 h-fit sm:min-h-30 bg-zinc-800'>
          <Webdetails/>
          </div>
          </div>
          </div>
     </div>
  )
}

export default Home