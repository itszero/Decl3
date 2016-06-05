import Axis from '../../../lib/Axis';
import D3 from '../../../lib/D3';
import data from '../../data.json';
import Bar from '../../../lib/Bar';
import React from 'react';

const parseDate = d3.time.format("%y-%b-%d").parse;
const formatPercent = d3.format(".0%");
const color = d3.scale.category20()
  .domain(Object.keys(data));

const browsers = Object.keys(data).map((key) => ({
  name: key,
  values: data[key].map(({date, value}) => ({x: parseDate(date), y: value}))
}));

const BarChart = () => (
  <D3 width={600} height={260} margin={{left: 50}}>
    <Axis
      axis='x'
      scale={d3.time.scale()
          .domain([new Date(data[0]), d3.time.day.offset(new Date(data[data.length - 1]), 1)])}
    />
    <Axis
      axis='y'
      domain={[0, 0.5]}
      tickFormat={formatPercent}
      ticks={6}
    />
    {
      browsers.map(({name, values}) =>
        <Bar
          color={color(name)}
          data={values}
          name={name}
          key={name}
        />
      )
    }
  </D3>
);

export default BarChart;
