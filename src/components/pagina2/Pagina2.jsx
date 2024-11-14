import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina2Styles.css'


const Pagina2 = () => {
  return (
    <Parallax bgImage={require('../../assets/ingang.jpg')} strength={300}>
      <div name='pagina2' className='pagina2'>
        <div className="container">
          <div className="top">
            <h1>De stem van Heerlen</h1>
            <p>Empathie door data</p>
          </div>
          <div className="bottom">
            <button className="btn btn-dark">Scrollytelling</button>
          </div>
        </div>
      </div>
    </Parallax>  
  );
};

export default Pagina2;
