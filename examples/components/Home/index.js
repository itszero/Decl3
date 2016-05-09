import LineChart from './LineChart';
import React from 'react';
import StackedAreaChart from './StackedAreaChart';

const Home = () => (
  <div className="container">
    <h1>Stacked Area Chart</h1>
    <StackedAreaChart/>

    <h1>Line Chart</h1>
    <LineChart/>
  </div>
);

export default Home;