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


  useEffect(() => {
		const getData = async () => {
			const request = await getUserData();
			if (!request) return console.log("Error request");
      console.log(request)
			setUserData(request);
		};
		getData();
	}, []);

  useEffect(() => {
    const getData = async () => {
      const request = await getUserPerformance();
      if (!request) return console.log("Error request");
      console.log(request)
      setUserPerformance(request);
    };
    getData();
  }, []);

  useEffect(() => {
		const getData = async () => {
			const request = await getUserActivity();
			if (!request) return console.log("Error request");
      console.log(request)
			setUserActivity(request);
		};
		getData();
	}, []);

  useEffect(() => {
		const getData = async () => {
			const request = await getUserAverageSession();
			if (!request) return console.log("Error request");
      console.log(request)
			setUserAverageSessions(request);
		};
		getData();
	}, []);



  return (userData === null || undefined) ? (<Loader />) : (
    <main>
        <Menus buttons={buttons} />
        <Dashboard userData={userData} icons={indicators(userData)} activity={userActivity} averageSession={userAverageSessions} performance={userPerformance} />
    </main>
  );
}

export default Home;