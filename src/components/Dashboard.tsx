/**
 * @file Manages the whole dashboard components
 */
import React from 'react';
import logo from '../assets/images/logo.svg'
import Navigation from './Navigation';
import '../sass/layout/dashboard.scss';
import AverageSessionChart from './Charts/WaveChart';
import PerformanceChart from './Charts/PerformanceChart';
import ScoreChart from './Charts/ScoreChart';
import { Indicators, UserData } from '../types';
import ActivityChart from './Charts/ActivityChart';

function Dashboard(props) {
  return (
    <div className='dashboard'>
        <div className='dashboard__title'>
          <h1>Bonjour {props.userData.userInfos.firstName}</h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
        </div>

        <div className='dashboard__charts'>
          <ActivityChart activity={props.activity} />
          <div className='three_charts_container'>
            <AverageSessionChart averageSession={props.averageSession} />
            <PerformanceChart performance={props.performance} />
            <ScoreChart score={props.userData.todayScore} />
          </div>
        </div>
        
        <aside className='dashboard__aside'>
            {props.icons.map((indicator: { color: any; image: string | undefined; title: {} | null | undefined; quantity: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => <div className='dashboard__aside__indicator-container'>
                        <img className='dashboard__aside__indicator btn' style={{backgroundColor:indicator.color}} src={indicator.image} key={indicator.title}/>
                        <h3 className='title'>{indicator.quantity}</h3>
                        <p className='quantity'>{indicator.title}</p>
                        </div>)}
        </aside>
    </div>
  );
}

export default Dashboard;
