// src/components/Header.js - Header Vitrine style WhatsApp
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";
import "./Header.css";
import logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMapMarkerAlt,
  FaUtensils,
  FaTruckMoving,
  FaStar,
  FaMobileAlt,
  FaShieldAlt,
  FaDownload,
  FaHandshake,
} from "react-icons/fa";

function Header() {
  const { authState, getDashboardUrl, getLoginUrl } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsFeaturesOpen(false);
  };

  const closeFeaturesDropdown = () => {
    setIsFeaturesOpen(false);
  };

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.features-dropdown')) {
        setIsFeaturesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <header className="vitrine-header">
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="Foodmoov" className="logo" />
            <span className="logo-text">Foodmoov</span>
          </Link>

          {/* Navigation Desktop - tout sur une ligne */}
          <nav className="desktop-nav">
            {/* Dropdown Fonctionnalités */}
            <div className="features-dropdown">
              <button
                className={`nav-link dropdown-trigger ${isFeaturesOpen ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFeaturesOpen(!isFeaturesOpen);
                }}
              >
                Fonctionnalités <FaChevronDown className={`chevron ${isFeaturesOpen ? 'open' : ''}`} />
              </button>

              {isFeaturesOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    <Link to="/fonctionnalites/carte" className="dropdown-card" onClick={closeFeaturesDropdown}>
                      <FaMapMarkerAlt className="card-icon" />
                      <h4>Carte interactive</h4>
                      <p>Trouvez les food trucks en <br/>temps réel.</p>
                      <span className="card-arrow">→</span>
                    </Link>

                    <Link to="/fonctionnalites/menus" className="dropdown-card" onClick={closeFeaturesDropdown}>
                      <FaUtensils className="card-icon" />
                      <h4>Menus</h4>
                      <p>Consultez les plats et photos.</p>
                      <span className="card-arrow">→</span>
                    </Link>

                    <Link to="/fonctionnalites/professionnels" className="dropdown-card" onClick={closeFeaturesDropdown}>
                      <FaTruckMoving className="card-icon pro" />
                      <h4>Espace Pro</h4>
                      <p>Gérez votre food truck.</p>
                      <span className="card-arrow">→</span>
                    </Link>

                    <Link to="/fonctionnalites/influenceurs" className="dropdown-card" onClick={closeFeaturesDropdown}>
                      <FaStar className="card-icon influencer" />
                      <h4>Influenceurs</h4>
                      <p>Rejoignez notre réseau.</p>
                      <span className="card-arrow">→</span>
                    </Link>

                    <Link to="/devenir-partenaire" className="dropdown-card" onClick={closeFeaturesDropdown}>
                      <FaHandshake className="card-icon partner" />
                      <h4>Partenaires</h4>
                      <p>Devenez partenaire<br/>Foodmoov.</p>
                      <span className="card-arrow">→</span>
                    </Link>

                    <Link to="/fonctionnalites/notifications" className="dropdown-card" onClick={closeFeaturesDropdown}>
                      <FaMobileAlt className="card-icon" />
                      <h4>Notifications</h4>
                      <p>Soyez alerté de vos favoris.</p>
                      <span className="card-arrow">→</span>
                    </Link>

                    <Link to="/securite" className="dropdown-card" onClick={closeFeaturesDropdown}>
                      <FaShieldAlt className="card-icon security" />
                      <h4>Sécurité</h4>
                      <p>Vos données sont protégées.</p>
                      <span className="card-arrow">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/confidentialite" className="nav-link">Confidentialité</NavLink>
            <NavLink to="/aide" className="nav-link">Pages d'aide</NavLink>
            <NavLink to="/blog" className="nav-link">Blog</NavLink>
            <NavLink to="/professionnels" className="nav-link">Pour les professionnels</NavLink>
            <NavLink to="/applications" className="nav-link">Applications</NavLink>
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta">
            {authState.isAuthenticated ? (
              <a href={getDashboardUrl()} className="cta-btn login" target="_blank" rel="noopener noreferrer">
                Mon Espace
              </a>
            ) : (
              <a href={getLoginUrl()} className="cta-btn login" target="_blank" rel="noopener noreferrer">
                Se connecter
              </a>
            )}
            <Link to="/applications" className="cta-btn download">
              <FaDownload /> Télécharger
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
            <NavLink to="/fonctionnalites/carte" onClick={closeMenu}>Carte interactive</NavLink>
            <NavLink to="/fonctionnalites/menus" onClick={closeMenu}>Menus</NavLink>
            <NavLink to="/fonctionnalites/professionnels" onClick={closeMenu}>Espace Pro</NavLink>
            <NavLink to="/fonctionnalites/influenceurs" onClick={closeMenu}>Influenceurs</NavLink>
            <NavLink to="/securite" onClick={closeMenu}>Sécurité</NavLink>
            <NavLink to="/confidentialite" onClick={closeMenu}>Confidentialité</NavLink>
            <NavLink to="/aide" onClick={closeMenu}>Aide</NavLink>
            <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
            <NavLink to="/professionnels" onClick={closeMenu}>Pour les professionnels</NavLink>
            <NavLink to="/applications" onClick={closeMenu}>Applications</NavLink>

            <div className="mobile-cta">
              {authState.isAuthenticated ? (
                <a href={getDashboardUrl()} className="cta-btn login" target="_blank" rel="noopener noreferrer">Mon Espace</a>
              ) : (
                <a href={getLoginUrl()} className="cta-btn login" target="_blank" rel="noopener noreferrer">Se connecter</a>
              )}
              <Link to="/applications" className="cta-btn download" onClick={closeMenu}>
                <FaDownload /> Télécharger
              </Link>
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
