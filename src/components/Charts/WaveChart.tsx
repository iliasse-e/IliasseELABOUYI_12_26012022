import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "/home/chahid/Documents/Projets-OC/sport-see/src/sass/layout/wavechart.scss";

const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class WaveChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div className='wavechart' style={{ width: 300, height: 300 }}>
        <p className='wavechart__title'>Durée moyenne des sessions</p>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -50,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0} />
            <XAxis dataKey="name" tickMargin={-80} padding={{left:10, right:20}} stroke="#FFFFFF" strokeOpacity={0} opacity={0.8} />
            <YAxis opacity={0}/>
            <Tooltip active allowEscapeViewBox={{x: true}} />
            <Area type="monotone" dataKey="uv" stroke="#FFFFFF" fill="#8884d8" fillOpacity={0} opacity={0.8} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
