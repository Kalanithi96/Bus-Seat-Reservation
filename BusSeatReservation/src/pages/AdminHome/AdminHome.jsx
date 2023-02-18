import React from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../../Components/Header/Header2";
import AdminBusTable from "./adminBusTable";
import Footer from "../../Components/Footer/Footer";
import "./AdminHome.css"

const AdminHome = () => {
    const navigate = useNavigate();

    const addBusButtonHandler = () =>{
        navigate( "/addBus" )
    }
    
    const updateBusButtonHandler = () =>{
        navigate( "/updateBus" )
    }

    const viewBusButtonHandler = () =>{
        navigate( "/adminBus" )
    }

    return (
        <div>
            <Header2/>
            <div>
                <button onClick={addBusButtonHandler}>Add a Bus</button>
            </div>
            <AdminBusTable/>
            <Footer/>
        </div>
    );
};

export default AdminHome;