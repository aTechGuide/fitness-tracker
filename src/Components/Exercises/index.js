import React from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import {Delete, Edit} from '@material-ui/icons/';
import Form from "./Form";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
};

export default ({editMode, muscles, exercises, exercise, exercise: {id, title = 'Welcome!', description = 'Please select an exercise from the list on the left.'}, category, onSelect, onDelete, onSelectEdit, onEdit}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
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

    <Grid item sm>
      <Paper style={styles.Paper}>
        {editMode 
        ? <Form 
          exercise={exercise}
          muscles={muscles}
          onSubmit={onEdit} />
        : <React.Fragment>
          <Typography variant="h4" >
            {title}
          </Typography>
          <Typography variant="body1" style={{marginTop: 20}}>
            {description}
        </Typography>
        </React.Fragment> }
        
      </Paper>
    </Grid>
  </Grid>
);
