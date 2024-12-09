import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Parallax } from 'react-parallax';
import './TestStyles.css';

const Test = () => {
  const lineChartRef = useRef();
  const pieChartRef = useRef();
  const barChartRef = useRef();

  useEffect(() => {
    // Data voor de lijn grafiek hardcoded
    const lineData = [
      { x: 1, y: 2 },
      { x: 2, y: 5 },
      { x: 3, y: 3 },
      { x: 4, y: 7 },
      { x: 5, y: 4 },
      { x: 6, y: 6 },
    ];

    const svg = d3.select(lineChartRef.current)
      .attr('width', 500)
      .attr('height', 300);

    const xScale = d3.scaleLinear()
      .domain([1, d3.max(lineData, d => d.x)])
      .range([0, 500]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(lineData, d => d.y)])
      .range([300, 0]);

    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveMonotoneX);

    svg.selectAll('*').remove(); // Verwijder bestaande elementen

    svg.append('path')
      .datum(lineData)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    svg.append('g')
      .attr('transform', 'translate(0,300)')
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .call(d3.axisLeft(yScale));

  }, []);

  useEffect(() => {
    // Data voor de pie chart
    const pieData = [10, 20, 30, 40]; 

    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(pieChartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal()
      .domain(pieData)
      .range(d3.schemeCategory10);

    const pie = d3.pie();
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    svg.selectAll('*').remove(); // Verwijder bestaande elementen

    svg.selectAll('path')
      .data(pie(pieData))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.index))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');
  }, []);

  useEffect(() => {
    // Data voor de staafdiagram
    const barData = [12, 25, 8, 15, 20, 10];
  
    const width = 300;
    const height = 200;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  
    const svg = d3.select(barChartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
    const xScale = d3.scaleBand()
      .domain(barData.map((_, i) => i))
      .range([0, width])
      .padding(0.1);
  
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(barData)])
      .range([height, 0]);
  
    svg.selectAll('*').remove(); // Verwijder bestaande elementen
  
    // Voeg staven toe
    svg.selectAll('.bar')
      .data(barData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (_, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d))
      .attr('fill', 'teal');
  
    // Voeg de x-as toe
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickFormat(i => `Cat ${i + 1}`));
  
    // Voeg de y-as toe
    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, []);
  

  return (
    <Parallax bgImage={require('../../assets/start.jpg')} strength={300}>
      
      <div name='test' className='test'>
      <div className="container">
          <svg ref={lineChartRef} className='linechart'></svg>
          <svg ref={pieChartRef} className='piechart'></svg>
          <svg ref={barChartRef} className='barchart'></svg>
        </div>
      </div>
    </Parallax>
  );
}

export default Test;
