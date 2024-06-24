import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-[100vh] bg-red-400'>
      <Main/>
    </div>
  )
}

export default App
