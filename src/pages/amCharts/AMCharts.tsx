import React, {useEffect} from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

function AMCHarts({points}: {points: number}) {
  useEffect(() => {
    let chart = am4core.create("amChart", am4charts.XYChart);
    chart.height = 500;
    chart.paddingRight = 20;

    let data = [];
    for (let i = 1; i < points; i++) {
      data.push({x: i, name: "name" + i, y: Math.floor(Math.random() * 100)});
    }

    chart.data = data;

    chart.xAxes.push(new am4charts.ValueAxis());

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    if (yAxis.tooltip) {
      yAxis.tooltip.disabled = true;
    }
    yAxis.renderer.minWidth = 35;
    yAxis.baseValue = 0;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueX = "x";
    series.dataFields.valueY = "y";

    series.tooltipText = "{valueY.value}";

    return () => {
      chart.dispose();
    }
  });

  return (
    <div style={{height: 500}}>
      <div id="amChart" style={{height: '100%'}}>Loading...</div>
    </div>
  )
}

export default AMCHarts;