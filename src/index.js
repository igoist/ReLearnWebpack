import App from './App';
import Library from './print';

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
