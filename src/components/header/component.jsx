import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/iiitdlogo.png';
import './component.css';

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({ technology: false, services: false });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdown = (menu) => {
    setDropdownVisible(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo on the left */}
          <Link to="/" className="logo-link">
            <img src={logo} alt="IIITD Logo" className="logo-image" />
          </Link>

          {/* Hamburger Menu for Mobile on the right */}
          <button onClick={toggleMenu} className="hamburger-button">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {/* Services Dropdown */}
            <div className="dropdown">
              <button className="nav-link dropdown-trigger">
                Our Services
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link to="/Services/Facilitate_Innovation" className="dropdown-item">Facilitate Innovation</Link>
                <Link to="/Services/Tech_Assessment" className="dropdown-item">Technology Assessment</Link>
                <Link to="/Services/IPR_Management" className="dropdown-item">IPR Management</Link>
                <Link to="/Services/Tech_Licensing" className="dropdown-item">Technology Licensing</Link>
                <Link to="/Services/Startup_Facilitation" className="dropdown-item">Startup Facilitation</Link>
              </div>
            </div>

            {/* Technology Dropdown */}
            <div className="dropdown">
              <button className="nav-link dropdown-trigger">
                Technology
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link to="/Our_Research" className="dropdown-item">Our Research</Link>
                <Link to="/Our_Technology" className="dropdown-item">Our Technology</Link>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="dropdown">
              <button className="nav-link dropdown-trigger">
                Resources
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link to="/Resources/Faculty" className="dropdown-item">Faculty</Link>
                <Link to="/Resources/Partner" className="dropdown-item">Partner</Link>
                <Link to="/Resources/Student" className="dropdown-item">Student</Link>
              </div>
            </div>

            <Link to="/Collaborate" className="nav-link">Collaborate</Link>
            <Link to="/Event" className="nav-link">Event</Link>
            <Link to="/Contact_Us" className="nav-link contact-button">Contact Us</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu as a Top-Down Dialog */}
      {isOpen && (
        <div className="mobile-dropdown-dialog">
          <div className="mobile-menu">
            <div className="mobile-dropdown">
              <button onClick={() => handleDropdown('services')} className="mobile-dropdown-trigger">
                Our Services
                <svg
                  className={`mobile-dropdown-icon ${dropdownVisible.services ? 'rotated' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownVisible.services && (
                <div className="mobile-dropdown-content">
                  <Link to="/Services/Facilitate_Innovation" className="mobile-dropdown-item" onClick={toggleMenu}>
                    Facilitate Innovation
                  </Link>
                  <Link to="/Services/Tech_Assessment" className="mobile-dropdown-item" onClick={toggleMenu}>
                    Technology Assessment
                  </Link>
                  <Link to="/Services/IPR_Management" className="mobile-dropdown-item" onClick={toggleMenu}>
                    IPR Management
                  </Link>
                  <Link to="/Services/Tech_Licensing" className="mobile-dropdown-item" onClick={toggleMenu}>
                    Technology Licensing
                  </Link>
                  <Link to="/Services/Startup_Facilitation" className="mobile-dropdown-item" onClick={toggleMenu}>
                    Startup Facilitation
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-dropdown">
              <button onClick={() => handleDropdown('technology')} className="mobile-dropdown-trigger">
                Technology
                <svg
                  className={`mobile-dropdown-icon ${dropdownVisible.technology ? 'rotated' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownVisible.technology && (
                <div className="mobile-dropdown-content">
                  <Link to="/Our_Research" className="mobile-dropdown-item" onClick={toggleMenu}>
                    Our Research
                  </Link>
                  <Link to="/Our_Technology" className="mobile-dropdown-item" onClick={toggleMenu}>
                    Our Technology
                  </Link>
                </div>
              )}
            </div>

            <Link to="/Collaborate" className="mobile-nav-link" onClick={toggleMenu}>
              Collaborate
            </Link>
            <Link to="/Event" className="mobile-nav-link" onClick={toggleMenu}>
              Event
            </Link>
            <Link to="/Contact_Us" className="mobile-nav-link contact-button" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
