// src/pages/features/FeatureSocialPage.js
import { Link } from "react-router-dom";
import { FaShareAlt, FaDownload } from "react-icons/fa";
import "./FeaturePage.css";

function FeatureSocialPage() {
  return (
    <div className="feature-page">
      <title>Partage Social - Recommandez vos Food Trucks | Foodmoov</title>
      <meta name="description" content="Partagez vos food trucks préférés sur Instagram, Facebook, X et WhatsApp. Recommandez vos découvertes culinaires à vos amis en un clic." />
      <meta property="og:title" content="Partage Social - Recommandez vos Food Trucks | Foodmoov" />
      <meta property="og:description" content="Partagez vos food trucks préférés sur les réseaux sociaux et recommandez vos découvertes à vos amis." />
      <meta property="og:url" content="https://foodmoov.com/fonctionnalites/partage" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/fonctionnalites/partage" />
      <div className="feature-hero">
        <div className="feature-hero-icon">
          <FaShareAlt />
        </div>
        <h1>Partage social</h1>
        <p>
          Partagez vos découvertes culinaires avec vos amis
          et faites connaître vos food trucks préférés.
        </p>
      </div>

      <div className="feature-content">
        <div className="feature-section">
          <h2>Comment ça marche ?</h2>
          <p>
            En un clic, partagez la fiche d'un food truck ou un plat
            que vous avez adoré sur vos réseaux sociaux. Vos amis peuvent
            découvrir le food truck directement via le lien partagé.
          </p>
        </div>

        <div className="feature-section">
          <h2>Fonctionnalités</h2>
          <ul className="feature-list">
            <li>Partage en un clic sur tous les réseaux sociaux</li>
            <li>Liens de partage avec aperçu du food truck</li>
            <li>Recommandations entre amis</li>
            <li>Classement des food trucks les plus partagés</li>
            <li>Intégration Instagram, Facebook, X et WhatsApp</li>
          </ul>
        </div>
      </div>

      <div className="feature-cta">
        <h3>Partagez vos coups de cœur</h3>
        <p>Téléchargez l'application et recommandez vos food trucks préférés.</p>
        <Link to="/applications" className="cta-btn">
          <FaDownload /> Télécharger l'app
        </Link>
      </div>
    </div>
  );
}

export default FeatureSocialPage;
