import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import 'typeface-roboto';
import Dialog from '../Exercises/Dialog';

export default ({muscles, onExerciseCreate}) => {

  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="h1" style={{flex: 1}}>
            Exercise Database
          </Typography>
          <Dialog muscles={muscles} onCreate={onExerciseCreate}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}