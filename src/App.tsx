import React from 'react';
import Home from './pages/Home/home';
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;