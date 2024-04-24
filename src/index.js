import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux'
import App from './App';
 import {ConfigureStore} from '@reduxjs/toolkit'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={}>
    <App />
    </Provider>
  </React.StrictMode>
);



