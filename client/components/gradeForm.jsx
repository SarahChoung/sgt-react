import React from 'react';

function GradeForm() {
  return (
    <form className="col form-group d-flex flex-column">
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
          placeholder="Name" />
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
          placeholder="Course" />
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
          placeholder="Grade" />
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-secondary">Add</button>
        <button type="reset" className="btn btn-danger ml-1">Cancel</button>
      </div>

    </form>
  );
}

export default GradeForm;
