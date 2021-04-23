import './style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
  }

  render() {
    return (
      <div>hi</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
