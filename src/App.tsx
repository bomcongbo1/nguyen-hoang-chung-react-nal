import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Link, NavLink,
} from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div>        
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
