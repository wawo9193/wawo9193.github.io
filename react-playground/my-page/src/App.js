import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Example1 from './components/firstcomponent';
import Navbar1 from './components/nav-comp';

function App() {
  return (
      <React.Fragment>
        <body class="App-header">
          <Navbar1/>
          <br/>
          <Example1 class="App-body"/>
        </body>
      </React.Fragment>
  );
}

export default App;


