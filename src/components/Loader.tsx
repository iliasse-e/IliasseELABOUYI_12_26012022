import React from 'react';
import logo from '../assets/images/logo.svg'
import '../sass/layout/loader.scss'

/**
 * Displays the loader used while loading data
 * The content parameters are available on the loader.scss file
 * @returns {JSX.Element} Html, css content to display
 */
const Loader = (): JSX.Element => {
  return (
    <div className='loader'>
        <img className='loader__logo' src={logo} alt="loader" />
    </div>
  );
}

export default Loader;