/**
 * @file Manages the score graph rendering
 */

import React from "react";
import "../../sass/layout/circlechart.scss";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { ScoreType } from "../../types";

/**
 * Builds a score graph component
 * @returns {html} Score graph
 */
export default function CircleChart(props) {

  /**
   * Datas needed to fill the chart
   * @type { Array.<{name:String, uv: Number, pv: Number, fill: String}> }
   */
  const data : ScoreType[] = [
    {
      name: "",
      uv: 100,
      pv: 2400,
      fill: "#FFFFFF"
    },
    {
      name: "50%",
      uv: props.data * 100,
      pv: 2400,
      fill: "#FF0101"
    },
  ];

  return (
    <div className="circlechart">
      <h3 className="circlehart__title">Score</h3>

      <RadialBarChart
      width={300}
      height={300}
      cx={150}
      cy={150}
      innerRadius={100}
      outerRadius={140}
      barSize={10}
      data={data}
      >
        <RadialBar
          minPointSize={5}
          dataKey="uv"
          />
      </RadialBarChart>

      <div className="circlechart__legend">
          <p className="circlechart__legend__value">{data[1].uv}%</p>
          <p className="circlechart__legend__txt">de votre objectif</p>
      </div>
    </div>
  );
}
