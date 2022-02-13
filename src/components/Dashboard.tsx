/**
 * @file Manages the whole dashboard components
 */
import React from 'react';
import logo from '../assets/images/logo.svg'
import Navigation from './Navigation';
import '../sass/layout/dashboard.scss';
import Chart from './Charts/BarChart';
import WaveChart from './Charts/WaveChart';
import SpiderChart from './Charts/SpiderChart';
import CircleChart from './Charts/CircleChart';
import { Indicators, UserData } from '../types';
import { getUserData } from '../service/getData';


function Dashboard(props: { userData: UserData; icons: Indicators[] }) {
  return (
    <div className='dashboard'>
        <div className='dashboard__title'>
          <h1>Bonjour {props.userData.userInfos.firstName}</h1>
          <h2>{}</h2>
          <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
        </div>

        <div className='dashboard__charts'>
          <Chart data={props.activity} />
          <div className='three_charts_container'>
            <WaveChart data={props.averageSession} />
            <SpiderChart data={props.performance} />
            <CircleChart data={props.userData.todayScore} />
          </div>
        </div>
        
        <aside className='dashboard__aside'>
            {props.icons.map((indicator) => <div className='dashboard__aside__indicator-container'>
                        <img className='dashboard__aside__indicator btn' style={{backgroundColor:indicator.color}} src={indicator.image} key={indicator.title}/>
                        <h3 className='title'>{indicator.quantity}</h3>
                        <p className='quantity'>{indicator.title}</p>
                        </div>)}
        </aside>
    </div>
  );
}

export default Dashboard;
