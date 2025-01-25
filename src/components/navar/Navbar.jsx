// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa';
import './NavbarStyles.css';
import limelogo from '../../assets/limelogo.png';
import { Link } from 'react-scroll';

const Navbar = ({ onToggleOrder }) => {
    const [nav, setNav] = useState(false);
    const [slide, setSlide] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setSlide(!slide);
    };

    return (
        <div className="navbar">
            <div className="container">
                {/* Logo section with slide effect */}
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    <img src={limelogo} alt="limelogo" style={{ height: '60px' }} />
                </div>

                {/* Navigation menu with smooth scrolling links */}
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link activeClass="active" to="pagina1" spy={true} smooth={true} duration={500}>
                            Intro
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="pagina2" spy={true} smooth={true} duration={500}>
                            Titel
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="nina" spy={true} smooth={true} duration={500}>
                            Nina
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="pagina7" spy={true} smooth={true} duration={500}>
                            Overgang
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="pagina11" spy={true} smooth={true} duration={500}>
                            Afsluiting
                        </Link>
                    </li>
                    <li>
                        <button onClick={onToggleOrder} className="switch-btn">
                            Switch Order
                        </button>
                    </li>
                </ul>

                {/* Hamburger menu for mobile view */}
                <div className="hamburger" onClick={handleNav}>
                    {nav ? (
                        <FaTimes size={20} style={{ color: '#ffffff' }} />
                    ) : (
                        <FaBars style={{ color: '#ffffff' }} size={20} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;