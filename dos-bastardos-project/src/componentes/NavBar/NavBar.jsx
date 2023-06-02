import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from './NavBar.module.css';
import axios from "axios";
import { userContext } from '../../userContext';


function NavBar() {

  

  const {userInfo, setUserInfo} = useContext(userContext)

  

  useEffect(()=>{

    const response = async () => {

      try {

        const info = await axios.get('http://localhost:3001/profile', {withCredentials:true});
        console.log(info)
        setUserInfo(info.data.username)
        console.log(info.data.username)
      } catch (error) {
        console.log(error)
      }
      
     }
     
     response();   

  },[])


  const logout = async () => {
    const logout2 = await axios.post('http://localhost:3001/logout', {withCredentials:true});
    alert(logout2.data)
    setUserInfo(null)
  }
  
    

  return (

    
    
      <nav className={styled.navbarContainer}>

        <div>
          <p className={styled.logo}>DOS BASTARDOS</p>
        </div>

        <div className={styled.links}>

              {/* -----------------------USUARIO LOGEADO---------------------- */}
              {userInfo && (
            <>
              <p>Hola  {userInfo}</p>
              <Link to='/nuevoregistro' className={styled.link}> Nuevo Registro </Link>
              <a onClick={logout}>logout</a>
            </>
            )}


              {/* -----------------------USUARIO SIN LOGEO ---------------------- */}
              {!userInfo && (

              <>
                <Link to="/inicio/iniciosesion" className={styled.link}> Iniciar Sesion </Link>
                <Link to="/inicio/registro" className={styled.link}> Registrarse </Link>
              </>
              )}


          <Link to="/inicio/noticias" className={styled.link}> Inicio </Link>
          <Link to="/inicio/foro" className={styled.link}> Foro </Link>
          

          <Link to="/" className={styled.link}> Salir </Link>

        </div>
        
      </nav>      
    
  )
}

export default NavBar
