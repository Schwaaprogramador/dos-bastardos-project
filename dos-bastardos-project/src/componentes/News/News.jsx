// Your API key is: dd91e01931ae4f4ea0389ec12b4e1864
import React, { useEffect, useState } from 'react'
import New from './New';
import axios from "axios";

function News() {

    const [noticias, setNoticias] = useState('');

    useEffect(()=>{

        const pegarleAlApi = async () => {
            try {

              const newsOne = await axios.get('https://newsapi.org/v2/top-headlines?country=co&apiKey=dd91e01931ae4f4ea0389ec12b4e1864');
              setNoticias(newsOne.data);
             
            } catch (error) {
      
              console.log(error)

            }
            
           }
           
      
           pegarleAlApi();   // es importante ejecutar la funcion.
    }, [])

  return (
    <div>
        
      {noticias.length>0 && noticias.map( noticia => <New   name={noticia.source.name} 
                                                            description={noticia.title} 
                                                            image={noticia.urlToImage}
                                                        />)}

    </div>
  )

}

export default News
