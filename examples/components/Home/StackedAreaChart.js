import Area from '../../../lib/Area';
import Axis from '../../../lib/Axis';
import D3 from '../../../lib/D3';
import data from '../../data.json';
import React from 'react';

const parseDate = d3.time.format("%y-%b-%d").parse;
const formatPercent = d3.format(".0%");
const color = d3.scale.category20()
  .domain(Object.keys(data));

const stack = d3.layout.stack()
  .values((d) => d.values);
const browsers = stack(Object.keys(data).map((key) => ({
  name: key,
  values: data[key].map(({date, value}) => ({x: parseDate(date), y: value / 100}))
})));

const StackedArea = () => (
  <D3 width={600} height={260} margin={{left: 50}}>
    <Axis
      axis='x'
      scale={d3.time.scale().range([0, 760]).domain(d3.extent(data.ie, (d) => parseDate(d.date)))}
      ticks={6}
    />
    <Axis
      axis='y'
      domain={[0, 1]}
      tickFormat={formatPercent}
      ticks={6}
    />
    {
      browsers.map(({name, values}) =>
        <Area
          color={color(name)}
          data={values}
          name={name}
          key={name}
        />
      )
    }
  </D3>
);

export default StackedArea;