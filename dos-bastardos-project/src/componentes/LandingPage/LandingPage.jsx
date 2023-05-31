import React from 'react'
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className={styles.container}>

            <div className={styles.text}><p>DOS</p></div>

            <div className={styles.text}><p>BASTARDOS</p></div> 

          <div className={styles.buttonContainer}>
            <Link to="/inicio/noticias"> <button className={styles.button}> Entrar </button> </Link>
          </div>
      
        </div>
  )
}

export default LandingPage
