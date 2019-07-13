import React from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import Exercises from '../Exercises';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>Fitness Tracker</h1>
        <Header />

        <Exercises />

        <Footer />
      </React.Fragment>
    );
  }
  
}

export default App;
