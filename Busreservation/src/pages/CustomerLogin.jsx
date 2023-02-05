import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header/Header";
const CustomerLogin = () => {
    const navigate = useNavigate();

    const adminButtonHandler = () =>{
        navigate( "/adminLogin" )
    }
    const custRegButtonHandler = () =>{
        navigate( "/customerRegister" )
    }

    return (
        <div>
            <Header/>
            <div>
                <form>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <button onClick={adminButtonHandler}>Admin?</button>
                <button onClick={custRegButtonHandler}>Register for New user</button>
            </div>
        </div>
    );
};

export default CustomerLogin;