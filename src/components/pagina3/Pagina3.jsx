import React from 'react'
import { Parallax } from 'react-parallax'
import './Pagina3Styles.css'

const Pagina3 = () => {
  return (
    <Parallax bgImage={require('../../assets/frustratie.jpg')} strength={300}>
      <div name= 'pagina3' className='pagina3'>
          <div className="container">
              <div className="top">
                <h1> Dit is pagina 3 </h1>
            </div>
            <div className="bottom">
              <button className="btn btn-dark">Scrollytelling</button>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Pagina3;