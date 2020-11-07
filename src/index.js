import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import serverFE from './serverFE';

ReactDOM.render(
  <React.StrictMode>
    <App />,
    <serverFE />
  </React.StrictMode>,
  document.getElementById('root')
);


