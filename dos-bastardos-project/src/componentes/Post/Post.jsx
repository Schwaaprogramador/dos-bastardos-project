import React from 'react';
import styled from './Post.module.css';
import { Link } from 'react-router-dom';

function Post({_id, titulo, resumen, contenido, imagen, createdAt , author }) {
  
  return (
    <div className={styled.postContainer}>

        <div className={styled.image}>

          <Link to = {`/inicio/post/${_id}`}>

            <img className={styled.img} src={'http://localhost:3001/'+imagen} alt="imagen del wow" />

          </Link>

        </div>

        <div>

            <h2>
                {titulo}
            </h2>
            <p>Autor: {author.username}</p>
            <p>{resumen}</p>
            <p>{createdAt}</p>
            <div>
            {contenido}
            </div>
            
        </div>
      
    </div>
  )
}

export default Post;
