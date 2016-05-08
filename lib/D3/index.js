import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import d3 from 'd3';
import flattenDeep from 'lodash/flattenDeep';

const DEFAULT_MARGIN = {
  left: 20,
  right: 20,
  top: 20,
  bottom: 30
};

class D3 extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margin: PropTypes.object
  };

  render() {
    const { children, height, margin: pMargin, width } = this.props;
    const margin = {...DEFAULT_MARGIN, ...(pMargin || {})};

    const aggregatedProps = this._collectProps(children);
    const newChildren = this._applyProps(aggregatedProps, children);

    return (
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          { newChildren }
        </g>
      </svg>
    );
  }

  _collectProps(children) {
    children = flattenDeep([children]);
    const { children: _, ...graphProps } = this.props;

    return children.reduce((props, child) => (
      child && child.type.makeGlobalProps ?
        child.type.makeGlobalProps(props, child.props) :
        props
    ), graphProps);
  }

  _applyProps(props, children) {
    children = flattenDeep([children]);
    return children.map((child, i) => React.cloneElement(child, {
      config: props,
      key: `${i}`
    }));
  }
}

export default D3;
