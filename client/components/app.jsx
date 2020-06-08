/* eslint-disable no-console */
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('./api/grades')
      .then(res => res.json())
      .then(grades => {
        console.log(grades);
        this.setState({
          grades: grades
        });
      });
  }

  render() {
    return (
      <header>
        <h1>Student Grade Table</h1>
      </header>
    );
  }
}

export default App;
