import React from 'react';
import "./Css/Portfolio.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './Component/Navbar';
import HeaderMain from './Component/HeaderMain';
import MainTeaser from './Component/MainTeaser';
function App() {
  return (
    <>
   <Navbar />
   <HeaderMain />
   <MainTeaser />
    </>
  );
}

export default App;
