import React from "react";
import Plot from "react-plotly.js";

function Plotly({points}: { points: number }){

  let y = [];
  for (let i = 0; i < points; i++) {
    y.push(Math.floor(Math.random() * 100));
  }

  return (
    <Plot
      data={[
        {
          y,
          type: 'scatter',
          mode: 'lines'
        },
      ]}
      layout={{width: 1800, height: 500, title: 'A Fancy Plot'}}
      //config={{staticPlot: true}}
    />
  );

}

export default Plotly;