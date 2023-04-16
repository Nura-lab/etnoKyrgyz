import React from 'react'
import css from './login.css';
// import { Button } from '@mui/material'
// import { Input } from '@mui/material';
import logof from './../img/formlogo.png';

 const Login =() =>{
    return(
        <div className="login">
        <div className="logo-holder">
            <form>
                {/* <div className="main"> */}
                    <img  className="logo" src={logof} alt="logo" />
                    <div>Email</div>
                    <input type="text" className="input" placeholder=" keep your email adress"/>
                    <div>password</div>
                    <input type="password"  className="input" placeholder="password"/>
                    <div className='label'>
                        <label htmlFor='check'>Remember for 30 days </label>
                        <label>Forgot password</label>
                    </div>
                    <button  style={{height:"32px", display:"flex", alignItems: "center", textAlign:"center", width:"370px"}}className="input" >Sign In</button>
                    <button className="input" >G Sign in with Google</button>
                    <label htmlFor='check'>Remember for 30 days </label>
                    <label>Don’t have on account?<p>Sign up for free</p></label>
                {/* </div> */}
            </form>
        </div>
        </div>
    )
 }
export default Login;
