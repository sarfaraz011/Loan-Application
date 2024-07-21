import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Batches from './components/dashboard/dashboard.jsx'
import LoanApplication from './components/LoanApplication/LoanApplication.jsx'
import LoanReports from './components/LoanReports/LoanReports.jsx'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Batches />} />
      
      <Route path='/LoanApplication' element={<LoanApplication/>} />
      <Route path='/LoanReports' element={<LoanReports/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} /> 
  </React.StrictMode>,
)
