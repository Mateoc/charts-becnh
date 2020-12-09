import React from "react";
import Plot from "react-plotly.js";

function Plotly({points}: { points: number }){

  let y = [];
  for (let i = 0; i < points; i++) {
    y.push(Math.floor(Math.random() * 100));
  }

  return (
    <div style={{ width: '90%', height: '500px', margin: '0 auto'}}>
    <Plot
      data={[
        {
          y,
          type: 'scatter',
          mode: 'lines'
        },
      ]}
      layout={{
        autosize: true,
        margin: {
          l: 20,
          r: 20,
          b: 30,
          t: 20,
          pad: 4
        },
      }}
      useResizeHandler={true}
      style={{width: '100%', height: '100%'}}
      //config={{staticPlot: true}}
    />
    </div>
  );

}

export default Plotly;