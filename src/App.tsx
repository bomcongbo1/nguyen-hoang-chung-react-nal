import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Link, NavLink,
} from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/Blog';
import Details from './pages/detail';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Blog}/>
        <Route path="/detail/:id" children={<Details/>} />
      </div>
    </Router>
  );
}

export default App;
