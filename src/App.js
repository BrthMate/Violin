import './App.css';

import React from 'react';
import { BrowserRouter,Routes,Route, } from "react-router-dom";

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Violininst from './pages/home/violinist/Violininst';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/1" element={<><Navbar /><Violininst /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
