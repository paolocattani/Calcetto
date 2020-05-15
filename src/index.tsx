import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'typeface-roboto';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, useHistory } from 'react-router-dom';
import it from 'date-fns/locale/it';
import { setDefaultLocale, registerLocale } from 'react-datepicker';
import { store } from 'store';
import { Provider } from 'react-redux';

setDefaultLocale('it');
registerLocale('it', it);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
process.env.NODE_ENV !== 'production' ? serviceWorker.unregister() : serviceWorker.register();

// Redefine console so it does not in production env
if (process.env.NODE_ENV === 'production') {
  if (!window.console) (window as any).console = {};
  ['log', 'debug', 'warn', 'info'].forEach((e) => ((window as any).console[e] = () => {}));
}
