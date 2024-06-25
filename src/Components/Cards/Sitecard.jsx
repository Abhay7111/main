import React from 'react'

function Sitecard({sites}) {
  return (
    <a href={sites.url} target='_blank' className=' rounded-lg hover:scale-[1.02] transition-all hover:shadow-lg hover:shadow-zinc-800'>
      <div className='w-full sm:w-[260px] bg-zinc-800 hover:bg-zinc-900 rounded-lg gap-3 flex flex-col items-start justify-start px-2 pt-2 pb-4 '>
        <div className='w-full h-auto rounded-lg'>
          <img src={sites.image} className='w-full sm:h-[200px] sm:object-cover rounded-lg border border-clr2'/>
        </div>
        <div className='w-full pl-3'>
          <h1 className='text-xl font-semibold'>{sites.name}</h1>
          <p className='text-sm mt-2 text-zinc-400'>Owned by <a href={sites.ownedurl} className='text-sm font-medium underline underline-offset-2 text-zinc-300'>{sites.owned}</a></p>
          <p className='text-sm text-zinc-400'>Deploys from <a href={sites.platformurl} className='text-sm font-medium underline underline-offset-2 text-zinc-300'>{sites.platform}</a></p>
        </div>
    </div>
    </a>
  )
}

export default Sitecard