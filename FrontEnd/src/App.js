import { Route, Routes } from 'react-router-dom';
import './App.css';

import AdminHome from './pages/AdminHome';
import AdminLogin from './pages/AdminLogin';
import Bookings from './pages/Bookings';
import Bus from './pages/Bus';
import CustomerLogin from './pages/CustomerLogin';
import CustomerRegister from './pages/CustomerRegister';
import Home from './pages/Home';
import PassengerDetails from './pages/PassengerDetails';
import SearchResults from './pages/SearchResults';
import UserType from './pages/UserType';

function App() {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/adminHome' element={<AdminHome/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        <Route path='/bus' element={<Bus/>}/>
        <Route path='/' element={<UserType/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/customerLogin' element={<CustomerLogin/>}/>
        <Route path='/customerRegister' element={<CustomerRegister/>}/>
        <Route path='/passengerDetails' element={<PassengerDetails/>}/>
        <Route path='/bus/search' element={<SearchResults/>}/>    
    </Routes>
);
}

export default App;
