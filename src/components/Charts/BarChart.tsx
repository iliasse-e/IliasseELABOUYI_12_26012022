/**
 * @file Manages the daily activity graph
 */

import React, { PureComponent } from 'react';
import "/home/chahid/Documents/Projets-OC/sport-see/src/sass/layout/barchart.scss";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: "1",
    poids: 4000,
    calories: 2400,
    amt: 2400,
  },
  {
    name: '2',
    poids: 3000,
    calories: 1398,
    amt: 2210,
  },
  {
    name: '3',
    poids: 2000,
    calories: 9800,
    amt: 2290,
  },
  {
    name: '4',
    poids: 2780,
    calories: 3908,
    amt: 2000,
  },
  {
    name: '5',
    poids: 1890,
    calories: 4800,
    amt: 2181,
  },
  {
    name: '6',
    poids: 2390,
    calories: 3800,
    amt: 2500,
  },
  {
    name: '7',
    poids: 3490,
    calories: 4300,
    amt: 2100,
  },
];

/**
 * Renders bar chart
 */
export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';


  render() {
    return (
      <div className="barchart">
        <p className='barchart__title'>Activité quotidienne</p>
        <ResponsiveContainer  width="100%" height="100%">
          <BarChart
            width={300}
            height={250}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0 1" opacity={0.7} />
            <XAxis dataKey="name" opacity={0.9} strokeOpacity={0} minTickGap={20} tickMargin={10} interval={0}/>
            <YAxis opacity={1} orientation="right" strokeOpacity={0} tickMargin={10} padding={{top:30}} />
            <Tooltip />
            <Legend align='right' verticalAlign='top' />
            <Bar dataKey="poids" fill="#020203" barSize={10} radius={[5, 5, 0, 0]} />
            <Bar dataKey="calories" fill="#FF0101" barSize={10} radius={[5, 5, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

