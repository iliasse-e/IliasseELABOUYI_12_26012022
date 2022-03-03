import React from 'react';

/**
 * Builds the navigation
 * Component called in Header
 * @param array of navigation links
 * @returns navigation
 */
function Navigation(props: { navigationLinks: String[]; }) {

    return (
        <nav className='header__nav'>
            <ul>
                {props.navigationLinks.map((link) => <li className='header__nav__link link' key={link.toString()}>{link}</li>)}
            </ul>
        </nav>
    )
}

export default Navigation;
