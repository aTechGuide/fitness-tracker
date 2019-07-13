import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import 'typeface-roboto';

export default function Header() {

  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="h1">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}