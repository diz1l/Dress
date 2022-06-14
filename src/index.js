import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './App';

// import reportWebVitals from './reportWebVitals';

import './scss/app.scss';
import './scss/glavnaya.scss';
import './scss/variables.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


root.render(
  <React.StrictMode>
    {/* бесшовный переход между окнами */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


