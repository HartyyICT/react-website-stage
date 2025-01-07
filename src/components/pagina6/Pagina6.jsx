import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import * as d3 from 'd3';
import './Pagina6Styles.css';

const Pagina6 = () => {
  const pieChartRef = useRef();

  useEffect(() => {
    // Data voor de taartgrafiek (verhouding werkervaring, connecties, etc.)
    const pieData = [20, 40, 30];  // Voorbeeldpercentages: Werkervaring 30%, Connecties 40%, Andere 30%

    const width = 600;
    const height = 600;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(pieChartRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background-color', 'rgba(255, 255, 255, 0)') // Dit maakt de achtergrond transparant
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

  return (
    <Parallax bgImage={require('../../assets/padennina.jpg')} strength={300}>
      <div name="end" className="end">
        <div className="container">
          <div className="top">
            <p>Nina maakt zich zorgen over haar toekomst in een concurrerende arbeidsmarkt</p>
          </div>
          <div className="top2">
            <p>Waar werkervaring en connecties doorslaggevend zijn</p>
          </div>
          <div className="chart-container">
            <svg ref={pieChartRef} className="piechart"></svg>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Pagina6;
