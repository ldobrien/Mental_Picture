import React, { Component } from 'react';
import * as d3 from 'd3';
import BarGraph from "./BarGraph";

class Activity extends Component {
    state ={
        data: [11, 12, 13, 14, 15, 6],
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