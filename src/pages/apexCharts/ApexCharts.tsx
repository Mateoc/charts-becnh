import React, { useMemo } from "react";
// @ts-ignore
import Chart from "react-apexcharts";

function ApexCharts({ points }: { points: number }) {

  let y: number[] = [];
  for (let i = 0; i < points; i++) {
    y.push(Math.floor(Math.random() * 100));
  }

  const series = useMemo(() => [
    {
      name: 'Y',
      data: y.map((y, x) => ([x, y]))
    }
  ], [points])

  const options = useMemo(() => ({
    chart: {
      id: 'apexchart-example',
      animations: {
        enabled: false,
      },
    },
    stroke: {
      width: 1,
    }
  }), [])

  return (
    <div style={{ width: '90%', margin: '0 auto', height: '500px'}}>
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        height="500px"
      />
    </div>
  );

}

export default ApexCharts;