import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { BASE_URL } from "../../Hooks/config";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import logo from '../../Assets/images/busLogo.jpg'
import "./Header1.css";

const Header1 = () => {

    const navigate = useNavigate();

    const logoButtonHandler = () =>{
        navigate( "/CustomerHome" )
    }

    const {user, dispatch} = useContext(AuthContext)
    const {data: userData, uloading, uerror} = useFetch(`${BASE_URL}/users/${user.username}`)
    
    const userButtonHandler = () =>{
        navigate( `/bookings/${userData['_id']}` )
    }

    const logout = ()=>{
        dispatch({type:"LOGOUT"})
        navigate('/customerLogin')
    }

    return (<div>
        
        <header className="header1">
            <span className="logo1">
                <img src={logo} alt="" onClick={logoButtonHandler}/>
            </span>
            <span className="icon1">
                <i className="ri-user-line"  onClick={userButtonHandler}></i>
                <span>{user.username}</span>
                <button onClick={logout}>LOGOUT</button>
            </span>
        </header>
    </div> );
};

export default Header1;