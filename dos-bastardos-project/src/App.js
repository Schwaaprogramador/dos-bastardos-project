
import styled from './App.module.css';
import { Route, Routes } from "react-router-dom";
//----------COMPOENENTES-------------------
import Home from "./componentes/Home/Home";
import Foro from "./componentes/Foro/Foro";
import LandingPage from "./componentes/LandingPage/LandingPage";
import Login from './componentes/Login/Login';
import Registro from './componentes/Registro/Registro';
//import NavBar from './componentes/NavBar/NavBar';
import Layout from './componentes/Layout/Layout';
import { UserContextProvider } from './userContext';
import CreatePost from './componentes/CreatePost/CreatePost';
import PostPage from './componentes/Post/PostPage';


function App() {
  return (

    <div className={styled.app}>
      
      <UserContextProvider>

          <Routes>

                      <Route exact path="/" element={<LandingPage/>}/>

                      <Route exact path="/inicio" element={<Layout/>}>

                        <Route  exact path="/inicio/iniciosesion" element={<Login/>}/>
                        <Route  exact path="/inicio/registro" element={<Registro/>}/>
                        <Route  exact path="/inicio/foro" element={<Foro/>}/>
                        <Route  exact path="/inicio/noticias" element={<Home/>}/>
                        <Route  exact path="/inicio/crearpost" element={<CreatePost/>}/>
                        <Route  exact path="/inicio/post/:id" element={<PostPage/>}/>

                      </Route>
        
          </Routes>

      </UserContextProvider>
     
        
        

      
      
      
    </div>
  );
}

export default App;
