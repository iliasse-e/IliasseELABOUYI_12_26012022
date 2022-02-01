import React from 'react';
import logo from '../assets/images/logo.svg'
import Navigation from './Navigation';
import '../sass/layout/header.scss'


function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="logo" />
        <Navigation />
    </header>
  );
}

export default Header;
