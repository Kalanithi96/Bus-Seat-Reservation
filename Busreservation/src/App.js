import { Route, Routes } from "react-router-dom";
import "./App.css";

import AdminHome from "./Pages/AdminHome";
import AdminLogin from "./Pages/AdminLogin/AdminLogin.component";
import Bookings from "./Pages/Bookings";
import Bus from "./Pages/Bus";
import CustomerLogin from "./Pages/CustomerLogin/CustomerLogin.component";
import CustomerRegister from "./Pages/CustomerRegister/CustomerRegister.component";
import Home from "./Pages/Home";
import PassengerDetails from "./Pages/PassengerDetails";
import SearchResults from "./Pages/SearchResults";
import UserType from "./Pages/userTypes/userTypes.component";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/adminHome" element={<AdminHome />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/bus" element={<Bus />} />
      <Route path="/" element={<UserType />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/customerLogin" element={<CustomerLogin />} />
      <Route path="/customerRegister" element={<CustomerRegister />} />
      <Route path="/passengerDetails" element={<PassengerDetails />} />
      <Route path="/bus/search" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
