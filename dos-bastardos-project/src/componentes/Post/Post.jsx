import React from 'react';
import styled from './Post.module.css';

function Post() {
  return (
    <div className={styled.postContainer}>

        <div className={styled.image}>
            <img className={styled.img}src="https://c4.wallpaperflare.com/wallpaper/176/83/767/cinema-golden-logo-game-wallpaper-preview.jpg" alt="imagen del wow" />
        </div>

        <div>

            <h2>
                ALGUN TITULO BONITO
            </h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eos officiis repellat quae rerum nisi, nihil illum quidem, 
                dolorem ea dolore itaque vero sunt possimus deserunt impedit 
                eius ab voluptatum id.
                </p>
        </div>
      
    </div>
  )
}

export default Post;
