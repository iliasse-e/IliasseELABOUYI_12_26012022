import React from 'react';
import logo from '../assets/images/logo.svg'
import '../sass/layout/loader.scss'

function Loader() {
  return (
    <div className='loader'>
        <img className='loader__logo' src={logo} alt="loader" />
    </div>
  );
}

export default Loader;