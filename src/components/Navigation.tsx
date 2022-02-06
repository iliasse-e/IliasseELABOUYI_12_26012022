import React from 'react';

/**
 * Manages to display the navigation
 * @returns { HTMLElement } navigation
 */
function Navigation() {
    /**
     * Gathers all navigation links available
     * @type {Array[string]}
     * @example ["Home", "Gallery", "Contact"]
     */
    const navLinks : string[] = ["Accueil", "Profil", "Réglage", "Communauté"]

    return (
        <nav className='header__nav'>
            <ul>
                {navLinks.map((link) => <li className='header__nav__link link' key={link}>{link}</li>)}
            </ul>
        </nav>
    );
}

export default Navigation;
