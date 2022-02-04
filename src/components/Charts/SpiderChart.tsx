import React from "react";
import "/home/chahid/Documents/Projets-OC/sport-see/src/sass/layout/radarchart.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Cardio",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Energie",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "Endurance",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

export default function SpiderChart() {
  return (
    <RadarChart
    className="spiderchart"
      cx={150}
      cy={125}
      outerRadius={100}
      width={300}
      height={300}
      data={data}
      
    >
      <PolarGrid strokeWidth={2}/>
      <PolarAngleAxis stroke="#FFFFFF" dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#FF0101"
        strokeWidth={0}
        fillOpacity={0.6}
        
      />
    </RadarChart>
  );
}
