import React from "react";
import {FaBars, FaFacebook, FaTimes, FaInstagram} from 'react-icons/fa'
import './NavbarStyles.css'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <h3>Lime</h3>
                </div>

                <ul className="nav-menu">
                    <li> <a href="/">Intro</a></li>
                    <li> <a href="/">Nina</a></li>
                    <li> <a href="/">Overzicht</a></li>
                    <li> <a href="/">Afsluiting</a></li>

                    <div className="mobile-menu">
                        <button>Info</button>
                        <div className="social-icons">
                            <FaFacebook />
                            <FaInstagram />
                        </div>
                    </div>

                </ul>

                <ul className="nav-menu">
                    <li> <a href="/">Info</a></li>
                </ul>

                <div className="hamburger">
                    <FaBars />    
                </div>    

            </div>
        </div>
    )
}

export default Navbar 