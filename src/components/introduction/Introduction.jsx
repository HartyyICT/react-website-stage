import React from 'react';
import { Parallax } from 'react-parallax';
import './IntroductionStyles.css';


const Introduction = () => {
  return (
    <Parallax bgImage={require('../../assets/ingang.jpg')} strength={300}>
      <div name='introduction' className='introduction'>
        <div className="container">
          <div className="top">
            <h1>Scroll om de verhalen van Heerlen te ontdekken</h1>
          </div>
          <div className="bottom">
            <button className="btn btn-dark">Scrollytelling</button>
          </div>
        </div>
      </div>
    </Parallax>  
  );
};

export default Introduction;
