import React, { useState } from 'react';
import "./login.css";
import Logo from "../../../assets/images/logo.png";
import SignUpScreen from '../SignUpScreen/SignUpScreen';


function LoginScreen() {
    const [signIn, setSignIn] = useState()
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
            <img src={Logo} alt="login Screen" className="loginScreen_logo" />
            <button onClick={() => setSignIn(true)}
             className="loginScreen_button">
                Sign In
            </button>
            <div className="loginScreen_gradient"></div>
            <div className="loginScreen_body">
                {signIn ? (
                    <SignUpScreen />
                ):(
                <>
                <h1>Unlimited films, TV Programmes amd more.</h1>
                <h2>Watch anywere. Cancel at any time.</h2>
                <h3>Ready to Watch? Enter your email to create or restart your membership</h3>

                <div className="loginScreen_input">
                    <form >
                        <input type="email" placeholder="Please Enter Your Email" />
                        <button onClick={() =>setSignIn(true)} className="loginScreen_getStart">GET STARTED</button>
                    </form>
                </div>
                </>
                )}
            </div>

            </div>
        </div>
    )
}

export default LoginScreen
