import classnames from 'classnames';
import LineChart from './LineChart';
import React from 'react';
import StackedAreaChart from './StackedAreaChart';

import styles from './styles.css';

const sanitize = (str) => str.toLowerCase().replace(/ /, '_');

const examples = [
  {
    name: 'Stacked Area Chart',
    component: (<StackedAreaChart/>)
  },
  {
    name: 'Line Chart',
    component: (<LineChart/>)
  }
];

const Home = () => (
  <div className='container-fluid'>
    <div className='col-sm-3'>
      <ul className='nav'>
        {
          examples.map(({ name, component }) => (
            <li className={classnames('nav-item', styles.link)} key={sanitize(name)}>
              <a className='nav-link' href={`#${sanitize(name)}`}>{name}</a>
            </li>
          ))
        }
      </ul>
    </div>
    <div className='col-sm-9'>
      {
        examples.map(({ name, component }) => (
          <div key={sanitize(name)}>
            <a name={sanitize(name)}/>
            <h1>{name}</h1>
            {component}
          </div>
        ))
      }
    </div>
  </div>
);

export default Home;