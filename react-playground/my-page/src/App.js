import React from 'react';
import './App.css';
import Example1 from './components/firstcomponent';
import MyNavbar from './components/nav-comp';
import Profile from './components/profile-card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <body style={{backgroundColor: '#282c34'}}>
      <React.Fragment>
        <MyNavbar/>
        <br/>
        <Example1 id="main-body"/>
        <br/>
        <Profile id="main-body"/>
      </React.Fragment>
    </body>
  );
}

export default App;


