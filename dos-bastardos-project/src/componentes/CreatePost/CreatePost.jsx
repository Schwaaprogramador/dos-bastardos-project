import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import styled from './CreatePost.module.css';
import axios from "axios";
import {Navigate} from 'react-router-dom';


//-------------




function CreatePost() {

  const [titulo, setTitulo] = useState('');
  const [resumen, setResumen]= useState('');
  const [contenido, setContenido]=useState('');
  const [imagen, setImagen]=useState('');
  const [redirect, setRedirect] = useState(false);

  console.log(titulo)
  console.log(resumen)
  console.log(contenido)

 


        const createNewPost = async (ev) => {

          ev.preventDefault();
          const payload = new FormData();

          payload.set('titulo', titulo);
          payload.set('resumen', resumen);
          payload.set('contenido', contenido);
          payload.set('imagen', imagen[0]);

          //---{withCredentials:true}---- para mandar la cookie
          console.log(payload)

          const newPost = await axios.post('http://localhost:3001/createpost', payload, {withCredentials:true})

          console.log(newPost.data)

          if(newPost.data==='postCreado') setRedirect(true);
        }


        
        
        if(redirect) {

          return (
      
            <Navigate to={'/inicio/foro'} />
      
          )}
        


  return (
    <form className={styled.formContainer} onSubmit={createNewPost}>

      <input type="text" 
              placeholder='Titulo' 
              value={titulo} 
              onChange={ev => setTitulo(ev.target.value)} 
              className={styled.input}/>


      <input type="text" 
              placeholder='Resumen' 
              value={resumen} 
              onChange={ev => setResumen(ev.target.value)} 
              className={styled.input}/>



      <input  type="file" 
              className={styled.input} 
              onChange={ ev => setImagen (ev.target.files) } />




              <ReactQuill className={styled.contenido}
                  value={contenido}
                  onChange={newValue=> setContenido(newValue)}/> .

       

      <button className={styled.button}>Crear Nuevo Post</button>

    </form>
  )
}

export default CreatePost;
