import React, { Component } from 'react';
import BarGraph from "./BarGraph"

class Diet extends Component {
    state ={
        data: [11, 12, 13, 14, 15, 6],
        height: 300,
        width: 700,
        color: "green"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Diet;