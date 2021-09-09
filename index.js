import React from 'react';
import ReactDOM from 'react-dom';
import Box from './box';
import MenuAppBar from './appbar';

document.querySelectorAll('.card').forEach(function (domContainer) {
    var section = domContainer.dataset.section;
    var logo = domContainer.dataset.logo;
    ReactDOM.render(React.createElement(Box, { section: section, logo: logo }), domContainer);
});

ReactDOM.render(React.createElement(MenuAppBar, null), document.querySelector('#root'));