import React from 'react'

function Site_select({sites}) {
  return (
     <option value={`${sites.domain}`} className='site-option' >{sites.name}</option>
  )
}

export default Site_select