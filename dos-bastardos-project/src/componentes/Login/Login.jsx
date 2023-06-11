//-----------IMPORTACIONES--------------------------
import styled from './Login.module.css';
import React, { useState, useContext } from 'react'
import axios from "axios";
import {Navigate} from 'react-router-dom';
import { userContext } from '../../../src/userContext';


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(userContext)

  const login = async (e)=>{

    e.preventDefault();

    const payload = {
      username,
      password
    }
    
    const loginUser =  await axios.post('https://dos-bastardos-backend.up.railway.app/login', payload, {withCredentials:true})
   

    if(loginUser.data.username.length  > 0){

      alert('Inicio de Sesion Correcto')
      setUserInfo( loginUser.data.username )
      setRedirect(true);
      console.log(loginUser.data);
      

    } else {
      
      alert('Usuario incorrecto')
    }
    
  }

  if(redirect) {

    return (

      <Navigate to={'/inicio/noticias'} />

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

