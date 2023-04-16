import React, { useState } from 'react'
import css from './signUp.css';
import sign from './../img/signUp.png';
import logof from './../img/formlogo.png';
// import { Button } from '@mui/material'
// import { Input } from '@mui/material';

 const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(e){
        setEmail(e.target.value);
    }

    function handleChangePassword(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('https://127.0.0.1:8000/api/registration',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password   
            })
        })
        .then(async(res) => {
            console.log(await res.json());
        })
    }

    return(
        <div className='main'>
            <div className='signIn'>
                <form onSubmit={handleSubmit}>
                    <div className='forgot_password' >
                        <h1 className="title" >Забыли Пароль</h1>
                        <div className="input_label">Email</div>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="keep your email address"
                            value={email}
                            onChange={handleChangeEmail}
                            />
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="keep your email address"
                            value={password}
                            onChange={handleChangePassword}
                            />
                        <p className="plz">Пожалуйста, сообщите нам свой адрес электронной почты, и мы вышлем вам ссылку,по которой вы сможете сбросить пароль.</p>
                        <button className='send' >SEND</button>
                        <div className='buttons'>
                            <button>LOGIN</button>
                            <button>Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
 }
export default SignUp;

               
                

        