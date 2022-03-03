/**
 * @file Manages the daily activity graph
 */

import React, { PureComponent } from 'react';
import "../../sass/layout/barchart.scss";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { activityStyle } from '../utils/style';
import { ActivityCustomTooltip } from '../utils/toolTips';

/**
 * Builds the activity chart graph
 * Uses a formated data called in service
 * Component called in dashboard
 * @param {Activity}
 */
export function ActivityChart(props) {
  
  const demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    return (
      <div className="barchart">
        <p className='barchart__title'>Activité quotidienne</p>
        <ResponsiveContainer  width="100%">
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
            <CartesianGrid strokeDasharray="1 3" opacity={0.7} />
            <XAxis dataKey="day" opacity={0.9} strokeOpacity={0} minTickGap={20} tickMargin={10} interval={0} />
            <YAxis opacity={1} orientation="right" strokeOpacity={0} tickMargin={10} padding={{top:30}} />
            <Tooltip content={<ActivityCustomTooltip />} />
            <Legend align='right' verticalAlign='top' height={20}/>
            <Bar name='Poids (Kg)' dataKey="kilogram" fill="#020203" barSize={10} radius={[5, 5, 0, 0]} legendType="circle" minPointSize={1} />
            <Bar name='Calories brûlées (kCal)' dataKey="calories" fill="#FF0101" barSize={10} radius={[5, 5, 0, 0]} legendType="circle" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

