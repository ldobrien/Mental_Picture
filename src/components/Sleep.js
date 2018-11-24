import React, { Component } from 'react';
import BarGraph from "./BarGraph"

class Sleep extends Component {
    state ={
        data: [1, 2, 3, 4, 5, 6],
        height: 300,
        width: 700,
        color: "yellow"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Sleep;