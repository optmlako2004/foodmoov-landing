// src/pages/features/FeatureProsPage.js
import React from "react";
import { Link } from "react-router-dom";
import { FaTruckMoving, FaDownload } from "react-icons/fa";
import "./FeaturePage.css";
import mockupImage from "../../assets/acceuil.png";

function FeatureProsPage() {
  return (
    <div className="feature-page">
      <title>Espace Professionnel Food Trucker - Foodmoov Driver | Foodmoov</title>
      <meta name="description" content="Gérez votre food truck avec Foodmoov Driver : partagez votre position GPS, gérez vos menus, recevez des demandes et développez votre clientèle." />
      <meta property="og:title" content="Espace Professionnel Food Trucker - Foodmoov Driver | Foodmoov" />
      <meta property="og:description" content="Gérez votre food truck avec Foodmoov Driver : position GPS, menus, statistiques et demandes d'influenceurs." />
      <meta property="og:url" content="https://foodmoov.com/fonctionnalites/professionnels" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/fonctionnalites/professionnels" />
      <div className="feature-hero">
        <div className="feature-hero-icon" style={{ background: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)", color: "#e65100" }}>
          <FaTruckMoving />
        </div>
        <h1>Espace Professionnel</h1>
        <p>
          Gérez votre food truck, partagez votre position et
          développez votre clientèle avec Foodmoov Driver.
        </p>
      </div>

      <div className="feature-content">
        <div className="feature-image">
          <img src={mockupImage} alt="Application Foodmoov Driver" />
        </div>

        <div className="feature-section">
          <h2>Pourquoi rejoindre Foodmoov ?</h2>
          <p>
            Foodmoov vous permet d'être visible par des milliers de gourmands
            à la recherche de street-food. Partagez votre position en un clic
            et laissez les clients venir à vous.
          </p>
        </div>

        <div className="feature-section">
          <h2>Fonctionnalités pour les pros</h2>
          <ul className="feature-list">
            <li>Partage de position GPS en temps réel</li>
            <li>Gestion de votre menu et photos</li>
            <li>Statistiques de visibilité</li>
            <li>Réception de demandes d'influenceurs</li>
            <li>Notifications push aux clients proches</li>
          </ul>
        </div>
      </div>

      <div className="feature-cta">
        <h3>Prêt à développer votre activité ?</h3>
        <p>Téléchargez Foodmoov Driver et gagnez en visibilité.</p>
        <Link to="/applications" className="cta-btn">
          <FaDownload /> Télécharger l'app Pro
        </Link>
      </div>
    </div>
  );
}

export default FeatureProsPage;
