import React, {useEffect} from "react";

import {
  Color,
  ColorHEX,
  ColorRGBA,
  DataPatterns,
  EmptyFill,
  FillStyle,
  lightningChart, SolidLine,
  UIEmptyBackground
} from '@arction/lcjs'

function LightningChart({points}: { points: number }) {
  useEffect(() => {
    const chart = lightningChart()
      .ChartXY({container: 'lightingchartId'})
      .setChartBackgroundFillStyle((solidFill) => {
          // @ts-ignore
          return solidFill.setColor(ColorHEX("#FFFFFF"));
          //return solidFill.setColor(ColorRGBA(  0, 0, 0));
        }
      )
      .setBackgroundFillStyle((solidFill) => {
          // @ts-ignore
          return solidFill.setColor(ColorHEX("#FFFFFF"));
          //return solidFill.setColor(ColorRGBA(  0, 0, 0));
        }
      );

// Add a series for rendering a line optimized for progressing by X.
    const lineSeries = chart
      .addLineSeries({dataPattern: DataPatterns.horizontalProgressive});

// Append point locations. (Note that selected Data Pattern expects them to be progressive by X)
    const pointsToAdd = [];

    for (let i = 0; i < points; i++) {
      pointsToAdd.push({x: i, y: Math.floor(Math.random() * 100)});
    }

    lineSeries.add(pointsToAdd);

    return () => {
      chart.dispose();
    }
  });

  return (
    <div>
      <div id="lightingchartId"/>
    </div>
  )
}

export default LightningChart;