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
import { Activity, AverageSession, Indicators, UserData } from '../types';
import { ActivityChart } from './Charts/ActivityChart';

/**
 * Component called in Home page
 * @param props 
 * @returns 
 */
function Dashboard(props: { userData: { userInfos: { firstName: String; }; todayScore: Number; }; activity: Activity; averageSession: AverageSession; performance: Performance; icons: { color: String; image: string | undefined; title: String; quantity: String; }[]; }) {
  return (
    <div className='dashboard'>
        <div className='dashboard__title'>
          <h1>Bonjour <span className='dashboard__title__firstname'>{props.userData.userInfos.firstName}</span></h1>
          <p className='dashboard__title__message'>Félicitations ! Vous avez explosé vos objectifs hier</p>
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
