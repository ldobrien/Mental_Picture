import React, { Component } from 'react';
import Mood from './components/Mood';
import Sleep from './components/Sleep';
import Diet from './components/Diet';
import Activity from './components/Activity';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header center green">
          WACK HESTERN
          <Mood />
          <Sleep />
          <Diet />
          <Activity />

        </header>
      </div>
    );
  }
}

export default App;
