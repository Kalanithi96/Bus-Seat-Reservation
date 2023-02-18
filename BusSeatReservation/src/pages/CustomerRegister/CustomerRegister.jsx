import React from "react";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";
import Header from "../../Components/Header/Header";
import {BASE_URL} from '../../Hooks/config';

const CustomerRegister = () => {
    const navigate = useNavigate();

    const adminButtonHandler = () =>{
        navigate( "/adminLogin" )
    }
    const customerButtonHandler = () =>{
        navigate( "/customerLogin" )
    }

    const [credentials, setCredentials] = useState({
        username: undefined,
        phone: undefined,
        password: undefined
    })

    const {dispatch} = useContext(AuthContext)

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value }));
    }

    const handleClick = async e=>{
        e.preventDefault();

        try{
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            })

            const result = await res.json();

            if(!res.ok) alert(result.message)
            else{
                dispatch({type:'REGISTER_SUCCESS'})
                navigate('/customerlogin');
            }
        } catch(err){
            alert(err.message);
        }

    }

    return (
        <div>
            <Header/>
            <div>
            <form>
                    <input type="text" onChange={handleChange} required placeholder="Username" id="username"></input>
                    <input type="number" onChange={handleChange} required placeholder="Phone Number" id="phone"></input>
                    <input type="password" onChange={handleChange} required placeholder="Password" id="password"></input>
                    <button type="submit" onClick={handleClick}>Submit</button>
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