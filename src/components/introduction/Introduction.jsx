import React from 'react';
import { Parallax, Parralax } from 'react-parallax';
import './IntroductionStyles.css';
import Ingang from '../../assets/ingang.jpg';

const Introduction = () => {
  return (
    <Parallax className='image' bgImage={Ingang} strength={800}>
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
