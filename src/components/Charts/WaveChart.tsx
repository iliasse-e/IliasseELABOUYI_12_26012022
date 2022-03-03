/**
 * @file Manages the average session graph rendering
 */

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import "../../sass/layout/wavechart.scss";
import { averageSessionStyle } from '../utils/style';
import { AverageSessionCustomTooltip } from '../utils/toolTips';


/**
 * Builds the average session graph
 * Component called in Dashboard
 * @param {AverageSession}
 */
export default function AverageSessionChart(props) {


  const demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

    return (
      <div className='wavechart' style={{
        width: "30%",
        maxWidth: 250,
        height: 230,
      }}>
        <p className='wavechart__title'>Durée moyenne des <br/> sessions</p>
        <ResponsiveContainer >
          <AreaChart
            data={props.averageSession}
            outerRadius="75%"
            margin={{
              top: 60,
              right: 0,
              left: -50,
              bottom: -20,
            }}
          >
            <XAxis dataKey="day" tickMargin={-20} padding={{left:0, right:10}} stroke="#FFFFFF" strokeOpacity={0} strokeWidth={10} opacity={0.8} />
            <YAxis padding={{top:-20, bottom:30}} tickMargin={-30} opacity={0} />
            <Tooltip cursor={<CustomCursor width={80} height={250} x={180} />} content={<AverageSessionCustomTooltip />} />
            <Area type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill="#8884d8" fillOpacity={0} strokeWidth={1.8} opacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
}

const CustomCursor = props => {
  const { x, y, width, height, stroke } = props;
  return <Rectangle opacity={0.4} fill="black" stroke="rgba(0, 0, 0, 0.3)" x={x} y={y} width={width} height={height} />;
};