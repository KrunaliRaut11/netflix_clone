import React, {useState, useEffect} from 'react';
import "./navbar.css";
import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/avatar.png"
import { useHistory } from 'react-router';

function Navbar() {

    const [show, handleShow]= useState(false);
    const history = useHistory();



    const transitionNavBar= () =>{
        if (window.screenY > 100) {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => {
            window.addEventListener("scroll", transitionNavBar)
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img onClick={() => history.push("/")} src={Logo} alt="Logo" className="nav_logo"/>
                <img onClick={() => history.push("/profile")} src={Avatar} alt="Avatar" className="nav_avatar"/>
            </div>
        </div>
    )
}

export default Navbar
