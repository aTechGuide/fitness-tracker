import React from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import Exercises from '../Exercises';
import {muscles, exercises} from '../../store';

class App extends React.Component {

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

  handleExerciseSelecte = (id) => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id  === id)
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
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  }

  render() {

    const exercises = this.getExercisesByMuscles();
    const {category, exercise} = this.state;

    return (
      <React.Fragment>
        <Header 
          muscles={muscles} 
          onExerciseCreate={this.handleExerciseCreate}/>

        <Exercises 
          exercises={exercises}
          exercise = {exercise}
          category={category}
          onSelect={this.handleExerciseSelecte} 
          onDelete={this.handleExerciseDelete}/>

        <Footer 
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelecte} />
      </React.Fragment>
    );
  }
  
}

export default App;
