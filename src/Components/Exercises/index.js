import React from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import {Delete, Edit} from '@material-ui/icons/';
import { withStyles } from '@material-ui/styles'
import Form from "./Form";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: 5,
      height: 'calc(100% - 10px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      height: '50%'
    }
  }
})

export default withStyles(styles)(({classes,editMode, muscles, exercises, exercise, exercise: {id, title = 'Welcome!', description = 'Please select an exercise from the list on the left.'}, category, onSelect, onDelete, onSelectEdit, onEdit}) => (
  <Grid container className={classes.container}>
    <Grid className={classes.item} item xs={12} sm={6}>
      <Paper className={classes.paper}>
        {exercises.map(([group, exercises]) => 

          !category || category === group 
          ?  <React.Fragment key={group}>
              <Typography variant="h4" color='secondary' style={{textTransform: 'capitalize'}}>
                {group}
              </Typography>

              <List component="ul">
                {exercises.map( ({id, title}) => 
                    <ListItem 
                      key={id}
                      button 
                      onClick={() => onSelect(id)} >
                      
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                      <IconButton color='primary' onClick={() => onSelectEdit(id)} >
                          <Edit />
                        </IconButton>
                        <IconButton color='primary' onClick={() => onDelete(id)} >
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>

                    </ListItem>
                  )}
              </List>
            </React.Fragment>
          : null
   
        )}
      </Paper>
    </Grid>

    <Grid className={classes.item} item xs={12} sm={6}>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom color='secondary' >
          {title}
        </Typography>
        {editMode 
        ? <Form 
          key={id}
          exercise={exercise}
          muscles={muscles}
          onSubmit={onEdit} />
        : 
          <Typography variant="body1" >
            {description}
          </Typography>
         }
        
      </Paper>
    </Grid>
  </Grid>
));
