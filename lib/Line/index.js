import React, { PropTypes } from 'react';
import d3 from 'd3';

const svgLine = (axies) => {
  return d3.svg.line()
    .x(({x}) => axies.x.scale(x))
    .y(({y}) => axies.y.scale(y));
};
const id = (x) => x;

const Line = ({ color, config, data, strokeWidth }) => (
  <g>
    <path
      d={svgLine(config.axies)(data)}
      fill='none'
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </g>
);
Line.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.number
};
Line.defaultProps = {
  color: 'black',
  strokeWidth: 5
};

export default Line;
