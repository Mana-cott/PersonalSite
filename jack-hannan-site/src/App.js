import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Main from './components/Main/Main.js';

function App() {
  const [curr, setCurr] = useState('contact');
  return (
    <div id="root">
      <Header />
      <Navbar setCurr={setCurr}/>
      <Main curr={curr}/>
    </div>
  );
}

export default App;
