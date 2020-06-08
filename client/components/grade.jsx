import React from 'react';

function Grade(props) {
  return (
    <tr key = {props.id}>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
    </tr>
  );
}

export default Grade;
