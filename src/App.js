import React, { Component } from 'react';
import Mood from './components/Mood';
import Sleep from './components/Sleep';
import Diet from './components/Diet';
import Activity from './components/Activity';
import { VictoryContainer } from 'victory'



class App extends Component {

  state = {
    data: [],
  }

  componentDidMount(){
    fetch("https://kajoban.lib.id/twilio-hub@dev/readData/")
    .then((result) => result.json())
    .then(result => 
        this.setState({
            data: result
        })
    )
      
  }

  render() {
    if(this.state.data.length === 0){
      return <div></div>
    }
    const mood = [];
    const sleep = [];
    const diet = [];
    const activity = [];
    for(var elem of this.state.data){
      mood.push({x: elem.date, y: elem.mood});
      sleep.push({x: elem.date, y: elem.sleep});
      diet.push({x: elem.date, y: elem.diet});
      activity.push({x: elem.date, y: elem.exercise});
    }

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
        <Mood data={mood}/>
        </div>
        </div>
        <div class="col s12 m6">
        <div class="card-panel blue lighten-5">
        <Sleep data={sleep}/>
        </div>
        </div>
        </div>

     
        <div class="row">
          <div class="col s12 m6">
          <div class="card-panel blue lighten-5">
            <Diet data={diet}/>
          </ div>
          </div>
          <div class="col s12 m6">
          <div class="card-panel blue lighten-5">
            <Activity data={activity}/>
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
