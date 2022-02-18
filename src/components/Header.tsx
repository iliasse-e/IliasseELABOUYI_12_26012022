import React from 'react';
import logo from '../assets/images/logo.svg'
import Navigation from './Navigation';
import '../sass/layout/header.scss'
import { navLinks } from '../data/links';


function Header() {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="logo" />
        <Navigation navLinks={navLinks} />
    </header>
  );
}

export default Header;