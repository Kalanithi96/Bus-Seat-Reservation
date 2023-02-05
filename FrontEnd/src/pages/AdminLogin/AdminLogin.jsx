import React from "react";

import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";

const AdminLogin = () => {
    const navigate = useNavigate();

    const customerButtonHandler = () =>{
        navigate( "/customerLogin" )
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
                <button onClick={customerButtonHandler}>Cutomer?</button>
            </div>
        </div>
    );
};

export default AdminLogin;