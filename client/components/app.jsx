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
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  getAverageGrade() {
    if (this.state.grades.length > 0) {
      const gradesArray = this.state.grades.slice();
      const averageArr = [];
      gradesArray.map(grade => { averageArr.push(grade.grade); });
      const sum = averageArr.reduce((total, num) => { return total + num; });
      const average = sum / gradesArray.length;
      return average;
    }

  }

  render() {
    return (
      <div className="container">
        <Header props = {this.getAverageGrade()}/>
        <GradeTable props = {this.state.grades}/>
      </div>
    );
  }
}

export default App;
