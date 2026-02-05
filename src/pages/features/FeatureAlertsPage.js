// src/pages/features/FeatureAlertsPage.js
import { Link } from "react-router-dom";
import { FaBell, FaDownload } from "react-icons/fa";
import "./FeaturePage.css";

function FeatureAlertsPage() {
  return (
    <div className="feature-page">
      <div className="feature-hero">
        <div className="feature-hero-icon">
          <FaBell />
        </div>
        <h1>Alertes en temps réel</h1>
        <p>
          Recevez une notification dès que votre food truck préféré
          est à proximité ou ouvre ses portes.
        </p>
      </div>

      <div className="feature-content">
        <div className="feature-section">
          <h2>Comment ça marche ?</h2>
          <p>
            Ajoutez vos food trucks favoris et définissez un périmètre.
            Dès qu'un food truck que vous suivez s'installe près de vous,
            vous recevez une notification push instantanée.
          </p>
        </div>

        <div className="feature-section">
          <h2>Fonctionnalités</h2>
          <ul className="feature-list">
            <li>Notifications push personnalisées</li>
            <li>Alerte de proximité configurable</li>
            <li>Suivi de vos food trucks favoris</li>
            <li>Alertes d'ouverture et de fermeture</li>
            <li>Résumé hebdomadaire des food trucks proches</li>
          </ul>
        </div>
      </div>

      <div className="feature-cta">
        <h3>Ne manquez plus aucun food truck</h3>
        <p>Téléchargez l'application et activez les alertes.</p>
        <Link to="/applications" className="cta-btn">
          <FaDownload /> Télécharger l'app
        </Link>
      </div>
    </div>
  );
}

export default FeatureAlertsPage;
