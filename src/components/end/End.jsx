import React from 'react'
import { Parallax } from 'react-parallax'
import './EndStyles.css'

const End = () => {
  return (
    <Parallax bgImage={require('../../assets/Eind.jpg')} strength={300}>
      <div name= 'end' className='end'>
          <div className="container">
              <div className="top">
                <h1>Overzicht grafieken als einde</h1>
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