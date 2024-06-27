import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Site from './Components/Routs/Site'
import Contact from './Components/Routs/Contact'
import Pricing from './Components/Routs/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] h-[100vh] bg-red-400'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element='Comming soon' />
          <Route path='/dashboard' element={<Main/>}>
          <Route path='site' element={<Site/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='pricing' element={<Pricing/>}/>
          </Route>
          <Route path='*' element='404 Error'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
