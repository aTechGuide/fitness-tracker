import React from 'react';
import {Dialog, DialogContent, DialogTitle, DialogContentText, Fab} from '@material-ui/core/';
import {Add} from '@material-ui/icons/';
import Form from './Form';

export default class extends React.Component {

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFromSubmit = (exercise) => {
    this.handleToggle()
    this.props.onCreate(exercise)
  }

  render() {

    const {open} = this.state,
          {muscles} = this.props

    return (
      <React.Fragment>
        <Fab color="primary" onClick={this.handleToggle} >
          <Add />
        </Fab>
  
        <Dialog open={open} onClose={this.handleToggle} fullWidth maxWidth="xs" >
            <DialogTitle>
              Create a New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form Below
              </DialogContentText>
              <Form 
                muscles={muscles}
                onSubmit={this.handleFromSubmit}
                 />
            </DialogContent>
          </Dialog>
        </React.Fragment>
    ); 
  }
}