import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import Root from './components/Root';

ReactDOM.render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}