import React, { useEffect, useState } from 'react'
import styled from './Foro.module.css';
import Post from '../Post/Post';
import axios from "axios";


function Foro() {

  const [post, setPost] = useState([])
  console.log(post)

  useEffect(()=>{

    const allPost = async () => {

      try {

        const posts = await axios.get('https://dos-bastardos-backend.up.railway.app/post');

        setPost(posts.data);
       
      } catch (error) {

        console.log(error)
      }
      
     }
     

     allPost();   // es importante ejecutar la funcion.

  },[])

  return (
    <>

        <main className={styled.foroContainer}>
        
            
            {post.length > 0 && post.map( post => <Post {...post}    key={post._id}/>)}
            
        
        </main>
    
    </>
    
  )
}

export default Foro;
