/* eslint-disable no-console */
import React from 'react';
import Grade from './grade';

function GradeTable(grades) {
  const gradeList = grades.props;
  const GradeRows = gradeList.map(grade => {
    return (
      <Grade
        key = {grade.id}
        name = {grade.name}
        course = {grade.course}
        grade = {grade.grade}
      />
    );
  });

  return (
    <div className = "col-8">
      <table className="table table-striped table-bordered">
        <thead className = 'thead-dark'>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {GradeRows}
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
