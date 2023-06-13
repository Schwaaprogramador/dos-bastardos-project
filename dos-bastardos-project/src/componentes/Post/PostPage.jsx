import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import styled from './Post.module.css';
import { userContext } from '../../userContext';


function PostPage() {

    const [post, setPost] = useState('')
    const {userInfo} = useContext(userContext)
    const {id} = useParams()
    console.log(userInfo)

    useEffect(()=>{
        

        const postSingle = async () => {

          try {
    
            const posts = await axios.get(`https://dos-bastardos-backend.up.railway.app/post/${id}`);
    
            setPost(posts.data);
            console.log(posts.data)
            
           
          } catch (error) {
    
            console.log(error)
          }
          
         }
         
    
         postSingle();
    }, [id])



  return (
    <div>
        <div>
          <img className={styled.img} src={'http://localhost:3001/'+post.imagen} alt="imagen del wow" />
        </div>

        <h1>{ post.titulo }</h1>

       

        <h3>{post.resumen}</h3>

        <div dangerouslySetInnerHTML={{__html: post.contenido}}/>
      
    </div>
  )
}

export default PostPage
