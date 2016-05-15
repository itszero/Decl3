import React, { PropTypes } from 'react';
import d3 from 'd3';

const dataToPoint = (x, y, axies) => ({
  cx: axies.x.scale(x),
  cy: axies.y.scale(y)
});

const Scatter = ({ color, config, data, radius }) => (
  <g>
    {
      data.map(({x, y, color: dataColor, radius: dataRadius}, i) => (
        <circle
          {...dataToPoint(x, y, config.axies)}
          key={i}
          r={dataRadius || radius}
          fill={dataColor || color}
        />
      ))
    }
  </g>
);
Scatter.propTypes = {
  color: PropTypes.string,
  radius: PropTypes.number
};
Scatter.defaultProps = {
  color: 'black',
  radius: 2
};

export default Scatter;
