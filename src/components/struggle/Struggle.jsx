import React from 'react'
import { Parallax } from 'react-parallax'
import './StruggleStyle.css'

const Struggle = () => {
  return (
    <Parallax bgImage={require('../../assets/frustratie.jpg')} strength={300}>
      <div name= 'struggle' className='struggle'>
          <div className="container">
              <div className="top">
                <h1> struggle </h1>
            </div>
            <div className="bottom">
              <button className="btn btn-dark">Scrollytelling</button>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Struggle