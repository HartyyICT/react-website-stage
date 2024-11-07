import React from 'react'
import { Parallax } from 'react-parallax'
import './ViewStyles.css'

const View = () => {
  return (
    <Parallax bgImage={require('../../assets/overzicht.jpg')} strength={300}>
      <div name= 'view' className='view'>
          <div className="container">
              <div className="top">
                <h1>Overzicht infographic </h1>
            </div>
            <div className="bottom">
              <button className="btn btn-dark">Scrollytelling</button>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default View