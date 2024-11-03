import React, {useState} from "react";
import {FaBars, FaFacebook, FaTimes, FaInstagram} from 'react-icons/fa'
import './NavbarStyles.css'
import limelogo from '../../assets/limelogo.jpg';
import { Link } from 'react-scroll'


const Navbar = () => {
    const[nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    return (
        <div className='navbar'>
            <div className="container">
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    {/*<h3>Lime</h3> */}
                    <img src={limelogo} alt="limelogo" style={{ height: '40px' }}/>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu' }>
                <li><a href="/"><Link activeClass="active" to="introduction" spy={true} smooth={true} duration={500}>Introductie</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="nina" spy={true} smooth={true} duration={500}>Nina</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="view" spy={true} smooth={true} duration={500}>Overzicht</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="end" spy={true} smooth={true} duration={500}>Afsluiting</Link></a></li>

                    <div className="mobile-menu">
                        <button>Info</button>
                        <div className="social-icons">
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                        </div>
                    </div>

                </ul>

                <ul className="nav-menu hide">
                    <li> <a href="/">Info</a></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}  
                </div>    

            </div>
        </div>
    )
}

export default Navbar 