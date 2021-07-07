import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from './logo.svg';

const Home = () => {   
    return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/Home.tsx</code> and save to reload.
            </p>
            <Link to='/blog'> 
              <Button> Show List Blog</Button>
            </Link>

          </header>
        </div>    
    ) 
}

export default Home; 