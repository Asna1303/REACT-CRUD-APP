import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux'
import App from './App';
 import {ConfigureStore} from '@reduxjs/toolkit';
 import userReducer from './userReducer';
 const store= ConfigureStore({
  reducer:{
    users : userReducer
    
  }
 })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);



