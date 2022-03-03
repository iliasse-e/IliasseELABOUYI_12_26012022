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

/**
 * Builds the performance chart graph
 * Component called in Dashboard
 */
export default function PerformanceChart(props) {
  return (
    <RadarChart style={{
      width: "30%",
      maxWidth: 250,
      height: 230,
      display: "flex",
      padding: "0px 5px"
    }}
    className="radarchart"
      cx={120} // abcise line
      cy={120}
      outerRadius={70} // web size
      width={250}
      height={230}
      data={props.performance}
    >
      <PolarGrid strokeWidth={1.5} radialLines={false} />
      <PolarAngleAxis style={{fontSize: "0.9em"}} stroke="#FFFFFF" dataKey="kind" fontSize={12} />
      <PolarRadiusAxis opacity={0} />
      <Radar
        dataKey="value"
        stroke="#8884d8"
        fill="#FF0101"
        strokeWidth={0}
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
