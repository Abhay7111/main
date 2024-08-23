import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Local from './Components/Local/Local.jsx'
import Inputs from './Components/Inputs/Inputs.jsx'
import Home from './Components/Main/Home.jsx'
import Vnav from './Components/Nav/Vnav.jsx'
import Webdetails from './Components/Details/Webdetails.jsx'
import Testingform from './Components/Testing/Testingform.jsx'


const routes = createBrowserRouter([
  {path:'/', element:<Local/>,
    children:[
      {path:'', element:<Home/>,
        children:[
          {path:'', element:<Testingform/>,},
          {path:'form', element:<Inputs/>,},
          {path:':id', element:<Webdetails/>,},
        ]
      },
      {path:'about', element:<Home/>,},
      {path:'price', element:<Home/>,},
      {path:'services', element:<Home/>,},
      {path:'contact', element:<Home/>,},
      {path:'form', element:<Inputs/>,},
      {path:'getnav0132134542',
        children:[
          {path:'', element:<Home/>,},
          {path:':id', element:<Home/>,
            children:[
              {path:'', element:<Webdetails/>}
            ]
          }
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
