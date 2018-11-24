import React, { Component } from 'react';
import BarGraph from './BarGraph';

class Mood extends Component {
    state ={
        data: [12, 5, 6, 6, 9, 10],
        height: 300,
        width: 700,
        color: "pink"
    }

    render(){
        return(
            <BarGraph input={this.state}/>
        )
    }

}

export default Mood;