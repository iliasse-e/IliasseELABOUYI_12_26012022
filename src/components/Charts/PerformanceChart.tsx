/**
 * @file Manages the performances graph rendering
 */

import React from "react";
import "../../sass/layout/radarchart.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const kind = {
  1: 'cardio',
  2: 'energy',
  3: 'endurance',
  4: 'strength',
  5: 'speed',
  6: 'intensity'
}

const data = [
  {
      value: 200,
      kind: 1
  },
  {
      value: 240,
      kind: 2
  },
  {
      value: 80,
      kind: 3
  },
  {
      value: 80,
      kind: 4
  },
  {
      value: 220,
      kind: 5
  },
  {
      value: 110,
      kind: 6
  }
]

export default function PerformanceChart(props) {
  return (
    <RadarChart
    className="radarchart"
      cx={150}
      cy={150}
      outerRadius={90}
      width={300}
      height={300}
      data={props.performance}
      
    >
      <PolarGrid strokeWidth={1.5} radialLines={false} />
      <PolarAngleAxis stroke="#FFFFFF" dataKey="kind" />
      <PolarRadiusAxis opacity={0} />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#8884d8"
        fill="#FF0101"
        strokeWidth={0}
        fillOpacity={0.6}        
      />
    </RadarChart>
  );
}
