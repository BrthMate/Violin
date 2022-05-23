import './App.css';

import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Violininst from './pages/home/violinist/Violininst';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
    </BrowserRouter>
  );
}

export default App;
