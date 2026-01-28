// src/pages/features/FeatureMenusPage.js
import React from "react";
import { Link } from "react-router-dom";
import { FaUtensils, FaDownload } from "react-icons/fa";
import "./FeaturePage.css";
import mockupImage from "../../assets/menu.png";

function FeatureMenusPage() {
  return (
    <div className="feature-page">
      <div className="feature-hero">
        <div className="feature-hero-icon">
          <FaUtensils />
        </div>
        <h1>Menus détaillés</h1>
        <p>
          Consultez les menus, les prix et les photos des plats
          avant de vous déplacer.
        </p>
      </div>

      <div className="feature-content">
        <div className="feature-image">
          <img src={mockupImage} alt="Menus Foodmoov" />
        </div>

        <div className="feature-section">
          <h2>Tout savoir avant de commander</h2>
          <p>
            Chaque food truck affiche son menu complet avec les prix,
            les ingrédients et les photos des plats. Plus de mauvaises surprises,
            vous savez exactement ce qui vous attend.
          </p>
        </div>

        <div className="feature-section">
          <h2>Ce que vous trouverez</h2>
          <ul className="feature-list">
            <li>Photos des plats</li>
            <li>Liste des ingrédients</li>
            <li>Prix affichés</li>
            <li>Options végétariennes/vegan signalées</li>
            <li>Allergènes indiqués</li>
          </ul>
        </div>
      </div>

      <div className="feature-cta">
        <h3>Explorez les menus</h3>
        <p>Téléchargez l'application et découvrez les plats qui vous attendent.</p>
        <Link to="/applications" className="cta-btn">
          <FaDownload /> Télécharger l'app
        </Link>
      </div>
    </div>
  );
}

export default FeatureMenusPage;
