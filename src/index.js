import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Library from './print';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

Library();

if (module.hot) {
  module.hot.accept('./print', () => {
    console.log('Accepting the updated library module!');
    Library();
    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )
  });
}
