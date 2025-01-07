import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina8Styles.css'


const Pagina8 = () => {
  return (
    <Parallax bgImage={require('../../assets/sattelietheerlen.jpg')} strength={300}>
      <div name='pagina8' className='pagina8'>
        <div className="container">
          <div className="top">
            <p>Dit is een realiteit voor veel jongeren in Heerlen die proberen hun ambities waar te maken ondanks obstakels</p>
          </div>
        </div>
      </div>
    </Parallax>  
  );
};

export default Pagina8;
