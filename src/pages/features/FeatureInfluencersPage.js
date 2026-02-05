// src/pages/features/FeatureInfluencersPage.js
import React from "react";
import { FaStar } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext.js";
import "./FeaturePage.css";

function FeatureInfluencersPage() {
  const { APP_URL } = useAuth();

  return (
    <div className="feature-page">
      <div className="feature-hero">
        <div className="feature-hero-icon" style={{ background: "linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)", color: "#c2185b" }}>
          <FaStar />
        </div>
        <h1>Programme Influenceurs</h1>
        <p>
          Rejoignez notre réseau d'influenceurs food et profitez
          de dégustations offertes en échange de visibilité.
        </p>
      </div>

      <div className="feature-content">
        <div className="feature-section">
          <h2>Comment ça fonctionne ?</h2>
          <p>
            Les influenceurs food peuvent envoyer des demandes de dégustation
            aux food trucks partenaires. Si le food trucker accepte, vous
            bénéficiez d'un repas offert en échange d'une publication sur
            vos réseaux sociaux.
          </p>
        </div>

        <div className="feature-section">
          <h2>Avantages pour les influenceurs</h2>
          <ul className="feature-list">
            <li>Repas offerts dans les food trucks partenaires</li>
            <li>Découverte de nouvelles adresses</li>
            <li>Tableau de bord pour gérer vos demandes</li>
            <li>Mise en relation directe avec les food truckers</li>
            <li>Visibilité sur la plateforme Foodmoov</li>
          </ul>
        </div>

        <div className="feature-section">
          <h2>Critères pour devenir influenceur</h2>
          <ul className="feature-list">
            <li>Compte Instagram ou TikTok actif</li>
            <li>Contenu orienté food/lifestyle</li>
            <li>Engagement authentique avec votre communauté</li>
          </ul>
        </div>
      </div>

      <div className="feature-cta">
        <h3>Envie de rejoindre le programme ?</h3>
        <p>Créez votre compte influenceur et commencez à recevoir des dégustations.</p>
        <a href={`${APP_URL}/inscription?role=influencer`} className="cta-btn" target="_blank" rel="noopener noreferrer">
          Devenir influenceur
        </a>
      </div>
    </div>
  );
}

export default FeatureInfluencersPage;
