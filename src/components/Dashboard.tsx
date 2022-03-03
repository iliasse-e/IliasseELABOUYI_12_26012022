/**
 * @file Manages the whole dashboard components
 */
import React from 'react';
import '../sass/layout/dashboard.scss';
import AverageSessionChart from './Charts/WaveChart';
import PerformanceChart from './Charts/PerformanceChart';
import ScoreChart from './Charts/ScoreChart';
import { Activity, AverageSession, Indicators, UserData } from '../types';
import { ActivityChart } from './Charts/ActivityChart';
import { customMessages } from '../data/messages';

interface DashboardProps {
  userData: UserData,
  icons: any,
  activity: Activity,
  averageSession: AverageSession,
  performance: Performance
}

/**
 * Gathers all graphics and data icons
 * Component called in Home page
 * @param props used as data for all graphics
 * @returns 
 */
const Dashboard: React.FC<DashboardProps> = ({userData, icons, activity, averageSession, performance}) :JSX.Element => {
  return (
    <div className='dashboard'>
        <div className='dashboard__title'>
          <h1>Bonjour <span className='dashboard__title__firstname'>{userData.userInfos.firstName}</span></h1>
          <p className='dashboard__title__message'>{customMessages(userData.todayScore)}</p>
        </div>

        <div className='dashboard__charts'>
          <ActivityChart activity={activity} />
          <div className='three_charts_container'>
            <AverageSessionChart averageSession={averageSession} />
            <PerformanceChart performance={performance} />
            <ScoreChart score={userData.todayScore} />
          </div>
        </div>
        
        <aside className='dashboard__aside'>
            {icons.map((indicator: Indicators) => <div className='dashboard__aside__indicator-container' key={indicator.title.toString()}>
                        <img className='dashboard__aside__indicator btn' style={{backgroundColor:indicator.color.toString()}} src={indicator.image.toString()} alt={indicator.title.toString()}/>
                        <h3 className='title'>{indicator.quantity}</h3>
                        <p className='quantity'>{indicator.title}</p>
                        </div>)}
        </aside>
    </div>
  );
}

export default Dashboard;
