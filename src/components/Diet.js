import React, { Component } from 'react';
import BarGraph from "./BarGraph"

class Diet extends Component {
    state ={
        data: [
            {x: new Date(2015, 2, 1), y: 125},
            {x: new Date(2015, 3, 2), y: 257},
            {x: new Date(2015, 4, 3), y: 345},
            {x: new Date(2015, 5, 4), y: 515},
            {x: new Date(2015, 6, 5), y: 132},
            {x: new Date(2015, 6, 6), y: 305},
            {x: new Date(2015, 6, 7), y: 270},
            {x: new Date(2015, 6, 8), y: 470}
          ],
        height: 300,
        width: 700,
        title: "Diet",
        yAxis: "Calories",
        xAxis: "Date"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Diet;