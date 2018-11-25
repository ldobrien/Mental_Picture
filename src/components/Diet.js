import React, { Component } from 'react';
import BarGraph from "./BarGraph"

class Diet extends Component {
    state ={
        data: this.props.data,
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