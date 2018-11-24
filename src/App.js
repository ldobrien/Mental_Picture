import React, { Component } from 'react';
import Mood from './components/Mood';
import Sleep from './components/Sleep';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header center green">
          WACK HESTERN
          <Mood />
          <Sleep />
        </header>
      </div>
    );
  }
}

export default App;
