import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  render() {
    return (
      <header>
        <h1>Student Grade Table</h1>
      </header>
    );
  }
}

export default App;
