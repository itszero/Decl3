import Axis from '../../../lib/Axis';
import D3 from '../../../lib/D3';
import React from 'react';
import Scatter from '../../../lib/Scatter';

const color = d3.scale.category20();

const data = [];
for (var i=0;i<200;i++) {
  data.push({
    x: Math.random() * 250,
    y: Math.random() * 250,
    color: color(Math.floor(Math.random() * 20)),
    radius: Math.random() * 10
  })
}

const ScatterPlotChart = () => (
  <D3 width={600} height={260} margin={{left: 50}}>
    <Axis
      axis='x'
      domain={[0, 250]}
      ticks={6}
    />
    <Axis
      axis='y'
      domain={[0, 250]}
      ticks={6}
    />
    <Scatter data={data}/>
  </D3>
);

export default ScatterPlotChart;