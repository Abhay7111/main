import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';

function Local() {
  return (
    <div className='bg-zinc-100 w-full h-screen'>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Local;