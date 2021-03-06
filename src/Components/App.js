import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Exercises from './Exercises';
import {muscles, exercises} from '../store';
import {Provider} from '../context';


class App extends React.Component {

  // State also have an `editMode` object field.
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    

    const initialExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    /**
     * exercises is the Accumulator
     * exercise is the current Exercise in question
     */
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise;

      exercises[muscles] = [...exercises[muscles], exercise]
      return exercises
    }, initialExercises))
  }

  handleCategorySelecte = (category) => {
    this.setState({
      category
    })
  }

  handleExerciseSelect = (id) => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id  === id),
      editMode: false,
    }))
  }

  handleExerciseCreate = (exercise) => {
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = (id) => {
    this.setState(({exercises, exercise, editMode}) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  }

  handleExerciseSelectEdit = id =>  {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id  === id)
    }))

    this.setState({
      editMode: true
    })
  }

  handleExerciseEdit = exercise => {
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }))
  }

  getContext = () => ({
    muscles,
    ...this.state
  })

  render() {

    const exercises = this.getExercisesByMuscles();
    const {category, exercise, editMode} = this.state;

    return (
      <Provider value={this.getContext()}>
        <React.Fragment>
          <CssBaseline />
          <Header 
            onExerciseCreate={this.handleExerciseCreate}/>

          <Exercises 
            exercises={exercises}
            exercise = {exercise}
            category={category}
            editMode={editMode}
            muscles={muscles}
            onSelect={this.handleExerciseSelect} 
            onDelete={this.handleExerciseDelete}
            onSelectEdit={this.handleExerciseSelectEdit}
            onEdit={this.handleExerciseEdit}/>

          <Footer 
            muscles={muscles}
            category={category}
            onSelect={this.handleCategorySelecte} />
        </React.Fragment>
      </Provider>
    );
  }
  
}

export default App;
