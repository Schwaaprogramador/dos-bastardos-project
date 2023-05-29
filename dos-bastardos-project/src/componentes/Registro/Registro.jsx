import React, { useState } from 'react'
import styled from './Registro.module.css';
import axios from "axios";

function Registro() {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const registro = async (evento) => {
    evento.preventDefault();
    //-----string literales--- es lo mismo que tener username: username, password:password
    const payload = {
      username,
      password
    }
    
    const newRegistro = await axios.post('http://localhost:3001/registro', payload)

    alert(newRegistro.data)
  }


  
  return (
    <form className={styled.loginContainer} onSubmit={registro}>

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

        <button className={styled.button} > Registrarse </button>
        
    </form>
  )
}

export default Registro;
