// src/pages/ClientPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./ClientPage.css"; // Nous allons créer ce fichier juste après
import { FaStar } from "react-icons/fa";

// Import des captures d'écran de l'application Client
import appMockupMap from "../assets/client.png";
import appMockupList from "../assets/client1.png";

// Import des badges des stores
import appStoreBadge from "../assets/appstore.webp";
import googlePlayBadge from "../assets/playstore.webp";

function ClientPage() {
  // Liens de téléchargement pour l'application CLIENT
  const appStoreLink = "https://apps.apple.com/fr/app/foodmood/id6746414808";
  const googlePlayLink =
    "https://play.google.com/store/apps/details?id=com.arkone.foodtruckview";

  return (
    <div className="client-page">
      <title>Espace Client - L'Application Foodmoov</title>
      <meta
        name="description"
        content="Téléchargez l'application Foodmoov pour trouver les meilleurs food trucks près de chez vous en temps réel."
      />

      {/* --- Section Héros pour les Clients --- */}
      <section className="client-hero">
        <div className="client-hero-content">
          <h1>L'Expérience Foodmoov dans Votre Poche</h1>
          <p className="subtitle">
            Localisez vos food trucks favoris en temps réel, consultez les
            menus, et ne manquez plus jamais une occasion de vous régaler.
          </p>
          <div className="app-badges">
            <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
              <img
                src={appStoreBadge}
                alt="Télécharger sur l'App Store"
                className="badge-img"
              />
            </a>
            <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
              <img
                src={googlePlayBadge}
                alt="Disponible sur Google Play"
                className="badge-img"
              />
            </a>
          </div>
        </div>
      </section>

      {/* --- Section des Fonctionnalités --- */}
      <section className="client-features">
        <h2>Une Application Conçue pour les Gourmands</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-up">
            <img
              src={appMockupMap}
              alt="Application Foodmoov Carte"
              className="feature-img"
            />
            <h3>1. Explorez la Carte</h3>
            <p>
              Visualisez tous les food trucks actifs autour de vous en temps
              réel. Fini les devinettes, trouvez votre déjeuner en un clin
              d'œil.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <img
              src={appMockupList}
              alt="Application Foodmoov Liste"
              className="feature-img"
            />
            <h3>2. Découvrez les Menus</h3>
            <p>
              Consultez la liste des food trucks, leurs spécialités, leurs
              horaires et leurs photos. Faites votre choix avant même de vous
              déplacer.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section Demander un Influenceur (pour les Pros) --- */}
      <section className="client-influencer-cta" style={{
        backgroundColor: '#fff8e7',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FaStar size={50} color="#fca922" style={{ marginBottom: '20px' }} />
          <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '15px' }}>
            Vous etes proprietaire d'un food truck ?
          </h2>
          <p style={{
            color: '#666',
            fontSize: '1.1rem',
            lineHeight: '1.7',
            marginBottom: '25px'
          }}>
            Boostez votre visibilite en faisant appel a nos influenceurs food.
            Ils partageront leur experience avec leur communaute et attireront
            de nouveaux clients vers votre food truck.
          </p>
          <Link
            to="/influenceurs"
            style={{
              display: 'inline-block',
              padding: '15px 35px',
              backgroundColor: '#fca922',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.2s'
            }}
          >
            Demander un influenceur
          </Link>
          <p style={{
            marginTop: '15px',
            fontSize: '0.9rem',
            color: '#888'
          }}>
            Reserve aux professionnels avec abonnement Pro
          </p>
        </div>
      </section>

      {/* --- Dernier Appel à l'Action --- */}
      <section className="client-cta-final">
        <h2>Pret a trouver votre prochain repas ?</h2>
        <div className="app-badges">
          <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
            <img
              src={appStoreBadge}
              alt="Télécharger sur l'App Store"
              className="badge-img"
            />
          </a>
          <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
            <img
              src={googlePlayBadge}
              alt="Disponible sur Google Play"
              className="badge-img"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ClientPage;