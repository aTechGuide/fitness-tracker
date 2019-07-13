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
    /**
     * exercises is the Accumulator
     * exercise is the current Exercise in question
     */
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise;

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
      return exercises
    }, {}))
  }

  handleCategorySelected = (category) => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = (id) => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id  === id)
    }))
  }

  render() {

    const exercises = this.getExercisesByMuscles();
    const {category, exercise} = this.state;

    return (
      <React.Fragment>
        <Header />

        <Exercises 
          exercises={exercises}
          exercise = {exercise}
          category={category}
          onSelect={this.handleExerciseSelected} />

        <Footer 
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelected} />
      </React.Fragment>
    );
  }
  
}

export default App;
