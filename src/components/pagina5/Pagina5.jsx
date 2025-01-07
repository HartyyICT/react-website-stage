import React from 'react';
import { Parallax } from 'react-parallax';
import './Pagina5Styles.css';

const Pagina5 = () => {
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
                alt="Jan Klaassen"
                className="profile-image"
              />
              <div className="profile-content">
                <h3 className="sender-name">Jan Klaassen</h3>
                <p className="message">
                  Hey Nina, wanneer gaan we weer eens foto's maken? We hebben het al een tijd niet meer gedaan
                </p>
              </div>
            </div>

            {/* Tweede Profile Box */}
            <div className="profile-box2">
              <img
                src="https://via.placeholder.com/50"
                alt="Mam"
                className="profile-image"
              />
              <div className="profile-content">
                <h3 className="sender-name">Mam</h3>
                <p className="message">
                  Hey schat je bent nooit meer thuis... is er iets? Je weet je kan altijd met ons praten.
                </p>
              </div>
            </div>

            {/* Derde Profile Box */}
            <div className="profile-box3">
              <img
                src="https://via.placeholder.com/50"
                alt="Carmen"
                className="profile-image"
              />
              <div className="profile-content">
                <h3 className="sender-name">Carmen</h3>
                <p className="message">
                  Nina kom je nou een vanavond mee stappen?! We missen je schat :(
                </p>
              </div>
            </div>

            {/* Vierde Profile Box */}
            <div className="profile-box4">
              <img
                src="https://via.placeholder.com/50"
                alt="Leidinggevende werk"
                className="profile-image"
              />
              <div className="profile-content">
                <h3 className="sender-name">Leidinggevende werk</h3>
                <p className="message">
                  Hey Nina, we hebben morgen mensen te kort. Kan je dan komen werken?
                </p>
              </div>
            </div>

            {/* Vijfde Profile Box */}
            <div className="profile-box5">
              <img
                src="https://via.placeholder.com/50"
                alt="Mentor"
                className="profile-image"
              />
              <div className="profile-content">
                <h3 className="sender-name">Mentor</h3>
                <p className="message">
                  Nina we moeten gaan praten, ik heb van alle docenten gehoord dat je niet meer vaak aanwezig bent in de lessen. Wanneer heb je tijd?
                </p>
              </div>
            </div>


          {/* Toegevoegde Cijferlijst */}
          <div className="grade-list">
              <h3>Rapport Nina Jansen</h3>
              <table>
                <thead>
                  <tr>
                    <th>Vak</th>
                    <th>Cijfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Studiofotografie</td>
                    <td>4,2</td>
                  </tr>
                  <tr>
                    <td>Conceptontwikkeling</td>
                    <td>5,1</td>
                  </tr>
                  <tr>
                    <td>Marketing en branding</td>
                    <td>5,0</td>
                  </tr>
                  <tr>
                    <td>Multimedia en videografie</td>
                    <td>4,8</td>
                  </tr>
                  <tr>
                    <td>Productfotografie</td>
                    <td>4,6</td>
                  </tr>
                </tbody>
              </table>
            </div>

          {/* maandelijkse kosten */}
            <div className="monthly-costs">
              <h3>Maandelijkse kosten</h3>
              <table>
                <thead>
                  <tr>
                    <th>Uitgave</th>
                    <th>Bedrag (€)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Huur studentenappartement</td>
                    <td>900</td>
                  </tr>
                  <tr>
                    <td>Collegegeld</td>
                    <td>255</td>
                  </tr>
                  <tr>
                    <td>Boeken en studiemateriaal</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Boodschappen</td>
                    <td>250</td>
                  </tr>
                  <tr>
                    <td>Abonnementen (telefoon, streaming)</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Vervoer (OV-chipkaart)</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>Overige uitgaven</td>
                    <td>150</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td><strong>Totaal</strong></td>
                    <td><strong>1.755</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>

          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Pagina5;
