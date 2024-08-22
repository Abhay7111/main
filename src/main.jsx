import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Local from './Components/Local/Local.jsx'
import Inputs from './Components/Inputs/Inputs.jsx'
import Home from './Components/Main/Home.jsx'
import Vnav from './Components/Nav/Vnav.jsx'


const routes = createBrowserRouter([
  {path:'/', element:<Local/>,
    children:[
      {path:'', element:<Home/>, children:[{path:'', element:<Vnav/>,}]},
      {path:'getnav0132134542',
        children:[
          {path:'', element:<Home/>,children:[{path:'', element:<Vnav/>,}]},
          {path:':id', element:<Home/>,children:[{path:'', element:<Vnav/>,}]}
        ]
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
