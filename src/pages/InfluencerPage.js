// src/pages/InfluencerPage.js - Version Landing (redirige vers app pour le formulaire)
import React from "react";
import { Link } from "react-router-dom";
import "./InfluencerPage.css";
import {
  FaBullhorn, FaLightbulb, FaRocket, FaCheckCircle, FaLock
} from "react-icons/fa";

// URL de l'application (configurable via env)
const APP_URL = import.meta.env.VITE_APP_URL || "https://app.foodmoov.com";

function InfluencerPage() {
  return (
    <div className="influencer-page">
      <title>Demander un Influenceur pour votre Food Truck | Foodmoov</title>
      <meta name="description" content="Attirez plus de clients en invitant des influenceurs food dans votre food truck. Dégustation offerte en échange de visibilité sur les réseaux sociaux." />
      <meta property="og:title" content="Demander un Influenceur pour votre Food Truck | Foodmoov" />
      <meta property="og:description" content="Invitez des influenceurs food dans votre food truck et gagnez en visibilité sur les réseaux sociaux." />
      <meta property="og:url" content="https://foodmoov.com/influenceurs" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/influenceurs" />
      <section className="influencer-hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>Recevez des influenceurs</h1>
          <p>Attirez plus de clients dans votre food truck en invitant des créateurs de contenu.</p>
        </div>
      </section>
      <section className="how-it-works-section">
        <h2 data-aos="fade-up">Comment ça marche ?</h2>
        <div className="steps-grid">
          <div className="step-card" data-aos="fade-up" data-aos-delay="100"><div className="step-icon"><FaLightbulb /></div><h3>1. Faites la demande</h3><p>Connectez-vous et remplissez le formulaire.</p></div>
          <div className="step-card" data-aos="fade-up" data-aos-delay="200"><div className="step-icon"><FaBullhorn /></div><h3>2. Recevez l'influenceur</h3><p>Invitez-le pour une dégustation offerte.</p></div>
          <div className="step-card" data-aos="fade-up" data-aos-delay="300"><div className="step-icon"><FaRocket /></div><h3>3. Gagnez en visibilité</h3><p>Il partage son expérience sur ses réseaux.</p></div>
        </div>
      </section>
      <section className="influencer-grid-section">
        <div className="form-section" data-aos="fade-right">
          <h3>Demander un influenceur</h3>
          <div className="auth-lock-overlay" style={{ position: 'relative', background: 'rgba(255,255,255,0.95)', padding: '40px 30px', borderRadius: '12px', textAlign: 'center' }}>
            <FaLock size={40} color="#fca922" />
            <h4 style={{ marginTop: '20px', marginBottom: '15px' }}>Connexion requise</h4>
            <p style={{ marginBottom: '20px', color: '#666' }}>Vous devez être connecté pour envoyer une demande d'influenceur.</p>
            <a
              href={`${APP_URL}/connexion?redirect=/influenceurs`}
              className="submit-button"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'inline-block', width: 'auto', padding: '12px 30px', backgroundColor: 'var(--primary-color)', color: 'var(--dark-text)', fontWeight: 'bold', borderRadius: '8px' }}
            >
              Se connecter
            </a>
            <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#888' }}>
              Pas encore de compte ? <a href={`${APP_URL}/inscription?role=influencer`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>Créer un compte</a>
            </p>
          </div>
        </div>
        <div className="conditions-section" data-aos="fade-left">
          <h3>Conditions de participation</h3>
          <p>Pour garantir une collaboration réussie :</p>
          <ul>
            <li><FaCheckCircle className="check-icon" />Le food truck s'engage à offrir un repas (ou un menu défini) à l'influenceur et à son +1 (si convenu).</li>
            <li><FaCheckCircle className="check-icon" />L'influenceur est libre de son contenu (stories, posts, vidéos) mais doit respecter l'image de marque du food truck.</li>
            <li><FaCheckCircle className="check-icon" />Foodmoov agit en tant que simple intermédiaire et ne garantit pas le nombre de vues ou de nouveaux clients.</li>
            <li><FaCheckCircle className="check-icon" />Vous devez avoir un profil Instagram ou TikTok actif pour que les influenceurs puissent vous identifier.</li>
          </ul>
          <div className="conditions-footer"><p>Des questions ? <Link to="/contact">Contactez-nous</Link></p></div>
        </div>
      </section>
    </div>
  );
}

export default InfluencerPage;
