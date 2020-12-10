import React, { useState } from 'react';
import './App.css';
import Home from './UI/Home'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
function App() {
  const [isLoaded, Loaded] = useState(false);
  const [record, UpdateRect] = useState({});
  return (
    <div className="App" >
      <Home  prevData={{parentState : {isLoaded,Loaded,dataState : {record, UpdateRect}}}}/>
    </div>
  );
}

export default App;
