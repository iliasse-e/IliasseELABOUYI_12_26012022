import React from 'react';
import logo from '../assets/images/logo.svg';
import Navigation from './Navigation';
import '../sass/layout/header.scss';
import { navLinks } from '../data/links';

/**
 * Displays the header
 * @returns Html content to display
 */
const Header = (): JSX.Element => {
  return (
    <header className='header'>
        <img className='header__logo' src={logo} alt="logo" />
        <Navigation navigationLinks={navLinks} />
    </header>
  );
}

export default Header;