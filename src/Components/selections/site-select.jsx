import React from 'react'
import { Link } from 'react-router-dom'

function Site_select({sites}) {
  return (
     <Link to={`${sites.domain}`}>{sites.name}</Link>
  )
}

export default Site_select