import React, { Component } from 'react';
import * as d3 from 'd3';

class Mood extends Component {
    state ={
        data: []
    }

    componentDidMount(){
        this.drawChart();
    }

    drawChart() {
  
        const data = [12, 5, 6, 6, 9, 10];
          
        const svg = d3.select("body").append("svg").attr("width", 700).attr("height", 300);
                  
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            // // .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "pink")
      }

    render(){
        return(
            <div>
                
            </div>
        )
    }

}

export default Mood;