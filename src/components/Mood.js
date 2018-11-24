import React, { Component } from 'react';
// import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
// import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar , VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis } from 'victory';

class Mood extends Component {
    state = {

    }
    // state ={
    //     data: [12, 5, 6, 6, 9, 10],
    //     height: 300,
    //     width: 700,
    //     color: "pink"
    // }

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
        return(
            <div>
          <VictoryChart width={600} height={350} scale={{x: "time"}}
            containerComponent={
              <VictoryZoomContainer responsive={false}
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryLine
              style={{
                data: {stroke: "green"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />

          </VictoryChart>

          <VictoryChart
            padding={{top: 0, left: 50, right: 50, bottom: 30}}
            width={600} height={90} scale={{x: "time"}}
            containerComponent={
              <VictoryBrushContainer responsive={false}
                brushDimension="x"
                brushDomain={this.state.selectedDomain}
                onBrushDomainChange={this.handleBrush.bind(this)}
              />
            }
          >
            <VictoryAxis
              tickValues={[
                new Date(1985, 1, 1),
                new Date(1990, 1, 1),
                new Date(1995, 1, 1),
                new Date(2000, 1, 1),
                new Date(2005, 1, 1),
                new Date(2010, 1, 1)
              ]}
              tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
              style={{
                data: {stroke: "green"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />
          </VictoryChart>
      </div>
        )
    }

}

export default Mood;