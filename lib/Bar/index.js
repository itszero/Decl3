import React, { PropTypes } from 'react';
import d3 from 'd3';

const getRects = (data, width, height) => {
  return data.map(
    function(data, i) {
       return <rect
          key={i}
          x={data.x}
          y={data.y}
          width={width}
          height={height}
        />
    }
  )
};

const id = (x) => x;


const Bar = ({ color, config, data, width, height}) => (
  <g>
    {getRects(data, width, height)}
  </g>
);

Bar.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
Bar.defaultProps = {
  color: 'black',
  width: 10,
  height: 10
};

export default Bar;
