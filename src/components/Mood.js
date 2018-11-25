import React, { Component } from 'react';
// import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
// import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar , VictoryChart, VictoryZoomContainer, VictoryLine, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory';

class Mood extends Component {
    state = {

    }

    handleZoom(domain) {
        this.setState({
            selectedDomain: domain
        });
    }
    
    handleBrush(domain) {
        this.setState({
            zoomDomain: domain
        });
    }

    render(){
        const data = [
            {x: new Date(1982, 1, 1), y: 125},
            {x: new Date(1987, 1, 1), y: 257},
            {x: new Date(1993, 1, 1), y: 345},
            {x: new Date(1997, 1, 1), y: 515},
            {x: new Date(2001, 1, 1), y: 132},
            {x: new Date(2005, 1, 1), y: 305},
            {x: new Date(2011, 1, 1), y: 270},
            {x: new Date(2015, 1, 1), y: 470}
          ]
        return(
            <div>
          <VictoryChart width={600} height={350} scale={{x: "time"}} theme={VictoryTheme.material}
            containerComponent={
              <VictoryZoomContainer responsive={false}
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryLabel text="Mood" x={300} y={30} textAnchor="middle"/>
            <VictoryAxis label="Date" style={{ axisLabel: {padding: 30}}}/>
            <VictoryAxis dependentAxis label="Rating" style={{ axisLabel: {padding: 40}}}/>
            <VictoryLine
              style={{
                data: {stroke: "green"}
              }}
              data={data}
            />

          </VictoryChart>
      </div>
        )
    }

}

export default Mood;