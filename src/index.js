import React from 'react';
import ReactDOM from 'react-dom';
import MenuAppBar from './appbar'
import Dashboard from './dashboard';
import './main.css';
import './vars.css';

ReactDOM.render(<MenuAppBar />, document.querySelector('#appbar'));
document.querySelectorAll('.dashboard')
    .forEach(domContainer => {
        ReactDOM.render(<Dashboard />, domContainer);
    });