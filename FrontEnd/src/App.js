import { Route, Routes } from 'react-router-dom';
import './App.css';

import AdminHome from './pages/AdminHome/AdminHome';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import Bookings from './pages/Bookings/Bookings';
import Bus from './pages/bus/Bus';
import CustomerLogin from './pages/CustomerLogin/CustomerLogin';
import CustomerRegister from './pages/CustomerRegister/CustomerRegister';
import CustomerHome from './pages/CustomerHome/CustomerHome';
import TicketPreview from './pages/TicketPreview/TicketPreview';
import SearchResults from './pages/SearchResults/SearchResults';
import UserType from './pages/UserType/UserType';
import Ticket from './pages/ticket/ticket';

function App() {
  return (
    <Routes>
        <Route path='/customerHome' element={<CustomerHome/>}/>
        <Route path='/adminHome' element={<AdminHome/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        <Route path='/bus' element={<Bus/>}/>
        <Route path='/' element={<UserType/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/customerLogin' element={<CustomerLogin/>}/>
        <Route path='/customerRegister' element={<CustomerRegister/>}/>
        <Route path='/ticketPreview' element={<TicketPreview/>}/>
        <Route path='/bus/search' element={<SearchResults/>}/> 
        <Route path='/bookings/ticket' element={<Ticket/>}/>    
    </Routes>
);
}

export default App;
