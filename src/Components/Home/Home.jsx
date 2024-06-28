import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
     <div className=''>
          <ul>
               <li><Link to='/dashboard'>dashboard</Link></li>
               
          </ul>
     </div>
    </div>
  )
}

export default Home