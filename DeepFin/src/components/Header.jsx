import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <h1 className="logo">DeepFinAI<span className="dot">.</span></h1>
        </div>

        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${menuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className="nav-link" onClick={() => setMenuOpen(false)}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
