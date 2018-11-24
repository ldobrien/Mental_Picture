import React, { Component } from 'react';
import Mood from './components/Mood';
import Sleep from './components/Sleep';
import Diet from './components/Diet';
import Activity from './components/Activity';
import { VictoryContainer } from 'victory'



class App extends Component {
  render() {
    return (
      
      <div>
      <head >
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </ link>
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
        </ link>
      </ head>

      <div className="App">
      <nav>
    <div class="nav-wrapper green darken-4">
      <a href="#" class="brand-logo center">Mental Picture</a>
    </div>
  </nav>

      <div class="card-panel yellow lighten-4">
        <div class="row">
        <div class="col s12 m6">
        <div class="card-panel blue lighten-5">
        <Mood />
        </div>
        </div>
        <div class="col s12 m6">
        <div class="card-panel blue lighten-5">
        <Sleep />
        </div>
        </div>
        </div>

     
        <div class="row">
          <div class="col s12 m6">
          <div class="card-panel blue lighten-5">
            <Diet/>
          </ div>
          </div>
          <div class="col s12 m6">
          <div class="card-panel blue lighten-5">
            <Activity/>
          </ div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
