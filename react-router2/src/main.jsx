import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Layout from './Layout'
import About from './components/About/About'
import Ewaste from './components/Ewaste/Ewaste'
import User from './components/User/User'
import Github from './components/Github/Github'

// const route = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       }, 
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/ewaste',
//         element: <Ewaste />
//       }
//     ]
//   }
// ])

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='ewaste' element={<Ewaste />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github/:userid' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
