import React from 'react'
import NavBar from '../NavBar/NavBar';
import styled from './Foro.module.css';
import Post from '../Post/Post';


function Foro() {
  return (
    <>

    <NavBar/>

        <main className={styled.foroContainer}>
        
            Esto es el post <Post/>
            <Post/>
            <Post/>
        
        </main>
    
    </>
    
  )
}

export default Foro;
