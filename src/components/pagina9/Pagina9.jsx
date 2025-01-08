import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina9Styles.css'


const Pagina9 = () => {
  return (
      <Parallax bgImage={require('../../assets/sattelietheerlen.jpg')} strength={300}>
        <div name='pagina9' className='pagina9'>
          <div className="container">
            <div className="top">
              <p>
              In 2024 is de gemiddelde studieschuld voor jongeren onder de 25 jaar gedaald. 
              Jongeren onder de 20 jaar hadden een schuld van gemiddeld 1.9k euro, terwijl 20-25-jarigen 13.1k euro hadden. 
              Voor oudere groepen steeg de schuld, met 25-30-jarigen die gemiddeld 24.6k euro schuld hadden, en 30-plussers 18.8k euro. 
              De hogere schulden in oudere groepen komen doordat zij minder profiteerden van de basisbeurs en vooral leningen hadden.</p>
            </div>
            {/* Add the image below */}
            <div className="image2">
              <img src={require('../../assets/gemstudieschuld.jpg')} alt="Jongeren in Heerlen" />
            </div>
          </div>
        </div>
      </Parallax>  
    );
  };

export default Pagina9;
