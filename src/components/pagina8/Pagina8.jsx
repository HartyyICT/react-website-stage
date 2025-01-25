import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina8Styles.css'

const Pagina8 = () => {
  return (
    <Parallax bgImage={require('../../assets/sattelietheerlen.jpg')} strength={300}>
      <div name='pagina8' className='pagina8'>
        <div className="container">
          <div className="top">
            <p>Zoals hier te zien is het een klein beetje gedaald, maar dit is lang niet genoeg!</p>
          </div>
          {/* Add the image below */}
          <div className="imagecontainer">
            <img src={require('../../assets/grafiekstudieschuld.jpg')} alt="Jongeren in Heerlen" />
          </div>
        </div>
      </div>
    </Parallax>  
  );
};

export default Pagina8;
