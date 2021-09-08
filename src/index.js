import React from 'react';
import ReactDOM from 'react-dom';
import Box from './box'
import MenuAppBar from './appbar'

document.querySelectorAll('.card')
    .forEach(domContainer => {
        const section = domContainer.dataset.section;
        const logo = domContainer.dataset.logo;
        ReactDOM.render(
            React.createElement(Box, {section: section, logo: logo}), 
            domContainer) 
    });

ReactDOM.render(<MenuAppBar />, document.querySelector('#root'));