import React, {useState} from "react";
import {FaBars, FaFacebook, FaTimes, FaInstagram} from 'react-icons/fa'
import './NavbarStyles.css'
import limelogo from '../../assets/limelogo.png';
import { Link } from 'react-scroll' // import link for smooth scrolling between the pages

// definition Navbar
const Navbar = () => {
    // state to manage the visibilty of the mobile menu
    const[nav, setNav] = useState(false)
    // state to control the slide effect on the logo when the menu opens/closes
    const [slide, setSlide] = useState(false)

    // Function to toggle the mobile menu and slide effect
    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    return (
        <div className='navbar'>
            <div className="container">
                {/* Logo section with optional slide effect when the menu is opened */}
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    {/*<h3>Lime</h3> */}
                    <img src={limelogo} alt="limelogo" style={{ height: '60px' }}/>
                </div>

                {/*This code is when you click on a Title for example Afsluiting, you will be directed to that page*/}
                <ul className={nav ? 'nav-menu active' : 'nav-menu' }>
                <li><a href="/"><Link activeClass="active" to="pagina1" spy={true} smooth={true} duration={500}>Intro</Link></a></li>    
                <li><a href="/"><Link activeClass="active" to="pagina2" spy={true} smooth={true} duration={500}>Titel</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="nina" spy={true} smooth={true} duration={500}>Nina</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="view" spy={true} smooth={true} duration={500}>Overzicht</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="end" spy={true} smooth={true} duration={500}>Afsluiting</Link></a></li>


                    {/* Mobile menu for social icons and additional links */}
                    <div className="mobile-menu">
                        <button>Info</button>
                        <div className="social-icons">
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                        </div>
                    </div>

                </ul>

                {/* Additional hidden menu for the "Info" link in smaller screens */}
                <ul className="nav-menu hide">
                    <li> <a href="/">Info</a></li>
                </ul>

                {/* Hamburger menu icon for toggling the mobile menu */}
                <div className="hamburger" onClick={handleNav}>
                {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}  
                </div>    

            </div>
        </div>
    )
}

export default Navbar 