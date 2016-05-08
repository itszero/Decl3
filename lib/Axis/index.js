import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import d3 from 'd3';
import styles from './styles.css';

function getDefaultRange(axis, props) {
  switch (axis) {
    case 'x':
      return [0, props.width];
    case 'y':
      return [props.height, 0];
    default:
      return [0, 1];
  }
}

function getDefaultOrient(axis) {
  switch (axis) {
    case 'x':
      return 'bottom';
    case 'y':
      return 'left';
    default:
      return 'top';
  }
}

class Axis extends React.Component {
  static makeGlobalProps(oldProps, ownProps) {
    const scale = ownProps.scale || d3.scale.linear()
      .domain(ownProps.domain)
      .range(ownProps.range || getDefaultRange(ownProps.axis, oldProps));
    const orient = ownProps.orient || getDefaultOrient(ownProps.axis);

    let axis = d3.svg.axis()
      .scale(scale)
      .orient(orient);

    if (ownProps.ticks) {
      axis = axis.ticks(ownProps.ticks);
    }

    if (ownProps.tickFormat) {
      axis = axis.tickFormat(ownProps.tickFormat);
    }

    return {
      ...oldProps,
      axies: {
        ...(oldProps.axies || {}),
        [ownProps.axis]: { scale, orient, axis }
      }
    };
  }

  componentDidMount() { this._renderAxis(); }
  componentDidUpdate() { this._renderAxis(); }

  render() {
    const { margin, width, height } = this.props.config;
    const { orient } = this.props.config.axies[this.props.axis];

    const translateY = orient === 'bottom' ? height : 0;
    const translateX = orient === 'right' ? width : 0;

    return (
      <g
        className={styles.root}
        transform={`translate(${translateX}, ${translateY})`}
      />
    );
  }

  _renderAxis() {
    const { axis } = this.props.config.axies[this.props.axis];
    d3.select(ReactDOM.findDOMNode(this))
      .call(axis);
  }
}

export default Axis;
