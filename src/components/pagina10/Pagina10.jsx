import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina10Styles.css'


const Pagina10 = () => {
  return (
        <Parallax bgImage={require('../../assets/sattelietheerlen.jpg')} strength={300}>
          <div name='pagina10' className='pagina10'>
            <div className="container">
              <div className="top">
                <p>
                De totale studieschuld van huidige en oud-studenten was begin 2024 opgelopen tot 29 miljard euro. 
                Dat is 1 miljard euro meer dan vorig jaar en ruim twee keer zoveel als voor de invoering van het leenstelsel in 2015.</p>
              </div>
              {/* Add the image below */}
              <div className="image3">
                <img src={require('../../assets/totaleschuld.jpg')} alt="Jongeren in Heerlen" />
              </div>
            </div>
          </div>
        </Parallax>  
      );
    };
  
  export default Pagina10;
