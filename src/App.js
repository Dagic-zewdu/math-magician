import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalcContainer from './components/calculator/calc.container';
import Home from './components/home/home';
import Navbar from './components/layout/navbar';
import Quote from './components/quote/quote';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<CalcContainer />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>
);

export default App;
