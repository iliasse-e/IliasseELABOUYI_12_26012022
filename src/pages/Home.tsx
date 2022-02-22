/**
 * @file Manages the home page
 * Imports data from service folder
 */

import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import Menus from '../components/Menus';
import { indicators } from '../data/indicators';
import '../sass/components/components.scss';
import '../sass/pages/home.scss';
import { getUserData } from '../service/getData';
import { getUserActivity } from '../service/getActivity';
import { getUserPerformance } from '../service/getPerformance';
import { getUserAverageSession } from '../service/getAverageSession';
import { buttons } from '../data/menus';
import Loader from '../components/Loader';

/**
 * Component called in App
 * @returns 
 */
function Home() {
  const [userData, setUserData] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Promise.all([getUserData(), getUserPerformance(), getUserAverageSession(), getUserActivity()])
    .then(response => {
      console.log(response)
      setUserData(response[0])
      setUserPerformance(response[1])
      setUserAverageSessions(response[2])
      setUserActivity(response[3])
      setIsLoading(false)
    })
  })


  return (isLoading) ? (<Loader />) : (
    <main>
        <Menus buttons={buttons} />
        <Dashboard 
        userData={userData} icons={indicators(userData)} activity={userActivity}
         averageSession={userAverageSessions} performance={userPerformance} />
    </main>
  );
}

export default Home;