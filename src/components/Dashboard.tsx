/**
 * @file Manages the whole dashboard components
 */
import React from 'react';
import logo from '../assets/images/logo.svg'
import Navigation from './Navigation';
import '../sass/layout/dashboard.scss';
import fire from '../assets/images/fire.svg';
import food from '../assets/images/food.svg';
import fruit from '../assets/images/fruit.svg';
import cheeseburger from '../assets/images/cheeseburger.svg';
import Chart from './Charts/BarChart';
import WaveChart from './Charts/WaveChart';
import SpiderChart from './Charts/SpiderChart';
import CircleChart from './Charts/CircleChart';


const indicators = [
  {
    image: fire,
    color: "rgb(255, 1, 1, 0.1)",
    title: "calories",
    quantity : "1920Kcal"
  },
  {
    image: food,
    color: "rgba(117, 190, 218, 0.1)",
    title: "Proteines",
    quantity: "150g"
  }, 
  {
    image :fruit,
    color: "rgb(253, 204, 12, 0.1)",
    title: "Glucides",
    quantity: "290g"
 },
  { 
    image: cheeseburger,
    color: "rgb(253, 81, 129, 0.1)",
    title: "Lipides",
    quantity : "60g"
  }
]

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='dashboard__title'>
          <h1>Bonjour Thomas</h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
        </div>

        <div className='dashboard__charts'>
          <Chart />
          <div className='three_charts_container'>
            <WaveChart />
            <SpiderChart />
            <CircleChart />
          </div>
        </div>
        
        <aside className='dashboard__aside'>
            {indicators.map((indicator) => <div className='dashboard__aside__indicator-container'>
                        <img className='dashboard__aside__indicator btn' style={{backgroundColor:indicator.color}} src={indicator.image} key={indicator.title}/>
                        <h3 className='title'>{indicator.quantity}</h3>
                        <p className='quantity'>{indicator.title}</p>
                        </div>)}
        </aside>
    </div>
  );
}

export default Dashboard;
