// src/components/Footer.js
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
  useAuth();
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
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-wrap">
              <img src={logo} alt="Foodmoov" />
              <span>Food<em>moov</em></span>
            </Link>
            <p>La plateforme qui connecte gourmands et food trucks. Trouvez, explorez et savourez les meilleurs food trucks de votre ville.</p>
            <div className="footer-social">
              <a href="https://facebook.com/foodmoov" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src={facebookLogo} alt="Facebook" /></a>
              <a href="https://instagram.com/foodmoov" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={instagramLogo} alt="Instagram" /></a>
              <a href="https://twitter.com/foodmoov" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><img src={twitterLogo} alt="Twitter" /></a>
              <a href="https://tiktok.com/@foodmoov" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><img src={tiktokLogo} alt="TikTok" /></a>
            </div>
          </div>

          {/* Produit */}
          <div className="footer-col">
            <h4>Produit</h4>
            <Link to="/applications">Application mobile</Link>
          </div>

          {/* Entreprise */}
          <div className="footer-col">
            <h4>Entreprise</h4>
            <Link to="/a-propos">À propos</Link>
            <Link to="/professionnels">Je suis foodtrucker</Link>
            <Link to="/entreprise">Entreprises privées</Link>
            <Link to="/service-public">Service public</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Légal */}
          <div className="footer-col">
            <h4>Légal</h4>
            <Link to="/confidentialite">Politique de confidentialité</Link>
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/securite">Sécurité</Link>
            <Link to="/aide">Centre d'aide</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <h4>Rejoignez-nous</h4>
              <p>Recevez nos nouveautés et promotions directement par email.</p>
            </div>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Votre Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? "..." : "Newsletter"}
              </button>
            </form>
          </div>
          {message && <p className={`subscribe-message ${messageStatus}`}>{message}</p>}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Foodmoov. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
