import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import 'typeface-roboto';
import Dialog from '../Exercises/Dialog';
import { withStyles } from '@material-ui/styles'

const styles = {
  flex: {
    flex: 1
  }
}

export default withStyles(styles)(({classes, onExerciseCreate}) => {

  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="h1" className={classes.flex}>
            Exercise Database
          </Typography>
          <Dialog onCreate={onExerciseCreate}/>
        </Toolbar>
      </AppBar>
    </div>
  );
})