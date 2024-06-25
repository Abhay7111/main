import React from 'react'

function Sitecard({sites}) {
  return (
    <div className='w-full sm:w-[290px] bg-green-400 rounded-lg p-1'>
        <div className='w-full h-auto bg-yellow-500 rounded-lg'>
          <img src={sites.image} className='w-full rounded-lg'/>
        </div>
    </div>
  )
}

export default Sitecard