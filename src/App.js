import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intros/Intro'
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Intro/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
