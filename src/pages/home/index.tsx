import React from 'react';
import Header from '../../components/Header';
import logo from './logo.svg';

const Home = () => {   
    return(
        <div className="App">
        <Header disSearch={true}/>
          {/* <header className="App-header"> */}
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Nguyễn Hoàng Chung
            </p>
          {/* </header> */}
        </div>    
    ) 
}

export default Home; 