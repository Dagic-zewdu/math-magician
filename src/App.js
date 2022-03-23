import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import CalcContainer from './components/calculator/calc.container';
import Home from './components/home/home';
import Navbar from './components/layout/navbar';
import Quote from './components/quote/quote';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Router>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<CalcContainer />} />
      <Route path="/quote" element={<Quote />} />
    </Router>
  </BrowserRouter>
);

export default App;
