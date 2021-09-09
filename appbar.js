import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

var useStyles = makeStyles(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  };
});

export default function ButtonAppBar() {
  var classes = useStyles();

  return React.createElement(
    'div',
    { className: classes.root },
    React.createElement(
      AppBar,
      { position: 'fixed' },
      React.createElement(
        Toolbar,
        null,
        React.createElement(
          IconButton,
          { edge: 'start', className: classes.menuButton, color: 'inherit', 'aria-label': 'menu' },
          React.createElement(MenuIcon, null)
        ),
        React.createElement(
          Typography,
          { variant: 'h6', className: classes.title },
          'Tech Stack'
        ),
        React.createElement(
          Button,
          { color: 'inherit' },
          'GitHub Page'
        )
      )
    )
  );
}