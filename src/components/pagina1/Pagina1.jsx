import React from 'react'
import { Parallax } from 'react-parallax'
import './Pagina1Styles.css'

const Pagina1 = () => {
  return (
    <Parallax bgImage={require('../../assets/start.jpg')} strength={300}>
        <div name= 'pagina1' className='pagina1'>
            <div className="container">
                <div className="top">
                <h1> Dit is pagina 1 </h1>
            </div>
            <div className="bottom">
                <button className="btn btn-dark">Scrollytelling</button>
                </div>
            </div>
        </div>
    </Parallax>    
  )
}

export default Pagina1