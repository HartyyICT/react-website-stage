import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina11Styles.css'


const Pagina11 = () => {
  return (
    <Parallax bgImage={require('../../assets/heerlen.jpg')} strength={300}>
      <div name='pagina11' className='pagina11'>
        <div className="container">
          <div className="top">
          <h1>De stem van Heerlen</h1>
          <p>Empathie door data</p>
          </div>
        </div>
      </div>
    </Parallax>  
  );
};

export default Pagina11;
