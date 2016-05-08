import React, { PropTypes } from 'react';
import d3 from 'd3';

const svgArea = (axies) => {
  return d3.svg.area()
    .x(({x}) => axies.x.scale(x))
    .y0(({y0}) => axies.y.scale(y0))
    .y1(({y0, y}) => axies.y.scale(y0 + y))
    .interpolate("cardinal");
};
const id = (x) => x;

const Area = ({ color, config, data, strokeWidth }) => (
  <g>
    <path
      d={svgArea(config.axies)(data)}
      fill={color}
    />
  </g>
);
Area.propTypes = {
  color: PropTypes.string
};
Area.defaultProps = {
  color: 'black'
};

export default Area;
