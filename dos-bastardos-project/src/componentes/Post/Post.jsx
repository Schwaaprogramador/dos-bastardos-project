import React from 'react';
import styled from './Post.module.css';

function Post({titulo, resumen, contenido, imagen, createdAt }) {
  return (
    <div className={styled.postContainer}>

        <div className={styled.image}>
            <img className={styled.img} src={'http://localhost:3001/'+imagen} alt="imagen del wow" />
        </div>

        <div>

            <h2>
                {titulo}
            </h2>

            <p>{resumen}</p>
            <p>{createdAt}</p>
            <p>{contenido}</p>
        </div>
      
    </div>
  )
}

export default Post;
