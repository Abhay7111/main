import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Site from './Components/Routs/Site'
import Contact from './Components/Routs/Contact'
import Pricing from './Components/Routs/Pricing'
import Home from './Components/Home/Home'
import Works from './Components/Routs/works'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] h-[100vh] bg-zinc-900'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dashboard' element={<Main/>}>
            <Route path='site' element={<Site/>}>
              <Route path='*' element='error site'/>
            </Route>
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
