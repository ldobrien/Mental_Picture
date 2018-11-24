import React, { Component } from 'react';
import * as d3 from 'd3';
import BarGraph from "./BarGraph";

class Activity extends Component {
    state ={
        data: [
            {x: 1, y: 2},
            {x: 2, y: 3},
            {x: 3, y: 1},
            {x: 4, y: 4},
            {x: 5, y: 4},
            {x: 6, y: 4},
            {x: 7, y: 4},
            {x: 8, y: 4},
            {x: 9, y: 4},
            {x: 10, y: 4},
            {x: 11, y: 40}
          ],
        height: 300,
        width: 700,
        color: "blue"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Activity;