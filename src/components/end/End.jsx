import React from 'react'
import { Parallax } from 'react-parallax'
import './EndStyles.css'

const End = () => {
  return (
    <Parallax bgImage={require('../../assets/padennina.jpg')} strength={300}>
      <div name= 'end' className='end'>
          <div className="container">
              <div className="top">
                <p>Nina maakt zich zorgen over haar toekomst in een concurrerende arbeidsmarkt</p>
            </div>
            <div className="top2">
                <p>Waar werkervaring en connecties doorslaggevend zijn</p>
            </div>
            <div className="bottom">
              <button className="btn btn-dark">Scrollytelling</button>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default End