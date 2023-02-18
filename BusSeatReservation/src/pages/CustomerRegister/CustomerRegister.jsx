import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../Components/Header/Header";
const CustomerRegister = () => {
    const navigate = useNavigate();

    const adminButtonHandler = () =>{
        navigate( "/adminLogin" )
    }
    const customerButtonHandler = () =>{
        navigate( "/customerLogin" )
    }

    const [username,setUsername] = useState('')
    const [phone,setPhone] = useState(0)
    const [password,setPassword] = useState('')

    async function submit(e){

        e.preventDefault()

        let x = await fetch('http://localhost:4000/api/v1/auth/register', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                phone
            })
        })

        if(x.status === 200)
            navigate(`/customerLogin`)
        else if(x.status === 404)
            alert("Addition failed");
    };


    return (
        <div>
            <Header/>
            <div>
            <form onSubmit={submit}>
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username"></input>
                    <input type="number" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone Number"></input>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
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