import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryZoomContainer, VictoryBrushContainer, VictoryLabel } from 'victory';

class BarGraph extends Component {
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
        const input = this.props.input;
        const data = input.data;
        return(
            <div>
            <VictoryChart width={600} height={350} domainPadding={20} theme={VictoryTheme.material}
                containerComponent={
                    <VictoryZoomContainer responsive={false}
                    zoomDimension="x"
                    zoomDomain={this.state.zoomDomain}
                    onZoomDomainChange={this.handleZoom.bind(this)} />
                }
            >
            <VictoryLabel text="Title" style ={{ fontSize: 30}} x={300} y={30} textAnchor="middle"/>
            <VictoryBar style={{ data: { fill: "green" } }} data={data} x="x" y="y"/>
            <VictoryAxis label="x-axis" style={{ axisLabel: {padding: 30}}}/>
            <VictoryAxis dependentAxis label="y-axis" style={{ axisLabel: {padding: 40}}}/>
            </VictoryChart>

            {/* <VictoryChart
                padding={{top: 0, left: 50, right: 50, bottom: 30}}
                width={600} height={90} 
                containerComponent={
                <VictoryBrushContainer responsive={false}
                    brushDimension="x"
                    brushDomain={this.state.selectedDomain}
                    onBrushDomainChange={this.handleBrush.bind(this)}
                />
                }
            >
            <VictoryAxis
            label="Label"
              tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
              tickFormat={[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
            />
            <VictoryBar data={data} x="x" y="y"/>
          </VictoryChart> */}
          </div>
        )
    }
}

export default BarGraph;