import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import PieChart from './PieChart/PieChart';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';


function App() {
  const uniqueChartId = "myUniquePieChart";

  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
      <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/"      element={<HomePage/>}/>
      </Routes>
      </div>
      <PieChart id={uniqueChartId} />
      <Footer/>
    </Router>
  );
}

export default App;
