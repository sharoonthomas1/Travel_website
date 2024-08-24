import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import {Home,AccountDetails ,PersonalInfo, Hotels,Card02Details,CardDetails ,Things,ProfileEdit,ReserveNow,ContactDetails} from "/src/index.js"

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='profle' element={<ProfileEdit/>}/>
        <Route path='account' element={<AccountDetails/>}/>
        <Route path='hotels' element={<Hotels/>}/>
        <Route path='Things' element={<Things/>}/>
        <Route path='detail' element={<Card02Details/>}/>
        <Route path='reserve' element={<ReserveNow/>}>
             <Route path='' element={<ContactDetails/>}/>
             <Route path='payment' element={<h1>Payment</h1>}/>
        </Route>
        <Route path='cardDetails' element={<CardDetails/>}/>
        <Route path='Things' element={<h1 className='py-4 text-white bg-black text-center'>Things</h1>}/>
        <Route path='Restaurants' element={<h1 className='py-4 text-white bg-black text-center'>Restaurants</h1>}/>
        <Route path='Flights' element={<h1 className='py-4 text-white bg-black text-center'>Flights</h1>}/>
        <Route path='Vacation' element={<h1 className='py-4 text-white bg-black text-center'>Vacation</h1>}/>
        <Route path='Cruises' element={<h1 className='py-4 text-white bg-black text-center'>Cruises</h1>}/>
        <Route path='Rental' element={<h1 className='py-4 text-white bg-black text-center'>Rental</h1>}/>
        <Route path='Forums' element={<h1 className='py-4 text-white bg-black text-center'>Forums</h1>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
