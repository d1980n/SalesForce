import React, { useState } from 'react';
import "./login.css";
import { Link } from "react-router-dom";


function Logins() {
    // State untuk mengontrol kelas-kelas pada container
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    // Handler untuk mengaktifkan panel kanan
    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    // Handler untuk menonaktifkan panel kanan
    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
      <body className='login'>
        <div className={isRightPanelActive ? "container right-panel-active" : "container"} id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"> <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" >
      <path
        fill="currentColor"
        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
      />
    </svg></a>
                        <a href="#" className="social"><svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" >
      <path
        fill="currentColor"
        d="M6 12a6 6 0 0011.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 018.282 4.393l-3.278 2.295A6 6 0 006 12z"
      />
    </svg></a>
                        <a href="#" className="social"><svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 3a2 2 0 012 2v3h6a2 2 0 110 4h-6v2a3 3 0 003 3h3a2 2 0 110 4h-3a7 7 0 01-7-7V5a2 2 0 012-2z"
        clipRule="evenodd"
      />
    </svg></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Link to="/home" className='Sign'>Sign In</Link>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Log In</h1>
                    <div className="social-container">
                        <a href="#" className="social"> <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" >
      <path
        fill="currentColor"
        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
      />
    </svg></a>
                        <a href="#" className="social"><svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
      <path
        fill="currentColor"
        d="M6 12a6 6 0 0011.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 018.282 4.393l-3.278 2.295A6 6 0 006 12z"
      />
    </svg></a>
                        <a href="#" className="social"><svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 3a2 2 0 012 2v3h6a2 2 0 110 4h-6v2a3 3 0 003 3h3a2 2 0 110 4h-3a7 7 0 01-7-7V5a2 2 0 012-2z"
        clipRule="evenodd"
      />
    </svg></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <Link to="/home" className='Sign'>Log In</Link>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Hello!</h1>
                        <p>To complete the form, please provide your personal details</p>
                        <p className='ucup'>Have an account?</p>
                        <button onClick={handleSignInClick} className="ghost" id="signIn">Log In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <p className='ucup'>Don't have an account yet?</p>
                        <button onClick={handleSignUpClick} className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}

export default Logins;