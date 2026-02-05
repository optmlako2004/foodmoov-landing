// src/components/Header.js - Header style Preview Dark
import { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";
import "./Header.css";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { authState, getDashboardUrl } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToFeatures = (e) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === "/") {
      const el = document.getElementById("fonctionnalites");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "fonctionnalites" } });
    }
  };

  return (
    <>
      <header className="vitrine-header">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="Foodmoov" className="logo" />
            <span className="logo-text">Food<em>moov</em></span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="desktop-nav">
            <button className="nav-link" onClick={scrollToFeatures}>Fonctionnalités</button>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/professionnels" className="nav-link">Je suis foodtrucker</NavLink>
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta">
            {authState.isAuthenticated ? (
              <a href={getDashboardUrl()} className="cta-btn login" target="_blank" rel="noopener noreferrer">
                Mon Espace
              </a>
            ) : (
              <a href={`${import.meta.env.VITE_APP_URL}/connexion`} className="cta-btn login">
                Se connecter
              </a>
            )}
            <Link to="/applications" className="cta-btn download">
              Applications
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <div className="mobile-nav-links">
              <button className="mobile-nav-btn" onClick={scrollToFeatures}>Fonctionnalités</button>
              <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
              <NavLink to="/professionnels" onClick={closeMenu}>Je suis foodtrucker</NavLink>
            </div>

            <div className="mobile-cta">
              {authState.isAuthenticated ? (
                <a href={getDashboardUrl()} className="cta-btn login" target="_blank" rel="noopener noreferrer">Mon Espace</a>
              ) : (
                <a href={`${import.meta.env.VITE_APP_URL}/connexion`} className="cta-btn login" onClick={closeMenu}>Se connecter</a>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      {isMenuOpen && <div className="backdrop" onClick={closeMenu} />}
    </>
  );
}

export default Header;
