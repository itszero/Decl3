import React from 'react';
import D3 from '../../../lib/D3';

import Axis from '../../../lib/Axis';
import Area from '../../../lib/Area';
import Line from '../../../lib/Line';
import data from '../../data.json';

const parseDate = d3.time.format("%y-%b-%d").parse;
const formatPercent = d3.format(".0%");
const color = d3.scale.category10()
  .domain(Object.keys(data));

const stack = d3.layout.stack()
  .values((d) => d.values);
const browsers = stack(Object.keys(data).map((key) => ({
  name: key,
  values: data[key].map(({date, value}) => ({x: parseDate(date), y: value / 100}))
})));

const Home = () => (
  <div className="container">
    <h1>Stacked Area Chart</h1>
    <D3 width={760} height={260} margin={{left: 50}}>
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

    <h1>Line Chart</h1>
    <D3 width={760} height={260} margin={{left: 50}}>
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
          <Line
            color={color(name)}
            data={values}
            name={name}
            key={name}
          />
        )
      }
    </D3>
  </div>
);

export default Home;