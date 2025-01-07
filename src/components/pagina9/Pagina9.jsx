import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina9Styles.css'


const Pagina9 = () => {
  return (
    <Parallax bgImage={require('../../assets/sattelietheerlen.jpg')} strength={300}>
      <div name='pagina9' className='pagina9'>
        <div className="container">
          <div className="top">
            <p>Dit is een realiteit voor veel jongeren in Heerlen die proberen hun ambities waar te maken ondanks obstakels</p>
          </div>
        </div>
      </div>
    </Parallax>  
  );
};

export default Pagina9;
