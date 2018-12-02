import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './modules/rem.js';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter,Route}  from 'react-router-dom';
import './static/font-awesome-4.7.0/css/font-awesome.css';
ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<Route component={App}/>
</BrowserRouter>
</Provider>
, document.getElementById('root'));

 
