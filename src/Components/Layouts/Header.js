import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import 'typeface-roboto';
import Create from '../Exercises/Dialogs/Create';

export default function Header() {

  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="h1" style={{flex: 1}}>
            Exercise Database
          </Typography>
          <Create />
        </Toolbar>
      </AppBar>
    </div>
  );
}