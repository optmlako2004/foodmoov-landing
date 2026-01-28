// src/pages/MenuPage.js - Version Landing
// Redirige vers app.foodmoov.com pour authentification
import React from "react";
import { Link } from "react-router-dom";
import "./MenuPage.css";

// URL de l'application (configurable via env)
const APP_URL = import.meta.env.VITE_APP_URL || "https://app.foodmoov.com";

function MenuPage() {
  return (
    <div className="menu-page-container">
      <title>Mon Foodmoov - Connexion ou Inscription</title>
      <meta name="description" content="Accédez à votre espace Foodmoov pour vous connecter, créer un compte ou devenir partenaire." />

      <h1 className="menu-page-title">Bienvenue sur Foodmoov</h1>

      <div className="menu-page-grid">
        {/* Boîte 1 : S'identifier - Lien externe vers app */}
        <div className="menu-card">
          <h2>Déjà un compte ?</h2>
          <p>Connectez-vous à votre espace pour gérer votre profil ou retrouver vos food trucks favoris.</p>
          <a href={`${APP_URL}/connexion`} className="menu-card-button primary" target="_blank" rel="noopener noreferrer">S'identifier</a>
        </div>

        {/* Boîte 2 : S'inscrire - Lien externe vers app */}
        <div className="menu-card">
          <h2>Nouvel utilisateur ?</h2>
          <p>Inscrivez-vous pour offrir de la visibilité à votre foodtruck ou rejoindre la communauté !</p>
          <a href={`${APP_URL}/inscription`} className="menu-card-button primary" target="_blank" rel="noopener noreferrer">S'inscrire</a>
        </div>

        {/* Boîte Influenceur - Reste sur landing */}
        <div className="menu-card influencer-card">
          <h2>Influenceur ?</h2>
          <p>Rejoignez notre programme partenaire et profitez de repas offerts en échange de visibilité.</p>
          <Link
            to="/devenir-influenceur"
            className="menu-card-button primary"
          >
            Devenir Influenceur
          </Link>
        </div>

        {/* Boîte Partenaire - Reste sur landing */}
        <div className="menu-card influencer-card">
          <h2>Partenaire ?</h2>
          <p>Rejoignez le réseau Foodmoov en tant qu'entreprise partenaire.</p>
          <Link
            to="/devenir-partenaire"
            className="menu-card-button primary"
          >
            Devenir Partenaire
          </Link>
        </div>

        {/* Boîte 4 : Contact - Reste sur landing */}
        <div className="menu-card contact-card">
          <h2>Une question ?</h2>
          <p>Notre équipe est à votre disposition pour répondre à toutes vos questions.</p>
          <Link to="/contact" className="menu-card-button secondary">Nous contacter</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
