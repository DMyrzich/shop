import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Api } from './Api/Api'


ReactDOM.render(
  <React.StrictMode>
    <Api>
      <App />
    </Api>
  </React.StrictMode>,
  document.getElementById('root')
);

