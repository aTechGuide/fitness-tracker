import React from 'react';
import {Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button, Fab} from '@material-ui/core/';
import {Add} from '@material-ui/icons/';

class Create extends React.Component {

  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {

    const {open} = this.state

    return (
      <React.Fragment>
        {/* <Button variant="fab"  mini>
          <Add />
        </Button> */}
        <Fab color="primary" onClick={this.handleToggle} mini >
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
            </DialogContent>
            <DialogActions>
              <Button color="primary" variant="outlined" >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
    ); 
  }
}

export default Create;