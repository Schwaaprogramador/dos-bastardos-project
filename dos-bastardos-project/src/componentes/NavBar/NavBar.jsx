import React from 'react';
import { Link } from 'react-router-dom';
import styled from './NavBar.module.css';

function NavBar() {
  return (
    
      <nav className={styled.navbarContainer}>

        <div>
          <p>DOS BASTARDOS</p>
        </div>

        <div className={styled.links}>

          <Link to="/foro" className={styled.link}> Foro </Link>
          <Link to="/" className={styled.link}> Salir </Link>
          <Link to="/inicio" className={styled.link}> Inicio </Link>

        </div>
        
      </nav>      
    
  )
}

export default NavBar
