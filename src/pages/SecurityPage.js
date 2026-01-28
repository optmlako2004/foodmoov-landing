// src/pages/SecurityPage.js - Page Sécurité Landing
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaShieldAlt, FaLock, FaUserShield, FaKey, FaServer, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import "./SecurityPage.css";

function SecurityPage() {
  const { APP_URL } = useAuth();

  const securityFeatures = [
    {
      icon: <FaLock />,
      title: "Chiffrement HTTPS",
      description: "Toutes les communications entre votre navigateur et nos serveurs sont chiffrées via HTTPS/TLS pour garantir la confidentialité de vos données."
    },
    {
      icon: <FaKey />,
      title: "Mots de passe sécurisés",
      description: "Vos mots de passe sont hashés avec bcrypt, un algorithme de cryptage robuste. Nous ne stockons jamais vos mots de passe en clair."
    },
    {
      icon: <FaUserShield />,
      title: "Authentification sécurisée",
      description: "Système d'authentification JWT avec tokens à durée limitée. Option de connexion via Google OAuth 2.0 pour une sécurité renforcée."
    },
    {
      icon: <FaServer />,
      title: "Infrastructure protégée",
      description: "Nos serveurs sont hébergés chez des fournisseurs certifiés avec des mesures de sécurité avancées et des sauvegardes régulières."
    }
  ];

  const userRights = [
    "Accéder à vos données personnelles",
    "Modifier ou corriger vos informations",
    "Télécharger une copie de vos données",
    "Supprimer définitivement votre compte",
    "Retirer votre consentement à tout moment"
  ];

  return (
    <div className="security-landing">
      {/* Hero Section */}
      <section className="security-hero">
        <div className="security-hero-content">
          <span className="security-badge">
            <FaShieldAlt /> Sécurité
          </span>
          <h1>Votre sécurité est notre priorité</h1>
          <p>
            Chez Foodmoov, nous mettons en œuvre les meilleures pratiques de sécurité
            pour protéger vos données et garantir une expérience sereine.
          </p>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="security-features-section">
        <div className="section-header">
          <h2>Comment nous protégeons vos données</h2>
          <p>Des mesures de sécurité robustes à chaque niveau</p>
        </div>
        <div className="security-features-grid">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="security-feature-card">
              <div className="security-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* User Rights Section */}
      <section className="security-rights-section">
        <div className="rights-content">
          <div className="rights-text">
            <h2>Vos droits sur vos données</h2>
            <p>
              Conformément au RGPD, vous disposez de droits étendus sur vos données personnelles.
              Nous nous engageons à les respecter et à faciliter leur exercice.
            </p>
            <ul className="rights-list">
              {userRights.map((right, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <Link to="/confidentialite" className="btn-secondary">
              Politique de confidentialité <FaArrowRight />
            </Link>
          </div>
          <div className="rights-visual">
            <div className="shield-visual">
              <FaShieldAlt />
              <span>RGPD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="security-tips-section">
        <div className="section-header">
          <h2>Conseils de sécurité</h2>
          <p>Quelques bonnes pratiques pour protéger votre compte</p>
        </div>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-number">1</span>
            <h3>Mot de passe fort</h3>
            <p>Utilisez au moins 8 caractères avec des majuscules, minuscules, chiffres et caractères spéciaux.</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">2</span>
            <h3>Mot de passe unique</h3>
            <p>N'utilisez pas le même mot de passe que sur d'autres sites pour éviter les compromissions en chaîne.</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">3</span>
            <h3>Déconnexion</h3>
            <p>Pensez à vous déconnecter sur les appareils partagés et ne cochez pas "Se souvenir de moi".</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="security-cta-section">
        <div className="cta-content">
          <h2>Des questions sur la sécurité ?</h2>
          <p>Notre équipe est disponible pour répondre à vos questions</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary large">
              Nous contacter <FaArrowRight />
            </Link>
            <a href={APP_URL} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Accéder à l'application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecurityPage;
