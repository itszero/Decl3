import React from 'react';
import { Router, hashHistory } from 'react-router';
import routes from '../../routes';

const Root = () => (
  <Router
    children={routes}
    history={hashHistory}
  />
);

export default Root;