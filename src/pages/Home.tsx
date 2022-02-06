/**
 * @file Manages the home page
 */

import React from 'react';
import Dashboard from '../components/Dashboard';
import Menus from '../components/Menus';
import '../sass/components/components.scss';
import '../sass/pages/home.scss';

function Home() {
  return (
    <main>
        <Menus />
        <Dashboard />
    </main>
  );
}

export default Home;
