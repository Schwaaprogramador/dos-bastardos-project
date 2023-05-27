import React from 'react'
import styled from './Foro.module.css';
import Post from '../Post/Post';


function Foro() {
  return (
    <>

    

        <main className={styled.foroContainer}>
        
            Esto es el post 
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            
        
        </main>
    
    </>
    
  )
}

export default Foro;
