// src/pages/features/FeatureMapPage.js
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import "./FeaturePage.css";
import mockupImage from "../../assets/app-map.png";

function FeatureMapPage() {
  return (
    <div className="feature-page">
      <title>Carte Interactive des Food Trucks en Temps Réel | Foodmoov</title>
      <meta name="description" content="Localisez les food trucks près de vous en temps réel grâce à la carte interactive Foodmoov. Position GPS, horaires et itinéraire." />
      <meta property="og:title" content="Carte Interactive des Food Trucks en Temps Réel | Foodmoov" />
      <meta property="og:description" content="Localisez les food trucks près de vous en temps réel grâce à la carte interactive Foodmoov." />
      <meta property="og:url" content="https://foodmoov.com/fonctionnalites/carte" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/fonctionnalites/carte" />
      <div className="feature-hero">
        <div className="feature-hero-icon">
          <FaMapMarkerAlt />
        </div>
        <h1>Carte interactive</h1>
        <p>
          Visualisez tous les food trucks autour de vous en temps réel.
          Plus besoin de chercher, ils viennent à vous.
        </p>
      </div>

      <div className="feature-content">
        <div className="feature-image">
          <img src={mockupImage} alt="Carte interactive Foodmoov" />
        </div>

        <div className="feature-section">
          <h2>Comment ça marche ?</h2>
          <p>
            Notre carte interactive affiche la position exacte de chaque food truck
            en temps réel. Les professionnels partagent leur localisation GPS, et vous
            pouvez les retrouver instantanément.
          </p>
        </div>

        <div className="feature-section">
          <h2>Fonctionnalités</h2>
          <ul className="feature-list">
            <li>Position GPS en temps réel des food trucks</li>
            <li>Filtres par type de cuisine</li>
            <li>Affichage des horaires d'ouverture</li>
            <li>Itinéraire vers le food truck</li>
            <li>Vue satellite ou plan</li>
          </ul>
        </div>
      </div>

      <div className="feature-cta">
        <h3>Prêt à trouver votre prochain repas ?</h3>
        <p>Téléchargez l'application et explorez les food trucks autour de vous.</p>
        <Link to="/applications" className="cta-btn">
          <FaDownload /> Télécharger l'app
        </Link>
      </div>
    </div>
  );
}

export default FeatureMapPage;
