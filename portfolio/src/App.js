import React from 'react';
import "./Css/Portfolio.css";
import "bootstrap/dist/css/bootstrap.css";
// import Navbar from './Component/Navbar';
import HeaderMain from './Component/HeaderMain';
import MainTeaser from './Component/MainTeaser';
import NavNew from './Component/NavNew';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
   {/* <Navbar /> */}
   <NavNew />
   <HeaderMain />
   <MainTeaser />
    </>
  );
}

export default App;
