import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css';
import App from './App';
// import ShoppingList from './views/home/index'
import * as serviceWorker from './serviceWorker';
import moment from 'moment'
// import Router from './Router'

// console.log(React,'React');
// React.prototype.$moment = moment;

ReactDOM.render(
    <App />,
    // <ShoppingList value='我的天啊'></ShoppingList>,
    // <Router />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
