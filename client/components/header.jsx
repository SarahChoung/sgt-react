import React from 'react';

function Header(average) {
  return (
    <header>
      <h1>Student Grade Table</h1>
      <h3>Average Grade <span>{average.props}</span></h3>
    </header>
  );
}
export default Header;
