import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Parallax } from 'react-parallax';
import './Pagina1Styles.css';

const Pagina1 = () => {
  
  return (
    <Parallax bgImage={require('../../assets/Pagina1afbeelding.jpg')} strength={300}>
      <div name='pagina1' className='pagina1'>
        <div className="container">
          <div className="top">
            <h1> Scroll en ontdek het verhaal van Nina </h1>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default Pagina1;
