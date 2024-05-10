import React from 'react';
import Home from './pages/Home/home';
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCate';
import ListaCategoria from './components/categoria/listaCategoria/ListaCate';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCate';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/cadastroTema" element={<FormularioCategoria />} />
            <Route path="/editarTema/:id" element={<FormularioCategoria/>} /> 
            <Route path="/deletarTema/:id" element={<DeletarCategoria/>} />  
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;