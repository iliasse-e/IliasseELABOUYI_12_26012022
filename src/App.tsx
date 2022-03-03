import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

/**
 * App root container called in index.tsx file
 * @returns 
 */
const App = (): JSX.Element => {

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
