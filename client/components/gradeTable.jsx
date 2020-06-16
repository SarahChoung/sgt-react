/* eslint-disable no-console */
import React from 'react';
import Grade from './grade';

function GradeTable(grades) {
  const gradeList = grades.grades;
  const gradeRows = gradeList.map(grade => {
    return (
      <Grade
        key = {grade.id}
        id = {grade.id}
        name = {grade.name}
        course = {grade.course}
        grade = {grade.grade}
        deleteGrade={grades.deleteGrade}
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
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {gradeRows}
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
