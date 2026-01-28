// src/pages/features/FeatureMapPage.js
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import "./FeaturePage.css";
import mockupImage from "../../assets/app-map.png";

function FeatureMapPage() {
  return (
    <div className="feature-page">
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
