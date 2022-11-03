/*
*
* app.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './view/common/header';
import HomePage from './view/home';
import Footer from './view/common/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;