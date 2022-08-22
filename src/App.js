import './App.css';
import Apis from './pages/Apis';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Apis />} />
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
