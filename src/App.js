import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SingUp';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/services' exact Component={Services}></Route>
        <Route path='/products' exact Component={Products}></Route>
        <Route path='/sign-up' exact Component={SignUp}></Route>
      </Routes>
        
    </Router>
    </>
  );
}

export default App;
