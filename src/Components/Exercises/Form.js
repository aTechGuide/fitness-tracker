import React from 'react';
import {FormControl,FormHelperText, InputLabel, MenuItem, Select, TextField, Button} from '@material-ui/core/';

/**
 * This component is maintaining its state based on the props that it is receiving
 */
export default class extends React.Component {

  state = this.getInitialState()

  getInitialState() {
    const {exercise} = this.props;

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  };
  
  handleSubmit = () => {
    // Validation

    // We are setting id first because in case of Edit we already have an `id` so this `id` will be over ridded.
    this.props.onSubmit({
      id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
      ...this.state
    })
  }

  render() {

    const {title, description, muscles} = this.state;
    const {muscles: categories, exercise} = this.props

    return (
      <React.Fragment>
        <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                fullWidth
              />
              <br />
              <FormControl fullWidth >
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
                fullWidth
              />
              <br/>
              <Button 
                color="primary" 
                variant="outlined" 
                onClick={this.handleSubmit}
                disabled={!title || !muscles } >
                {exercise ? 'Edit' : 'Create'}
              </Button>
      </React.Fragment>
    );
  }
}