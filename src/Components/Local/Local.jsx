import React from 'react';
import { Outlet } from 'react-router-dom';
import MaiNnav from '../Nav/MainNav';

function Local() {
  return (
    <div className='bg-zinc-100 w-full'>
      <MaiNnav/>
    <Outlet/>
    </div>
  )
}

export default Local