import React, { Component } from 'react';
import * as d3 from 'd3';
import BarGraph from "./BarGraph";

class Activity extends Component {
    state ={
        data: [
            {x: new Date(2015, 1, 1), y: 125},
            {x: new Date(2015, 1, 2), y: 257},
            {x: new Date(2015, 1, 3), y: 345},
            {x: new Date(2015, 1, 5), y: 515},
            {x: new Date(2015, 1, 6), y: 132},
            {x: new Date(2015, 1, 8), y: 305},
            {x: new Date(2015, 1, 9), y: 270},
            {x: new Date(2015, 1, 10), y: 470}
          ],
        height: 300,
        width: 700,
        title: "Activity",
        yAxis: "Hours",
        xAxis: "Date"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Activity;