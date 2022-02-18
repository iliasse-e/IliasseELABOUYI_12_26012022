/**
 * @file Manages the daily activity graph
 */

import React, { PureComponent } from 'react';
import "/home/chahid/Documents/Projets-OC/sport-see/src/sass/layout/barchart.scss";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { activityStyle } from '../utils/style';
import { Activity } from '../../types';

/**
 * Renders bar chart
 */
export function ActivityChart(props) {

  
  const demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    return (
      <div className="barchart">
        <p className='barchart__title'>Activité quotidienne</p>
        <ResponsiveContainer  width="100%" height="100%">
          <BarChart
            width={300}
            height={250}
            data={props.activity}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0 1" opacity={0.7} />
            <XAxis dataKey="day" opacity={0.9} strokeOpacity={0} minTickGap={20} tickMargin={10} interval={0} />
            <YAxis opacity={1} orientation="right" strokeOpacity={0} tickMargin={10} padding={{top:30}} />
            <Tooltip contentStyle={activityStyle} />
            <Legend align='right' verticalAlign='top' />
            <Bar dataKey="kilogram" fill="#020203" barSize={10} radius={[5, 5, 0, 0]} legendType="circle" minPointSize={1} />
            <Bar dataKey="calories" fill="#FF0101" barSize={10} radius={[5, 5, 0, 0]} legendType="circle" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

