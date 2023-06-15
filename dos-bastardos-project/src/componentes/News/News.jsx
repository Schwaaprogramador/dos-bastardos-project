// Your API key is: dd91e01931ae4f4ea0389ec12b4e1864
import React, { useEffect, useState } from 'react'
import New from './New';
import axios from "axios";
import styled from './News.module.css';

function News() {

    const [noticias, setNoticias] = useState('');

    useEffect(()=>{

        const pegarleAlApi = async () => {
            try {

              const newsOne = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=dd91e01931ae4f4ea0389ec12b4e1864');
              setNoticias(newsOne.data.articles);
             
            } catch (error) {
      
              console.log(error)

            }
            
           }
           
      
           pegarleAlApi();   // es importante ejecutar la funcion.
    }, [])


    console.log(noticias)

  return (
    <div className={styled.container}>
        
        {  typeof noticias === 'string' 
         ? 
         <h2>cargando noticias</h2> 
         : 
         noticias.length > 0 
         ? 
         noticias.map( noticia => <New name={noticia.source.name} description={noticia.title} imagen={noticia.urlToImage}  />) 
          : <h2> cargar las noticias </h2>}   

    </div>
  )

}

export default News
