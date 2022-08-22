import './App.css';
import Apis from './pages/Apis';
/* import Api from './pages/Api'; */
import React from 'react';
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */

function App() {
  return (
    <div className="App">
      <Apis />
      {/* <Api /> */}
{/*       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Api />} />
            </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
