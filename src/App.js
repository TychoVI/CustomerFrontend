import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherForecast from './WeatherForecast';
import {Landing} from "./Landing";

function App() {
  return (
    <div className="App">
      {/* <WeatherForecast></WeatherForecast> */}
      <Router>
        <Route path='/table/:id' component={Landing} />
        <Route path='/test' component={WeatherForecast} />
      </Router> 
    </div>
  );
}

export default App;
