import React, { Component } from 'react';
import * as d3 from 'd3';

class BarGraph extends Component {
    componentDidMount() {
        this.drawChart();
      }

    drawChart () {
        const input = this.props.input;
        const data = input.data;
        const svg = d3.select("body").append("svg").attr("width", input.width).attr("height", input.height);
                
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => input.height - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 20)
            .attr("fill", input.color)


        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70 + 25)
            .attr("y", (d, i) => input.height - (10 * d) - 3)
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default BarGraph;