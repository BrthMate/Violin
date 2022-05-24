import './App.css';

import React from 'react';
import { BrowserRouter,Routes,Route, } from "react-router-dom";

import NavbarTeacher from './components/navbar/NavbarTeacher';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Violininst from './pages/violinist/Violininst';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/:id" element={<><NavbarTeacher /><Violininst /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
