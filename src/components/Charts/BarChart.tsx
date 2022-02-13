/**
 * @file Manages the daily activity graph
 */

import React, { PureComponent } from 'react';
import "/home/chahid/Documents/Projets-OC/sport-see/src/sass/layout/barchart.scss";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [

  {
      day: '2020-07-01',
      kilogram: 70,
      calories: 240
  },
  {
      day: '2020-07-02',
      kilogram: 69,
      calories: 220
  },
  {
      day: '2020-07-03',
      kilogram: 70,
      calories: 280
  },
  {
      day: '2020-07-04',
      kilogram: 70,
      calories: 500
  },
  {
      day: '2020-07-05',
      kilogram: 69,
      calories: 160
  },
  {
      day: '2020-07-06',
      kilogram: 69,
      calories: 162
  },
  {
      day: '2020-07-07',
      kilogram: 69,
      calories: 390
  }
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
            data={this.props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0 1" opacity={0.7} />
            <XAxis dataKey="day" opacity={0.9} strokeOpacity={0} minTickGap={20} tickMargin={10} interval={0}/>
            <YAxis opacity={1} orientation="right" strokeOpacity={0} tickMargin={10} padding={{top:30}} />
            <Tooltip />
            <Legend align='right' verticalAlign='top' />
            <Bar dataKey="kilogram" fill="#020203" barSize={10} radius={[5, 5, 0, 0]} />
            <Bar dataKey="calories" fill="#FF0101" barSize={10} radius={[5, 5, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

