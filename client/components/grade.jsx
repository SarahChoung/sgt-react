import React from 'react';

function Grade(props) {
  return (
    <tr key = {props.id}>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td><button
        onClick={() => { props.deleteGrade(props.id); }}
        className="btn btn-danger">
        Delete</button></td>
    </tr>
  );
}

export default Grade;
