import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina10Styles.css'


const Pagina10 = () => {
  return (
    <Parallax bgImage={require('../../assets/sattelietheerlen.jpg')} strength={300}>
      <div name='pagina10' className='pagina10'>
        <div className="container">
          <div className="top">
            <p>Dit is een realiteit voor veel jongeren in Heerlen die proberen hun ambities waar te maken ondanks obstakels</p>
          </div>
        </div>
      </div>
    </Parallax>  
  );
};

export default Pagina10;
