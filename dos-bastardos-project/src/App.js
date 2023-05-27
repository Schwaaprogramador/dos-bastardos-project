
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


function App() {
  return (

    <div className={styled.app}>
      
      <Routes>

        <Route exact path="/" element={<LandingPage/>}/>

        <Route exact path="/inicio" element={<Layout/>}>

          <Route  exact path="/inicio/iniciosesion" element={<Login/>}/>
          <Route  exact path="/inicio/registro" element={<Registro/>}/>
          <Route  exact path="/inicio/foro" element={<Foro/>}/>
          <Route  exact path="/inicio/noticias" element={<Home/>}/>

        </Route>
        
        

      </Routes>
      
      
    </div>
  );
}

export default App;
