import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Local from './Components/Local/Local.jsx';
import Inputs from './Components/Inputs/Inputs.jsx';
import Home from './Components/Main/Home.jsx';
import Vnav from './Components/Nav/Vnav.jsx';
import Webdetails from './Components/Details/Webdetails.jsx';
import Testingform from './Components/Testing/Testingform.jsx';
import Clintprofiles from './Components/Clint profiles/Clintprofiles.jsx';
import Login from './Components/Login/Login.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import List from './Components/Clint profiles/ClintList/List.jsx';
import Dshow from './Components/Main/dshow.jsx';
import Details from './Components/Details/Details.jsx';
// import '../src/functions/oof.js'


const routes = createBrowserRouter([
  {path:'/', element:<Local/>,
    children:[
      {path:'', element:<Home/>,
        children:[
          {path:'', element:<Dshow/>,
            children:[
              {path:'', element:<List/>,},
              {path:'info', element:<Testingform/>,},
            ]
          },
          {path:'details', element:<Details/>,
            children:[
              {path:':id', element:<Webdetails/>,},
            ]
          },
          {path:'*', element:<Home/>,},
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
          {path:':id', element:<Home/>,},
          {path:'*', element:<Home/>,},
        ]
      },
    ]
  },
  {
    path:'profile/:id', element:<Local/>,
    children:[
      {path:'', element:<Clintprofiles/>,}
    ]
  },
  {path:'login', element:<Login/>},
  {path:'dashboard', element:<Dashboard/>,},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
