import React from 'react';
import '../sass/layout/menu.scss'
import relaxation from '../assets/images/relaxation.svg';
import workout from '../assets/images/workout.svg';
import swimming from '../assets/images/swim.svg';
import biking from '../assets/images/biking.svg';

/**
 * 
 * @returns 
 */
function Menus() {
  /**
   * @type {}
   */
  const buttons: string[] = [relaxation, swimming, biking, workout]
  
  return (
    <aside className='menu'>
        <div className='menu__container'>
              {buttons.map((btn) => <img className='menu__container__btn btn' src={btn} key={btn} alt="bouton menu"/>)}
        </div>
        <p className='menu__copyright'>Copyright, SportSee 2020</p>
    </aside>
  );
}

export default Menus;
