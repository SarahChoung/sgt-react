/* eslint-disable no-console */
import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('./api/grades')
      .then(res => res.json())
      .then(grades => {
        console.log(grades);
        this.setState({
          grades: grades
        });
      });
  }

  render() {
    return (
      <Header/>
    );
  }
}

export default App;
