import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { AppModel } from './components/dataManagments/logicRepository/main/AppModel.jsx';
import { Load } from './components/dataManagments/example/Load.jsx';


export const appModel = AppModel(); //repository of props, states and other

Load('Peter Parker'); //resume example

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
