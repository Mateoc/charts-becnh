import React, {createRef, useEffect} from 'react';
import Chart from "chart.js";

function ChartJS({points}: { points: number }) {
  let canvasRef = createRef<HTMLCanvasElement>()
  useEffect(() => {
    const series: { x: number, y: number }[] = []
    for (let i = 0; i < points; i++) {
      series.push({x: i, y: Math.floor(Math.random() * 100)})
    }

    const chartConfig: Chart.ChartConfiguration = {
      type: 'line',
      data: {
        datasets: [{
          label: '# of Votes',
          lineTension: 0,
          fill: false,
          data: series,
        }],
      },
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        responsive: false,
        tooltips: {
          enabled: false,
        },
        scales: {
          xAxes: [{
            type: 'linear'
          }]
        }
      }
    };
    let chart: Chart;
    if(canvasRef.current){
      chart = new Chart(canvasRef.current, chartConfig);
    }

    return () => {
      chart.destroy()
    }

  })

  return (
    <div style={{height: 500, display: 'flex', justifyContent: 'center'}}>
      <canvas ref={canvasRef} height='500px' width='1800px'/>
    </div>
  )
}

export default ChartJS;