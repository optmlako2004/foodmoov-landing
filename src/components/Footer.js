// src/components/Footer.js - Footer style WhatsApp
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";
import "./Footer.css";
import logo from "../assets/logo.png";
import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import tiktokLogo from "../assets/tiktok.png";
import twitterLogo from "../assets/twitter.png";

function Footer() {
  const { APP_URL } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setMessageStatus("");
    try {
      await api.post("/subscribe", { email });
      setMessage("Merci pour votre inscription !");
      setMessageStatus("success");
      setEmail("");
    } catch (error) {
      setMessage(error.message || "Une erreur est survenue.");
      setMessageStatus("error");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setMessage("");
        setMessageStatus("");
      }, 5000);
    }
  };

  return (
    <footer className="landing-footer">
      <div className="footer-main">
        {/* Logo et bouton */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Foodmoov" />
            <span>Foodmoov</span>
          </div>
          <a href={APP_URL} className="footer-cta-btn" target="_blank" rel="noopener noreferrer">
            Accéder à l'app
          </a>
          {/* Réseaux sociaux */}
          <div className="footer-social">
            <a href="https://facebook.com/foodmoov" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://instagram.com/foodmoov" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://tiktok.com/@foodmoov" target="_blank" rel="noopener noreferrer">
              <img src={tiktokLogo} alt="TikTok" />
            </a>
            <a href="https://twitter.com/foodmoov" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Colonnes de liens */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <h5>Foodmoov</h5>
            <ul>
              <li><Link to="/fonctionnalites">Fonctionnalités</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/securite">Sécurité</Link></li>
              <li><Link to="/professionnels">Pour les professionnels</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Qui sommes-nous ?</h5>
            <ul>
              <li><Link to="/a-propos">À propos de nous</Link></li>
              <li><Link to="/devenir-partenaire">Partenaires</Link></li>
              <li><Link to="/confidentialite">Confidentialité</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Utiliser Foodmoov</h5>
            <ul>
              <li><Link to="/applications">Android</Link></li>
              <li><Link to="/applications">iPhone</Link></li>
              <li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Web App</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5>Besoin d'aide ?</h5>
            <ul>
              <li><Link to="/contact">Nous contacter</Link></li>
              <li><Link to="/aide">Centre d'aide</Link></li>
              <li><Link to="/applications">Applications</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <span>Restez informé des dernières nouveautés</span>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "..." : "S'inscrire"}
            </button>
          </form>
          {message && <span className={`newsletter-message ${messageStatus}`}>{message}</span>}
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <span>{new Date().getFullYear()} © Foodmoov</span>
      </div>
    </footer>
  );
}

export default Footer;
