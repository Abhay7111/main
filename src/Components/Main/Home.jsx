import React from 'react'
import Vnav from '../Nav/Vnav'
import { Outlet } from 'react-router-dom'
import Inputs from '../Inputs/Inputs'
import Testingform from '../Testing/Testingform'
import Homeoutlet from './Homeoutlet'
import Webdetails from '../Details/Webdetails.jsx'
import List from '../Clint profiles/ClintList/List.jsx'
import Dshow from './dshow.jsx'

function Home() {
  return (
     <div className='flex sm:flex-row flex-col bg-zinc-900'>
          <div className='min-w-20 flex flex-col items-center justify-start'>
          <Vnav/>
          </div>
          <div className='w-full h-fit overflow-y-auto sm:flex-row flex-col flex items-start justify-between px-3'>
          <div className='sm:min-w-[63vw] w-full overflow-y-auto'>
          <Dshow/>
          </div>
          </div>
     </div>
  )
}

export default Home