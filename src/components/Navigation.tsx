import React from 'react';

const navLinks : string[] = ["Accueil", "Profil", "Réglage", "Communauté"]

function Navigation() {
  return (
      <nav className='header__nav'>
          <ul>
              {navLinks.map((link) => <li className='header__nav__link link' key={link}>{link}</li>)}
          </ul>
      </nav>
  );
}

export default Navigation;
