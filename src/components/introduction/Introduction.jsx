import React from 'react';
import './IntroductionStyles.css';


const Introduction = () => {
  return (
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
  );
};

export default Introduction;
