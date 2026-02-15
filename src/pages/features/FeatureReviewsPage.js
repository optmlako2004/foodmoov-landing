// src/pages/features/FeatureReviewsPage.js
import { Link } from "react-router-dom";
import { FaStar, FaDownload } from "react-icons/fa";
import "./FeaturePage.css";

function FeatureReviewsPage() {
  return (
    <div className="feature-page">
      <title>Avis et Notes des Food Trucks - Avis Vérifiés | Foodmoov</title>
      <meta name="description" content="Consultez les avis vérifiés et notes des food trucks sur Foodmoov. Classement par étoiles, photos des plats et retours authentiques des gourmands." />
      <meta property="og:title" content="Avis et Notes des Food Trucks - Avis Vérifiés | Foodmoov" />
      <meta property="og:description" content="Consultez les avis vérifiés et notes des food trucks pour choisir en toute confiance." />
      <meta property="og:url" content="https://foodmoov.com/fonctionnalites/avis" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/fonctionnalites/avis" />
      <div className="feature-hero">
        <div className="feature-hero-icon">
          <FaStar />
        </div>
        <h1>Avis et notes</h1>
        <p>
          Des avis vérifiés pour choisir en toute confiance le food truck
          qui vous correspond.
        </p>
      </div>

      <div className="feature-content">
        <div className="feature-section">
          <h2>Comment ça marche ?</h2>
          <p>
            Après chaque visite, les clients peuvent laisser un avis et une note
            sur leur expérience. Chaque avis est vérifié pour garantir son
            authenticité et vous aider à faire le meilleur choix.
          </p>
        </div>

        <div className="feature-section">
          <h2>Fonctionnalités</h2>
          <ul className="feature-list">
            <li>Notes sur 5 étoiles pour chaque food truck</li>
            <li>Avis détaillés avec photos des plats</li>
            <li>Système de vérification des avis authentiques</li>
            <li>Classement des food trucks les mieux notés</li>
            <li>Filtres par note moyenne et nombre d'avis</li>
          </ul>
        </div>
      </div>

      <div className="feature-cta">
        <h3>Découvrez les food trucks les mieux notés</h3>
        <p>Téléchargez l'application et consultez les avis des gourmands.</p>
        <Link to="/applications" className="cta-btn">
          <FaDownload /> Télécharger l'app
        </Link>
      </div>
    </div>
  );
}

export default FeatureReviewsPage;
