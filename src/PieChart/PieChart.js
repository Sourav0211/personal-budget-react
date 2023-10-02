import React, { Component } from 'react';
import * as d3 from 'd3';

class PieChart extends Component {
    
  componentDidMount() {
    console.log("PieChart componentDidMount called");
    this.drawChart();
  }

  drawChart() {
    const data = [12, 50, 6, 6, 9, 10];

    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3.select("#" + this.props.id)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3.pie();

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = svg.selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));
  }
  

  render() {
    return <div id={this.props.id}></div>;
  }
}

export default PieChart;
