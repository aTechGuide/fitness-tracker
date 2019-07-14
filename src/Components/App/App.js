import React from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import Exercises from '../Exercises';
import {muscles, exercises} from '../../store';

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
    this.setState(({exercises}) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      exercise: {}
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

  render() {

    const exercises = this.getExercisesByMuscles();
    const {category, exercise, editMode} = this.state;

    return (
      <React.Fragment>
        <Header 
          muscles={muscles} 
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
    );
  }
  
}

export default App;
