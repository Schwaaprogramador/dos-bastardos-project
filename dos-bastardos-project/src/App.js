
import styled from './App.module.css';
import { Route, Routes } from "react-router-dom";
//----------COMPOENENTES-------------------
import Home from "./componentes/Home/Home";
import Foro from "./componentes/Foro/Foro";
import LandingPage from "./componentes/LandingPage/LandingPage";

function App() {
  return (

    <div className={styled.app}>
      <Routes>

        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/foro" element={<Foro/>}/>
        <Route exact path="/inicio" element={<Home/>}/>

      </Routes>
      
      
    </div>
  );
}

export default App;
