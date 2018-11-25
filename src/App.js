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
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection">
        </link>
      
      </ head>
      <body>
      <div className="App">
      <nav>
    <div class="nav-wrapper green darken-4">
      <a href="#" class="brand-logo center">MENTAL PICTURE</a>
    </div>
  </nav>
      
  {/* <ul id="slide-out" class="sidenav sidenav-fixed yellow lighten-4 padding-left: 300px">
    
    <li><a href="#"><i class="material-icons">home</i>Dashboard</a></li>
    <li><a href="#contacts"><i class="material-icons">contact_phone</i>Contacts</a></li>
    <li><a href="#notes"><i class="material-icons">create</i>Notes</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}

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
      </body>
      </div>
    );
  }
}

export default App;
