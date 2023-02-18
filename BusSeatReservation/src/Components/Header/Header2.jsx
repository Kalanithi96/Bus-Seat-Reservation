import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";
import logo from '../../Assets/images/busLogo.jpg'
import "./Header2.css";


const Header2 = () => {
    const navigate = useNavigate();

    const logoButtonHandler = () =>{
        navigate( "/adminHome" )
    }
    
    const {user, dispatch} = useContext(AuthContext)

    const logout = ()=>{
        dispatch({type:"LOGOUT"})
        navigate('/adminLogin')
    }
    
    return (<div>
        
        <header className="header2">
            <span className="logo2">
                <img src={logo} alt="" onClick={logoButtonHandler}/>
            </span>
            <span className="icon2">
                <i className="ri-user-line"></i>
                <span>{user.username}</span>
                <button onClick={logout}>LOGOUT</button>
            </span>
        </header>
    </div> );
};

export default Header2;