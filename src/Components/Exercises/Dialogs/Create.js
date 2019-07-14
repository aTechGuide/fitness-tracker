import React from 'react';
import {Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button, Fab, TextField} from '@material-ui/core/';
import {FormControl,FormHelperText, InputLabel, MenuItem, Select} from '@material-ui/core/';
import {Add} from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  FormControl: {
    width: 500
  }
})

export default withStyles(styles)(class extends React.Component {

  state = {
    open: false, 
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => event => {
    this.setState({
      exercise: {
        ...this.state.exercise,
      [name]: event.target.value
      }
    })
  };
  
  handleSubmit = () => {
    // Validation

    const {exercise} = this.state
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    })

    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })
  }

  render() {

    const {open, exercise: {title, description, muscles}} = this.state
    const {muscles: categories, classes} = this.props

    return (
      <React.Fragment>
        <Fab color="primary" onClick={this.handleToggle} >
          <Add />
        </Fab>
  
        <Dialog open={open} onClose={this.handleToggle} >
            <DialogTitle id="form-dialog-title">
              Create a New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form Below
              </DialogContentText>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                className={classes.FormControl}
              />
              <br />
              <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select
                  value={muscles}
                  onChange={this.handleChange('muscles')}  
                >
                {categories.map(category => 
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                  )}
                  
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
              </FormControl>
              <br />
              <TextField
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
                multiline
                rows="4"
                className={classes.FormControl}
              />
            </DialogContent>
            <DialogActions>
              <Button color="primary" variant="outlined" onClick={this.handleSubmit}>
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
    ); 
  }
})