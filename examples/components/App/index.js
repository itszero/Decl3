import { Link } from 'react-router';
import React from 'react';

const App = ({ children, history, routes }) => (
  <div>
    <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
      <Link className="navbar-brand" to="/">Decl3 Examples</Link>
    </nav>
    { children }
  </div>
);

export default App;