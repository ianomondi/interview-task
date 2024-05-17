import React from 'react';
import "../Components/Login/Login.scss";
import logo from "../Assets/Images/login-logo.svg";
import LoginForm from '../Components/Login/LoginForm';


const Login = () => {
    return (
        <div className='login-area'>
            <div className="login-contents">
                <div className="login-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="form-con"> 
                    <LoginForm />
                </div>
            </div>

        </div>
    );
};

export default Login;