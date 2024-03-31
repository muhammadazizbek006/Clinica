import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// LAYOUTS
import MainLayout from './layouts/MainLayout'

// PAGES
import Home from './pages/Home'
import  Xizmatlar  from './pages/Xizmatlar'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/xizmatlar' element={<Xizmatlar/>}/>
        <Route path='*'  element={<PageNotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App