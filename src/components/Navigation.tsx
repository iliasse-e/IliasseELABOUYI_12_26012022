import React from 'react';
import { navLinks } from '../data/links';

/**
 * Manages to display the navigation
 * @param { String[] } array of navigation links (strings) 
 * @returns { HTMLElement } navigation
 */
function Navigation(props: { navLinks: String[]; }) {

    return (
        <nav className='header__nav'>
            <ul>
                {props.navLinks.map((link) => <li className='header__nav__link link' key={link.toString()}>{link}</li>)}
            </ul>
        </nav>
    );
}

export default Navigation;
