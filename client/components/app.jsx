/* eslint-disable no-console */
import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

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
        this.setState({
          grades: grades
        });
      });
  }

  render() {
    return (
      <div>
        <Header/>
        <GradeTable props = {this.state.grades}/>
      </div>
    );
  }
}

export default App;
