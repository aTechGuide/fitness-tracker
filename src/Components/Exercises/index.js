import React from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import {Delete, Edit} from '@material-ui/icons/';
import { withStyles } from '@material-ui/styles'
import Form from "./Form";

const styles = themes => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
  }
});

export default withStyles(styles)(({classes,editMode, muscles, exercises, exercise, exercise: {id, title = 'Welcome!', description = 'Please select an exercise from the list on the left.'}, category, onSelect, onDelete, onSelectEdit, onEdit}) => (
  <Grid container>
    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
        {exercises.map(([group, exercises]) => 

          !category || category === group 
          ?  <React.Fragment key={group}>
              <Typography variant="h4" style={{textTransform: 'capitalize'}}>
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
                      <IconButton onClick={() => onSelectEdit(id)} >
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)} >
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

    <Grid item xs={12} sm={6}>
      <Paper className={classes.Paper}>
        <Typography variant="h4" gutterBottom >
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
