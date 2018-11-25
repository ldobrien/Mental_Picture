import React, { Component } from 'react';
import BarGraph from "./BarGraph"

class Sleep extends Component {
    state ={
        data: this.props.data,
        height: 300,
        width: 700,
        title: "Sleep",
        yAxis: "Hours",
        xAxis: "Date"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Sleep;