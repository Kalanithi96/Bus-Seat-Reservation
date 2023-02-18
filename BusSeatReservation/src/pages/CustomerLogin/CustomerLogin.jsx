import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import { BASE_URL } from "../../Hooks/config.js";

import Header from "../../Components/Header/Header";
const CustomerLogin = () => {
    const navigate = useNavigate();

    const adminButtonHandler = () =>{
        navigate( "/adminLogin" )
    }
    const custRegButtonHandler = () =>{
        navigate( "/customerRegister" )
    }

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const {dispatch} = useContext(AuthContext)

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value }));
    }

    const handleClick = async e=>{
        e.preventDefault();

        dispatch({type:'LOGIN_START'})

        try{
            const res = await fetch(`${BASE_URL}/auth/customerLogin`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:'include',
                body: JSON.stringify(credentials)
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                dispatch({type:'LOGIN_SUCCESS', payload:result.data})
                navigate('/customerHome');
            }
        } catch(err){
            dispatch({type:'LOGIN_FAILURE', payload:err.message})
            alert(err.message);
        }
    }

    return (
        <div>
            <Header/>
            <div>
                <form>
                    <input type="text" onChange={handleChange} required placeholder="Username" id="username"></input>
                    <input type="password" onChange={handleChange} required placeholder="Password" id="password"></input>
                    <button type="submit" onClick={handleClick}>Submit</button>
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