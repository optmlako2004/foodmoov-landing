// src/components/Header.js - Header style Preview Dark
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";
import "./Header.css";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { authState, getDashboardUrl, APP_URL } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Gérer le scroll après navigation vers "/"
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
      // Nettoyer le state pour éviter de rescroller
      window.history.replaceState({}, document.title);
    }
  }, [location]);

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
            <NavLink to="/rejoindre" className="nav-link">Nous rejoindre</NavLink>
            <NavLink to="/business" className="nav-link">Business</NavLink>
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta">
            {authState.isAuthenticated ? (
              <a href={getDashboardUrl()} className="cta-button" target="_blank" rel="noopener noreferrer">
                Mon Espace
              </a>
            ) : (
              <a href={`${APP_URL}/connexion`} className="cta-button">
                Se connecter
              </a>
            )}
            <Link to="/applications" className="cta-button">
              Applications
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={isMenuOpen ? "backdrop open" : "backdrop"} onClick={closeMenu} />

        {/* Mobile Menu */}
        <nav id="mobile-nav" className={isMenuOpen ? "mobile-nav open" : "mobile-nav"}>
          <ul className="mobile-nav-links">
            <li><button className="mobile-nav-btn" onClick={scrollToFeatures}>Fonctionnalités</button></li>
            <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
            <li><NavLink to="/rejoindre" onClick={closeMenu}>Nous rejoindre</NavLink></li>
            <li><NavLink to="/business" onClick={closeMenu}>Business</NavLink></li>
          </ul>

          <div className="mobile-cta-bottom">
            {authState.isAuthenticated ? (
              <a href={getDashboardUrl()} className="cta-button" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Mon Espace</a>
            ) : (
              <a href={`${APP_URL}/connexion`} className="cta-button" onClick={closeMenu}>Se connecter</a>
            )}
            <Link to="/applications" className="cta-button" onClick={closeMenu}>Applications</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
