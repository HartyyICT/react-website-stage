import React from 'react';
import { Parallax } from 'react-parallax'
import './Pagina3Styles.css';
import ninaPortrait from '../../assets/ninaportret.jpg';

const Pagina3 = () => {
  return (
    <Parallax bgImage={require('../../assets/studentenhuis.jpg')} strength={300}>
      <div name='nina' className='nina'>
        <div className="container">
          <div className="portrait">
            <img src={ninaPortrait} alt="portret van Nina" className='nina-portret' />
          </div>

          <div className="top">
            <h1>Dit is Nina</h1>
            <p> Nina is een 21-jarige studente aan de Hogeschool te Heerlen. </p>
            <p> Ze heeft moeite om haar studie, werk en persoonlijke leven in balans te houden. </p>
            <p> Haar grootste uitdagingen zijn financiële druk en de verwachtingen van de maatschappij. </p>
            <p> Ze hoopt dat haar verhaal een beter begrip kan creëren van de situatie van veel jonge mensen in Heerlen. </p>
          </div>
          <div className="bottom">
            <button className="btn btn-dark">Scrollytelling</button>
          </div>
        </div>
      </div>
    </Parallax>  
  );
};



export default Pagina3;
