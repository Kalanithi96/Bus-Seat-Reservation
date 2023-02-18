import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../../Components/Header/Header";
const CustomerLogin = () => {
    const navigate = useNavigate();

    const adminButtonHandler = () =>{
        navigate( "/adminLogin" )
    }
    const custRegButtonHandler = () =>{
        navigate( "/customerRegister" )
    }

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    async function submit(e){

        e.preventDefault()

        let x = await fetch('http://localhost:4000/api/v1/auth/customerLogin', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        })


        if(x.status === 200)
            navigate(`/customerHome`)
        else if(x.status === 404)
            alert("User not found");
        else if(x.status === 500)
            alert("Check credentials");
        else
            alert("Unmatching Username/Password");
    };

    return (
        <div>
            <Header/>
            <div>
                <form onSubmit={submit}>
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username"></input>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
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