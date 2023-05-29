//-----------IMPORTACIONES--------------------------
import styled from './Login.module.css';
import React, { useState } from 'react'
import axios from "axios";
import {Navigate} from 'react-router-dom';


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);


  const login = async (e)=>{

    e.preventDefault();

    const payload = {
      username,
      password
    }
    
    const loginUser =  await axios.post('http://localhost:3001/login', payload)
   

    if(loginUser.data == 'InicioSesionCorrecto'){

      alert('Inicio de Sesion Correcto')
      setRedirect(true);

    } else {
      alert('Usuario incorrecto')
    }
    
  }

  if(redirect) {
    return (
      <Navigate to={'/'} />
    )
  }



  return (
    <form className={styled.loginContainer} onSubmit={login}>

        <input type="text"
               placeholder='User' 
               className={styled.input}
               value={username}
               onChange={evento => setUsername(evento.target.value)}/>

        <input type="password" 
                placeholder='Password' 
                className={styled.input}
                value={password}
                onChange={evento => setPassword(evento.target.value)}/>

        <button className={styled.button}> Iniciar Sesion </button>
        
    </form>
  )
}

export default Login;

