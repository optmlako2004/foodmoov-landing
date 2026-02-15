// src/pages/ApplicationsPage.js - Choix de l'application à télécharger
import React from "react";
import "./ApplicationsPage.css";

import { FaUsers, FaTruckMoving } from "react-icons/fa";

import appStoreBadge from "../assets/appstore.webp";
import googlePlayBadge from "../assets/playstore.webp";
import clientMockup from "../assets/app-map.png";
import proMockup from "../assets/acceuil.png";

function ApplicationsPage() {
  // Liens des stores
  const clientAppStore = "https://apps.apple.com/fr/app/foodmood/id6746414808";
  const clientGooglePlay = "https://play.google.com/store/apps/details?id=com.arkone.foodtruckview";
  const proAppStore = "https://apps.apple.com/fr/app/foodtrucks-driver/id6749314863";
  const proGooglePlay = "https://play.google.com/store/apps/details?id=com.arkone.foodtruckviewdriver";

  return (
    <div className="applications-page">
      <title>Télécharger les Applications Foodmoov | Foodmoov</title>
      <meta name="description" content="Téléchargez Foodmood pour trouver des food trucks ou Foodmoov Driver pour gérer votre activité de food trucker. Disponible sur App Store et Google Play." />
      <meta property="og:title" content="Télécharger les Applications Foodmoov" />
      <meta property="og:description" content="Téléchargez Foodmood pour trouver des food trucks ou Foodmoov Driver pour gérer votre activité. Disponible sur iOS et Android." />
      <meta property="og:url" content="https://foodmoov.com/applications" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/applications" />
      <div className="apps-hero">
        <h1>Télécharger Foodmoov</h1>
        <p>Choisissez l'application adaptée à vos besoins</p>
      </div>

      <div className="apps-choices">
        {/* Application Client */}
        <div className="app-choice client">
          <div className="app-choice-content">
            <div className="app-icon-wrapper client">
              <FaUsers />
            </div>
            <h2>Foodmood</h2>
            <span className="app-subtitle">Pour les gourmands</span>
            <p>
              Trouvez les food trucks autour de vous, consultez les menus,
              recevez des notifications quand votre camion préféré est proche.
            </p>
            <ul className="app-features">
              <li>Carte interactive en temps réel</li>
              <li>Menus et photos des plats</li>
              <li>Notifications personnalisées</li>
              <li>Favoris et historique</li>
            </ul>
            <div className="store-buttons">
              <a href={clientAppStore} target="_blank" rel="noopener noreferrer" className="store-btn">
                <img src={appStoreBadge} alt="Télécharger sur App Store" />
              </a>
              <a href={clientGooglePlay} target="_blank" rel="noopener noreferrer" className="store-btn">
                <img src={googlePlayBadge} alt="Télécharger sur Google Play" />
              </a>
            </div>
          </div>
          <div className="app-choice-image">
            <img src={clientMockup} alt="Application Foodmood" />
          </div>
        </div>

        {/* Séparateur */}
        <div className="apps-divider">
          <span>ou</span>
        </div>

        {/* Application Pro */}
        <div className="app-choice pro">
          <div className="app-choice-image">
            <img src={proMockup} alt="Application Foodmoov Driver" />
          </div>
          <div className="app-choice-content">
            <div className="app-icon-wrapper pro">
              <FaTruckMoving />
            </div>
            <h2>Foodmoov Driver</h2>
            <span className="app-subtitle">Pour les professionnels</span>
            <p>
              Gérez votre food truck, partagez votre position en direct,
              recevez des demandes d'influenceurs et développez votre clientèle.
            </p>
            <ul className="app-features">
              <li>Partage de position GPS</li>
              <li>Gestion des menus</li>
              <li>Demandes d'influenceurs</li>
              <li>Statistiques et analytics</li>
            </ul>
            <div className="store-buttons">
              <a href={proAppStore} target="_blank" rel="noopener noreferrer" className="store-btn">
                <img src={appStoreBadge} alt="Télécharger sur App Store" />
              </a>
              <a href={proGooglePlay} target="_blank" rel="noopener noreferrer" className="store-btn">
                <img src={googlePlayBadge} alt="Télécharger sur Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ApplicationsPage;
