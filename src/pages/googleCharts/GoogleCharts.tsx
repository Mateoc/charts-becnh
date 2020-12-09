import React from "react";

import {Chart} from "react-google-charts";

function GoogleChats({points}: {points: number}) {
  const data: any[] = [
    ['', '']
  ];

  for(let i = 0; i < points; i++){
    data.push([i, Math.floor(Math.random() * 100)])
  }
  return (
    <div style={{display: 'flex', justifyContent: "center"}}>
      <Chart
        height={500}
        width="1800px"
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
        }}
        legendToggle
      />
    </div>
  )
}

export default GoogleChats;