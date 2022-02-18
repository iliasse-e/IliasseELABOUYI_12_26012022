import React from 'react';
import '../sass/layout/menu.scss'

/**
 * Displays the container and content of the menu
 * @param props Needs to import an array of images to set up
 * the buttons
 * @returns menu buttons on left side of dashboard
 */
function Menus(props: { buttons: String[]; }) {
  
  return (
    <aside className='menu'>
        <div className='menu__container'>
              {props.buttons.map((btn) => <img className='menu__container__btn btn' src={btn} key={btn} alt="bouton menu"/>)}
        </div>
        <p className='menu__copyright'>Copyright, SportSee 2020</p>
    </aside>
  );
}

export default Menus;
