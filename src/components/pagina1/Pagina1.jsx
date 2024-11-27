import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Parallax } from 'react-parallax';
import './Pagina1Styles.css';

const Pagina1 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { x: 1, y: 2 },
      { x: 2, y: 5 },
      { x: 3, y: 3 },
      { x: 4, y: 7 },
      { x: 5, y: 4 },
      { x: 6, y: 6 },
    ];

    const svg = d3.select(svgRef.current)
      .attr('width', 500)
      .attr('height', 300);

    const xScale = d3.scaleLinear()
      .domain([1, d3.max(data, d => d.x)])
      .range([0, 500]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([300, 0]);

    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveMonotoneX);

    svg.selectAll('*').remove(); // Verwijder bestaande elementen

    svg.append('path')
      .datum(data)
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

  return (
    <Parallax bgImage={require('../../assets/start.jpg')} strength={300}>
      <div name='pagina1' className='pagina1'>
        <div className="container">
          <div className="top">
            <h1> Scroll en ontdek het verhaal van Nina </h1>
          </div>
          <div className="bottom">
            <button className="btn btn-dark">Scrollytelling</button>
          </div>
          <svg ref={svgRef}></svg>
        </div>
      </div>
    </Parallax>
  );
}

export default Pagina1;
