/**
 * @file Manages the home page
 */

import React from 'react';
import Dashboard from '../components/Dashboard';
import Menus from '../components/Menus';
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from '../data/data';
import { indicators } from '../data/indicators';
import '../sass/components/components.scss';
import '../sass/pages/home.scss';
import { getUserData } from '../service/getData';

function Home() {
  return (
    <main>
        <Menus />
        <Dashboard userData={USER_MAIN_DATA[0]} icons={indicators} score={USER_MAIN_DATA[0].todayScore} activity={USER_ACTIVITY[0].sessions} averageSession={USER_AVERAGE_SESSIONS[0].sessions} performance={USER_PERFORMANCE[0]} />
    </main>
  );
}

export default Home;
