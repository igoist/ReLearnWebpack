import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!!!!dasdsd
      </div>
    );
  }
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
)


import Library from './library';

if (module.hot) {
  // module.hot.accept('./library', function() {
  //   console.log('Accepting the updated library module!');
  //   Library.log();
  // });
  module.hot.accept();
}
