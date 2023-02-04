import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "./../Components/Header/Header";

const UserType = () => {
    const navigate = useNavigate();

    const customerButtonHandler = () =>{
        navigate( "/customerLogin" )
    }
    const adminButtonHandler = () =>{
        navigate( "/adminLogin" )
    }
    return <div>
        <Header/>
            <div className="Button_box">
                <button onClick={customerButtonHandler}> 
                    Customer Login 
                </button>
                <button onClick={adminButtonHandler}> 
                    Admin Login 
                </button>
            </div>
    </div>;
};

export default UserType;