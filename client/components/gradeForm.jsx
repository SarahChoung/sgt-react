/* eslint-disable no-console */
import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewGrade(
      {
        name: this.state.name,
        course: this.state.course,
        grade: Number(this.state.grade)
      }
    );
    this.setState({
      name: '',
      course: '',
      grade: 0
    });
  }

  handleReset(event) {
    this.setState({
      name: '',
      course: '',
      grade: 0
    });
  }

  render() {
    return (
      <form
        className="col form-group d-flex flex-column"
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="name">
              <i className="fas fa-users"></i>
            </label>
          </div>
          <input
            className="flex-grow-1"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={this.handleChange} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="course">
              <i className="fas fa-digital-tachograph"></i>
            </label>
          </div>
          <input
            className="flex-grow-1"
            type="text"
            name="course"
            id="course"
            placeholder="Course"
            onChange={this.handleChange} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="grade">
              <i className="fas fa-graduation-cap"></i>
            </label>
          </div>
          <input
            className="flex-grow-1"
            type="text"
            name="grade"
            id="grade"
            placeholder="Grade"
            onChange={this.handleChange} />
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-secondary">Add</button>
          <button type="reset" className="btn btn-danger ml-1">Cancel</button>
        </div>
      </form>
    );
  }

}

export default GradeForm;
