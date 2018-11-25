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
            <VictoryChart width={600} height={350} domainPadding={20} theme={VictoryTheme.material} scale={{x: "time"}}
                containerComponent={
                    <VictoryZoomContainer responsive={false}
                    zoomDimension="x"
                    zoomDomain={this.state.zoomDomain}
                    onZoomDomainChange={this.handleZoom.bind(this)} />
                }
            >
            <VictoryLabel text={input.title} style ={{ fontSize: 30}} x={300} y={10} textAnchor="middle"/>

            <VictoryBar style={{ data: { fill: "green" } }} data={data} x="x" y="y"/>
<<<<<<< HEAD
            <VictoryAxis label={input.xAxis} style={{ axisLabel: {padding: 30}}} fixLabelOverlap/>
            <VictoryAxis dependentAxis label={input.yAxis} style={{ axisLabel: {padding: 40}}}/>
=======
            <VictoryAxis label={input.xAxis} style ={{ fontSize: 25}} style={{ axisLabel: { fontSize: 15, padding: 35}}}/>
            <VictoryAxis dependentAxis label={input.yAxis} style={{ axisLabel: {fontSize: 15, padding: 35}}}/>
>>>>>>> 9dd761ac340bbd57753858e9a0b840c303b0187c
            </VictoryChart>
          </div>
        )
    }
}

export default BarGraph;