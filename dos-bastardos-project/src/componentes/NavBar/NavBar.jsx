import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from './NavBar.module.css';
import axios from "axios";
import { userContext } from '../../userContext';


function NavBar() {

  

  const {userInfo, setUserInfo} = useContext(userContext)

  

  useEffect(()=>{

    const response = async () => {

      try {

        const info = await axios.get('https://dos-bastardos-backend.up.railway.app/profile', {withCredentials:true});
        
        setUserInfo(info.data.username)
        
      } catch (error) {
        console.log(error)
      }
      
     }
     
     response();   // es importante ejecutar la funcion.

  },[setUserInfo])


  const logout = async () => {
    const logout2 = await axios.post('https://dos-bastardos-backend.up.railway.app/logout', {withCredentials:true});
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
              <Link to='/inicio/crearpost' className={styled.link}> Nuevo Registro </Link>
              <button onClick={logout} className={styled.link}>logout</button>
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
          

          

        </div>
        
      </nav>      
    
  )
}

export default NavBar
