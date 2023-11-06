import Login from "./pages/login";
import Home from "./pages/home";
import Cadastro from "./pages/cadastro";


import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/" element={<Home/>}/> 
        <Route path="/cadastro" element={<Cadastro/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
  
}

export default App
