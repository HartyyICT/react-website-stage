import React from 'react'
import './ViewStyles.css'

const View = () => {
  return (
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
  )
}

export default View