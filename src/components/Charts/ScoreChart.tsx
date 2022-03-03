/**
 * @file Manages the score graph rendering
 */

import React from "react";
import "../../sass/layout/scorechart.scss";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { ScoreType } from "../../types";

/**
 * Builds a score graph component
 * Component called in Dashboard
 * @returns {html} Score graph
 */
export default function ScoreChart(props: { score: any; }): JSX.Element {

  /**
   * Datas needed to fill the chart
   * The first object is standard and has stay static, the uv value has to be 100 if you want to use %
   * @type { Array.<{name:String, uv: Number, pv: Number, fill: String}> }
   */
  const data : ScoreType[] = [
    {
      name: "",
      uv: 100, //This represents the maximum %
      pv: 2400,
      fill: "rgba(223, 223, 223, 0.0)"
    },
    {
      name: "50%",
      uv: props.score * 100, //Here's where your data goes
      pv: 2400,
      fill: "#FF0101"
    },
  ];

  return (
    <div className="scorechart" style={{
      width: "30%",
      maxWidth: 250,
      height: 230,
      display: "flex",
      padding: "0px 5px"
    }}>
      <RadialBarChart
      width={230}
      style={{
        display: "flex",
        justifyContent: "center"
      }}
      height={230}
      className="scorechart__radial-bar"
      cx={110}
      cy={130}
      innerRadius={80}
      outerRadius={80}
      barSize={10}
      data={data}
      startAngle={90}
      endAngle={450}
      >
        <RadialBar
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
          width={50}
          minPointSize={5}
          dataKey="uv"
          startAngle={90}
          />
      </RadialBarChart>

      <div style={{
        display: "flex"
      }}>

        <h3 className="scorechart__title">Score</h3>
        <div className="scorechart__legend">
            <p className="scorechart__legend__value">{data[1].uv}%</p>
            <p className="scorechart__legend__txt">de votre objectif</p>
        </div>
      </div>
    </div>
  );
}
