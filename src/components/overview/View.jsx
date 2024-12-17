import React from 'react';
import { Parallax } from 'react-parallax';
import './ViewStyles.css';

const View = () => {
  return (
    <Parallax bgImage={require('../../assets/ninaoverzicht.png')} strength={300}>
      <div name='view' className='view'>
        <div className="container">
          <div className="top">
            <p>
              Met stijgende kosten en een volle agenda voelt Nina zich uitgeput en onder druk.
              De druk om productief te zijn belemmert haar om haar passies te volgen zoals fotografie.
            </p>
          </div>
          <div className="bottom">
            {/* Eerste Profile Box */}
            <div className="profile-box">
              <img
                src="https://via.placeholder.com/50"
                alt="Hartiessan Asep"
                className="profile-image"
              />
              <div className="profile-content">
                <h3 className="sender-name">Hartiessan Asep</h3>
                <p className="message">
                  Hey Nina, ik hoop dat alles goed met je gaat. Laat het weten als ik kan helpen!
                </p>
              </div>
            </div>

            {/* Tweede Profile Box */}
            <div className="profile-box2">
              <img
                src="https://via.placeholder.com/50"
                alt="Andere persoon"
                className="profile-image"
              />
              <div className="profile-content">
                <h3 className="sender-name">Andere persoon</h3>
                <p className="message">
                  Nina, vergeet niet om wat tijd voor jezelf te nemen. Je doet het geweldig!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default View;
