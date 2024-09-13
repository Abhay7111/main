import React from 'react'

function Close() {
  return (
    <i onClick={()=>setOpen(false)} class="ri-close-fill text-2xl cursor-pointer px-1 border border-transparent hover:border-zinc-400 rounded-full w-fit absolute"></i>
  )
}

export default Close