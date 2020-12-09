import React, { useMemo } from "react";
// @ts-ignore
import { Chart } from "react-charts";

function ReactCharts({ points }: { points: number }) {

  let y: number[] = [];
  for (let i = 0; i < points; i++) {
    y.push(Math.floor(Math.random() * 100));
  }

  const data = useMemo(() => [
    {
      label: 'Y',
      data: y.map((y, x) => ([x, y]))
    }
  ], [points])

  const axes = useMemo(() => [
    {
      primary: true,
      position: 'bottom',
      type: 'linear',
    },
    {
      position: 'left',
      type: 'linear',
      stacked: true
    }
  ], [])

  const series = useMemo(() => ({
    showPoints: false
  }), [])

  return (
    <div style={{ width: '90%', margin: '0 auto', height: '500px'}}>
      <Chart
        data={data}
        axes={axes}
        series={series}
        primaryCursor
        secondaryCursor
      />
    </div>
  );

}

export default ReactCharts;