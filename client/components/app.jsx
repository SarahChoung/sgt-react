/* eslint-disable no-console */
import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    fetch('./api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({
          grades: grades
        });
      })
      .catch(err => console.err(err.message));
  }

  getAverageGrade() {
    if (this.state.grades.length > 0) {
      const gradesArray = this.state.grades;
      const indivGrades = gradesArray.map(grade => grade.grade);
      const total = indivGrades.reduce((total, value) => total + value);
      return Math.round(total / gradesArray.length);
    } else return this.state.grades[0];
  }

  addNewGrade(newGrade) {
    event.preventDefault();
    fetch('./api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(res => res.json())
      .then(grade => {
        const allGrades = this.state.grades.concat(grade);
        this.setState({ grades: allGrades });
      })
      .catch(err => console.err(err.message));
  }

  deleteGrade(targetGrade) {
    fetch(`./api/grades/${targetGrade}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(grades => {
        const allGrades = this.state.grades.slice();
        const newGrades = [];
        for (let i = 0; i < allGrades.length; i++) {
          if (allGrades[i].id !== targetGrade) {
            newGrades.push(allGrades[i]);
          }
        }
        this.setState({ grades: newGrades });
      });
  }

  render() {
    return (
      <div className="container">
        <Header props = {this.getAverageGrade()}/>
        <div className="row">
          <GradeTable grades = {this.state.grades} deleteGrade = {this.deleteGrade}/>
          <GradeForm addNewGrade = {this.addNewGrade}/>
        </div>
      </div>
    );
  }
}

export default App;
