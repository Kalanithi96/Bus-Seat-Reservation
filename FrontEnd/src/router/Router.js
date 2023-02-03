import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import AdminHome from './../pages/AdminHome';
import AdminLogin from './../pages/AdminLogin';
import Bookings from './../pages/Bookings';
import Bus from './../pages/Bus';
import CustomerLogin from './../pages/CustomerLogin';
import CustomerRegister from './../pages/CustomerRegister';
import Home from './../pages/Home';
import PassengerDetails from './../pages/PassengerDetails';
import SearchResults from './../pages/SearchResults';
import UserType from './../pages/UserType';


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/adminHome' element={<AdminHome/>}/>
            <Route path='/adminLogin' element={<AdminLogin/>}/>
            <Route path='/bookings' element={<Bookings/>}/>
            <Route path='/bus/:id' element={<Bus/>}/>
            <Route path='/customerLogin' element={<CustomerLogin/>}/>
            <Route path='/customerRegister' element={<CustomerRegister/>}/>
            <Route path='/passengerDetails' element={<PassengerDetails/>}/>
            <Route path='/userType' element={<UserType/>}/>
            <Route path='/bus/search' element={<SearchResults/>}/>
            
        </Routes>
    );
};

export default Routers;

