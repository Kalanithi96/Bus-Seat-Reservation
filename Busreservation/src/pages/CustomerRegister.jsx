import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header/Header";
const CustomerRegister = () => {
    const navigate = useNavigate();

    const adminButtonHandler = () =>{
        navigate( "/adminLogin" )
    }
    const customerButtonHandler = () =>{
        navigate( "/customerLogin" )
    }

    return (
        <div>
            <Header/>
            <div>
                <form>
                    <input type="text" placeholder="Username"></input>
                    <input type="number" placeholder="Phone Number"></input>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <button onClick={adminButtonHandler}>Admin?</button>
                <button onClick={customerButtonHandler}>Existing user?</button>
            </div>
        </div>
    );
};

export default CustomerRegister;