import React, { Component } from 'react';
import Mood from './components/Mood';
import Sleep from './components/Sleep';
import Diet from './components/Diet';
import Activity from './components/Activity';
import { VictoryContainer } from 'victory'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header center green">
          WACK HESTERN
        </header>
        <div class="row">
        <div class="col s12 m6">
        <Mood />
        </div>
        <div class="col s12 m6">
        <Sleep />
        </div>
        </div>

        <div class="row">
          <div class="col s12 m6">
            <Diet/>
          </div>
          <div class="col s12 m6">
            <Activity/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
