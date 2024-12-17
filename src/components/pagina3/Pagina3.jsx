import React, { useEffect, useState, useRef } from 'react';
import { Parallax } from 'react-parallax';
import './Pagina3Styles.css';

const Pagina3 = () => {
  const [bgImage, setBgImage] = useState(require('../../assets/ninastuderen.jpg')); // Standaard afbeelding
  const [isVisible1, setIsVisible1] = useState(false); // State voor eerste box
  const [isVisible2, setIsVisible2] = useState(false); // State voor tweede box
  const [isVisible3, setIsVisible3] = useState(false); // State voor derde box
  const [imageTransition, setImageTransition] = useState(false); // Staat voor het toepassen van de overgang

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible1(entry.isIntersecting); // Update zichtbaarheid van de eerste box
        if (entry.isIntersecting) {
          setImageTransition(true); // Zet overgang in gang
          setBgImage(require('../../assets/ninastuderen.jpg')); // Update naar een andere afbeelding
        }
      },
      {
        rootMargin: "0px 0px -300px 0px", // Boxen worden zichtbaar als ze 300px boven de viewport komen
        threshold: 0.5
      }
    );
    
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible2(entry.isIntersecting); // Update zichtbaarheid van de tweede box
        // Verander de achtergrondafbeelding wanneer de tweede box zichtbaar wordt
        if (entry.isIntersecting) {
          setImageTransition(true); // Zet overgang in gang
          setBgImage(require('../../assets/ninastruggle.jpg')); // Update naar een andere afbeelding
        }
      },
      {
        rootMargin: "0px 0px -300px 0px", // Boxen worden zichtbaar als ze 300px boven de viewport komen
        threshold: 0.5
      }
    );
    
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible3(entry.isIntersecting); // Update zichtbaarheid van de derde box
        // Verander de achtergrondafbeelding wanneer de derde box zichtbaar wordt
        if (entry.isIntersecting) {
          setImageTransition(true); // Zet overgang in gang
          setBgImage(require('../../assets/ninastruggle2.jpg')); // Update naar een andere afbeelding
        }
      },
      {
        rootMargin: "0px 0px -180px 0px", // Boxen worden zichtbaar als ze 200px boven de viewport komen
        threshold: 0.5
      }
    );

    if (textRef1.current) observer1.observe(textRef1.current);
    if (textRef2.current) observer2.observe(textRef2.current);
    if (textRef3.current) observer3.observe(textRef3.current);

    // Verwijder observators bij unmounten
    return () => {
      if (textRef1.current) observer1.unobserve(textRef1.current);
      if (textRef2.current) observer2.unobserve(textRef2.current);
      if (textRef3.current) observer3.unobserve(textRef3.current);
    };
  }, []);

  useEffect(() => {
    if (imageTransition) {
      const timer = setTimeout(() => {
        setImageTransition(false); // Zet overgang uit nadat het is afgelopen
      }, 1000); // Duur van de overgang is 1 seconde

      return () => clearTimeout(timer);
    }
  }, [imageTransition]);

  return (
    <Parallax
      bgImage={bgImage} // Dynamische achtergrondafbeelding
      strength={300}
      className={`parallax-container ${imageTransition ? 'transitioning' : ''}`} // Voeg overgangsklasse toe
    >
      <div name="pagina3" className="pagina3">
        <div className="container">
          {/* Eerste tekstbox */}
          <div
            ref={textRef1}
            className={`text-box ${isVisible1 ? 'visible' : ''}`}
          >
            <p>Hoewel Nina ambitieus is en haar studies serieus neemt</p>
          </div>
          {/* Tweede tekstbox */}
          <div
            ref={textRef2}
            className={`text-box second-text-box ${isVisible2 ? 'visible' : ''}`}
          >
            <p>Betekent haar werk vaak dat ze erg vermoeid is en minder tijd heeft om hoge cijfers te behalen </p>
          </div>
          {/* Derde tekstbox */}
          <div
            ref={textRef3}
            className={`text-box third-text-box ${isVisible3 ? 'visible' : ''}`}
          >
            <p>De combinatie van werk en studie leidt vaak tot overbelasting</p>
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
