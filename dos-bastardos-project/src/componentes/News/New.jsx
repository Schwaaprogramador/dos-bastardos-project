import React from 'react'
import styled from './New.module.css';
function New(name, description, image) {
  return (
    <div>

        <img className={styled.img} src={image} alt="imagen noticias" />
        <div>
            <p>{name}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>
      
    </div>
  )
}

export default New;
