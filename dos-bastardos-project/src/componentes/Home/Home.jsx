import React from 'react'
import styled from './Home.module.css';
import Carrucel from '../Carrucel/Carrucel';
import { Link } from 'react-scroll';
//import NavBar from '../NavBar/NavBar';

function Home() {
  return (
    <div className={styled.homeContainer}>

      <header className={styled.header}>


        <Link to="section1Container" className={styled.link}  smooth={true} duration={500}>
          <div className={styled.text}><p>Publica con nosotros</p></div>
        </Link>


        <Link to="section2Container" className={styled.link}  smooth={true} duration={500}>
          <div className={styled.text}><p>Recomendaciones</p></div>
        </Link>


        <Link to="section3Container" className={styled.link}  smooth={true} duration={500}>
          <div className={styled.text}><p>Noticias</p></div>
        </Link>


        <Link to="section4Container" className={styled.link}  smooth={true} duration={500}>
          <div className={styled.text}><p>Sobre Nosotros</p></div>
        </Link>


      </header>

      <section name="section1Container" className={styled.section1Container}> 

        <div className={styled.text}><p>Publica con nosotros</p></div>
        
      </section>

      <section name="section2Container"className={styled.section2Container}><div className={styled.text}><p>Cultura</p></div> </section>
      <section name="section3Container"className={styled.section1Container}><div className={styled.text}><p>Noticias</p></div></section>
      <section name="section4Container"className={styled.section2Container}> <div className={styled.text}><p>Sobre Nosotros</p></div></section>
        
    </div>
  )
}

export default Home;
