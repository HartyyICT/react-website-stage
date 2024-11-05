import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './NinaStyles.css';

gsap.registerPlugin(ScrollTrigger);

const Nina = () => {
  // Create a ref for the container you want to animate
  const ninaRef = useRef(null);

  useEffect(() => {
    // Apply the zoom animation with ScrollTrigger
    gsap.fromTo(
      ninaRef.current,
      { scale: 0.8, opacity: 0 }, // Start state
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ninaRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ninaRef} name='nina' className='nina'>
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
  );
};

export default Nina;
