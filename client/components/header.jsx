import React from 'react';

function Header(average) {
  return (
    <header className = "d-flex justify-content-between align-items-end">
      <h1>Student Grade Table</h1>
      <h3>Average Grade <span className = "badge badge-secondary">{average.props}</span></h3>
    </header>
  );
}
export default Header;
