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
              <a href={getDashboardUrl()} className="cta-btn login" target="_blank" rel="noopener noreferrer">
                Mon Espace
              </a>
            ) : (
              <a href={`${APP_URL}/connexion`} className="cta-btn login">
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
          <ul className="mobile-nav-links">
            <li><NavLink to="/" onClick={closeMenu} end>Accueil</NavLink></li>
            <li><button className="mobile-nav-btn" onClick={scrollToFeatures}>Fonctionnalités</button></li>
            <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
            <li><NavLink to="/applications" onClick={closeMenu}>Applications</NavLink></li>
            <li className="mobile-nav-section">Nous rejoindre</li>
            <li><NavLink to="/professionnels" onClick={closeMenu}>Je suis foodtrucker</NavLink></li>
            <li><NavLink to="/devenir-influenceur" onClick={closeMenu}>Influenceur</NavLink></li>
            <li><NavLink to="/devenir-partenaire" onClick={closeMenu}>Partenaire</NavLink></li>
            <li className="mobile-nav-section">Foodmoov for Business</li>
            <li><NavLink to="/entreprise" onClick={closeMenu}>Entreprise privée</NavLink></li>
            <li><NavLink to="/service-public" onClick={closeMenu}>Collectivité</NavLink></li>
          </ul>

          <div className="mobile-cta">
            {authState.isAuthenticated ? (
              <a href={getDashboardUrl()} className="cta-btn login" target="_blank" rel="noopener noreferrer">Mon Espace</a>
            ) : (
              <a href={`${APP_URL}/connexion`} className="cta-btn login" onClick={closeMenu}>Se connecter</a>
            )}
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div className={`backdrop ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu} />
    </>
  );
}

export default Header;
