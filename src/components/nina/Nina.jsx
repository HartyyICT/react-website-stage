import React from 'react';
import { Parallax } from 'react-parallax'
import './NinaStyles.css';

const Nina = () => {
  return (
    <Parallax bgImage={require('../../assets/introductienina.jpg')} strength={300}>
      <div name='nina' className='nina'>
        <div className="container">
          <div className="top">
            <h1>Dit is Nina</h1>
            <p> Nina is een 21-jarige studente aan de Universiteit van Heerlen. </p>
            <p> Ze heeft moeite om haar studie, werk en persoonlijke leven in balans te houden. </p>
            <p> Haar grootste uitdagingen zijn financiële druk en de verwachtingen van de maatschappij. </p>
            <p> Ze hoopt dat haar verhaal een beter begrip kan creëren van de situatie van veel jonge mensen in Heerlen. </p>
          </div>
          <div className="bottom">
            <button className="btn btn-dark">Scroll naar onder :)</button>
          </div>
        </div>
      </div>
    </Parallax>  
  );
};



export default Nina;
