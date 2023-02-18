import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";

const AdminLogin = () => {
    const navigate = useNavigate();

    const customerButtonHandler = () =>{
        navigate( "/customerLogin" )
    }

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    async function submit(e){

        e.preventDefault()

        let x = await fetch('http://localhost:4000/api/v1/auth/adminLogin', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        if(x.status === 200){
            const res = await fetch(`http://localhost:4000/api/v1/buses`,{method:"GET"})
 
            if(!res.ok)
                alert("Something went wrong");

            const result = await res.json();

            navigate('/adminHome',{state:result.data})
        }
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
                <button onClick={customerButtonHandler}>Cutomer?</button>
            </div>
        </div>
    );
};

export default AdminLogin;