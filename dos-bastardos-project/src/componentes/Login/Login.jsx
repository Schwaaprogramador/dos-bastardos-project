import React from 'react';
import styled from './Login.module.css';

function Login() {
  return (
    <form className={styled.loginContainer}>

        <input type="text" placeholder='User' className={styled.input}/>
        <input type="text" placeholder='Password' className={styled.input}/>
        <button className={styled.button}> Iniciar Sesion </button>
        
    </form>
  )
}

export default Login;

