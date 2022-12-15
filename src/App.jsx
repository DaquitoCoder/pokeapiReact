import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import './App.css';
import Home from './views/Home.jsx';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import PokemonDetailed from './views/PokemonDetailed';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container-fluid mb-3'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon/:name' element={<PokemonDetailed />} />
            {/* <Route path='*' element={<NoMatch />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
