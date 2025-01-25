import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina7Styles.css'


const Pagina7 = () => {
  return (
    <Parallax bgImage={require('../../assets/overgang.jpg')} strength={300}>
      <div name='pagina7' className='pagina7'>
        <div className="container">
          <div className="top">
            <p>Dit is een realiteit voor veel jongeren in Heerlen die proberen hun ambities waar te maken ondanks obstakels</p>
          </div>
        </div>
      </div>
    </Parallax>  
  );
};

export default Pagina7;
