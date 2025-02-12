import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Parallax } from 'react-parallax';
import './Pagina6Styles.css';

const Pagina6 = () => {
  const pieChartRef = useRef();
  const barChartRef = useRef();

  useEffect(() => {
    // Data voor de taartgrafiek: Invloed van werkervaring, connecties en andere factoren
    const pieData = [
      { label: 'Werkervaring', value: 50 },
      { label: 'Connecties', value: 35 },
      { label: 'Andere factoren', value: 15 },
    ];

    const width = 600;
    const height = 600;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(pieChartRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)  // Voeg viewBox toe voor responsiviteit
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);
      

      const color = d3.scaleOrdinal()
      .domain(pieData.map(d => d.label))
      .range(['#00a6ff', '#7bd1ff', '#c7ecff']);

    const pie = d3.pie().value(d => d.value);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    svg.selectAll('*').remove(); // Verwijder bestaande elementen

    svg.selectAll('path')
      .data(pie(pieData))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.label))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    svg.selectAll('text')
      .data(pie(pieData))
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text(d => d.data.label)
      .style('font-size', '40px');
  }, []);

  useEffect(() => {
    // Data voor de staafgrafiek: Studentenuitgaven
    const barData = [
      { category: 'Huur', value: 600 },
      { category: 'Boodschappen', value: 150 },
      { category: 'Studieboeken', value: 100 },
      { category: 'Vervoer', value: 80 },
      { category: 'Overig', value: 70 },
    ];
  
    const width = 800; // Verklein de breedte van de grafiek
const height = 300; // Verklein de hoogte van de grafiek
const margin = { top: 20, right: 30, bottom: 40, left: 50 }; // Pas de margin aan om de grafiek meer compact te maken

const svg = d3.select(barChartRef.current)
  .attr('width', '100%')
  .attr('height', '100%')
  .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

const xScale = d3.scaleBand()
  .domain(barData.map(d => d.category))
  .range([0, width])
  .padding(0.1); // De padding bepaalt de afstand tussen de staven, kun je aanpassen voor kleinere staven

const yScale = d3.scaleLinear()
  .domain([0, d3.max(barData, d => d.value)])
  .range([height, 0]);

svg.selectAll('*').remove(); // Verwijder bestaande elementen

// Voeg de staven toe met kleinere breedte en hoogte
svg.selectAll('.bar')
  .data(barData)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', d => xScale(d.category))
  .attr('y', d => yScale(d.value))
  .attr('width', xScale.bandwidth()) // De breedte van de staven wordt aangepast op basis van de schaal
  .attr('height', d => height - yScale(d.value)) // De hoogte van de staven wordt kleiner
  .attr('fill', 'teal');

// Voeg de x-as toe
svg.append('g')
  .attr('transform', `translate(0,${height})`)
  .call(d3.axisBottom(xScale))
  .selectAll('text')
  .attr('transform', 'rotate(-40)')
  .style('text-anchor', 'end');

// Voeg de y-as toe
svg.append('g')
  .call(d3.axisLeft(yScale));

// Kleur en rand voor de X-as labels
svg.selectAll('text')
  .style('font-size', '20px')  // Verklein de font-size van de X-as labels
  .style('fill', 'white')      // Kleur van de tekst
  .style('stroke', 'black')    // Zwarte rand toevoegen
  .style('stroke-width', '1px'); // Dikte van de rand (kan aangepast worden)

// Kleur en rand voor de Y-as labels
svg.selectAll('.y-axis text')
  .style('font-size', '12px')  // Verklein de font-size van de Y-as labels
  .style('fill', 'white')      // Kleur van de tekst
  .style('stroke', 'black')    // Zwarte rand toevoegen
  .style('stroke-width', '1px'); // Dikte van de rand (kan aangepast worden)

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
            <svg ref={barChartRef} className="barchart"></svg>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Pagina6;
