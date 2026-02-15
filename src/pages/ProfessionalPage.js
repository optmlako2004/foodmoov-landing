// src/pages/ProfessionalPage.js - Page Vitrine Pro (distincte de l'app)
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { api } from "../services/api";
import "./ProfessionalPage.css";
import {
  FaToggleOn,
  FaEye,
  FaBolt,
  FaHandPointer,
  FaArrowRight,
  FaMapMarkerAlt,
  FaUsers,
  FaMobileAlt,
  FaCheck,
  FaCrown,
  FaStar,
} from "react-icons/fa";

function ProfessionalPage() {
  const { getLoginUrl, APP_URL } = useAuth();
  const toast = useToast();
  const [proPrice, setProPrice] = useState(2000); // fallback 2000 centimes

  useEffect(() => {
    api.get('/settings/pro-price').then(data => {
      if (data?.price) setProPrice(data.price);
    }).catch(() => { toast.error("Impossible de charger le prix de l'abonnement"); });
  }, []);

  return (
    <div className="pro-landing">
      <title>Espace Professionnel - Foodmoov Driver | Foodmoov</title>
      <meta
        name="description"
        content="Rejoignez Foodmoov Driver. Donnez à votre food truck la visibilité qu'il mérite et connectez-vous à des milliers de clients."
      />
      <meta property="og:title" content="Espace Professionnel - Foodmoov Driver | Foodmoov" />
      <meta property="og:description" content="Rejoignez Foodmoov Driver et donnez à votre food truck la visibilité qu'il mérite." />
      <meta property="og:url" content="https://foodmoov.com/professionnels" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/professionnels" />

      {/* Hero Section */}
      <section className="pro-hero-landing">
        <div className="pro-hero-content">
          <span className="pro-badge">Pour les professionnels</span>
          <h1>Développez votre activité avec Foodmoov Driver</h1>
          <p>
            Rejoignez notre réseau et connectez-vous à des milliers de clients affamés.
            Partagez votre position en temps réel et gagnez en visibilité.
          </p>
          <div className="pro-hero-actions">
            <a href={`${APP_URL}/inscription?role=pro`} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Créer mon compte Pro <FaArrowRight />
            </a>
            <a href={getLoginUrl()} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              J'ai déjà un compte
            </a>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="pro-benefits-section">
        <div className="section-header">
          <h2>Pourquoi choisir Foodmoov ?</h2>
          <p>Une solution pensée pour simplifier votre quotidien</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaToggleOn />
            </div>
            <h3>Contrôle Total</h3>
            <p>Apparaissez ou disparaissez de la carte quand vous le voulez. Vous gardez le contrôle.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaEye />
            </div>
            <h3>Visibilité Maximale</h3>
            <p>Soyez découvert par tous les utilisateurs de l'application dans votre zone.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaBolt />
            </div>
            <h3>Zéro Effort</h3>
            <p>Plus besoin de poster partout où vous êtes. Une seule app, tout le monde est prévenu.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaHandPointer />
            </div>
            <h3>Simple et Intuitif</h3>
            <p>Une interface conçue pour aller vite, sans fonctionnalités superflues.</p>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="pro-how-section">
        <div className="section-header">
          <h2>Comment ça marche ?</h2>
          <p>3 étapes pour commencer à attirer des clients</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon"><FaMobileAlt /></div>
            <h3>Créez votre profil</h3>
            <p>Inscrivez-vous gratuitement et ajoutez les informations de votre food truck.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon"><FaMapMarkerAlt /></div>
            <h3>Partagez votre position</h3>
            <p>Activez le partage de position et apparaissez sur la carte en temps réel.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon"><FaUsers /></div>
            <h3>Attirez des clients</h3>
            <p>Les utilisateurs vous trouvent et viennent découvrir vos spécialités.</p>
          </div>
        </div>
      </section>

      {/* Offre Pro */}
      <section className="pro-pricing-section" id="offres-pro">
        <div className="section-header">
          <h2>L'offre Pro</h2>
          <p>Boostez votre visibilité et développez votre activité</p>
        </div>
        <div className="pricing-single">
          <div className="pricing-card pricing-card-featured" data-aos="fade-up">
            <div className="pricing-popular-badge"><FaCrown /> Pro</div>
            <div className="pricing-card-header">
              <div className="pricing-icon featured"><FaStar /></div>
              <h3>Pro</h3>
              <p className="pricing-subtitle">Pour booster votre visibilité</p>
            </div>
            <div className="pricing-price">
              <span className="price-amount">{(proPrice / 100).toFixed(2).replace(/\.?0+$/, '')}€</span>
              <span className="price-period">/mois</span>
            </div>
            <ul className="pricing-features">
              <li className="feature-highlight"><FaCheck /> <strong>Site vitrine personnalisé via CMS</strong></li>
              <li className="feature-highlight"><FaCheck /> <strong>Sous-domaine gratuit</strong> (votretruck.foodmoov.com)</li>
              <li><FaCheck /> Accès aux emplacements proposés par les mairies</li>
              <li><FaCheck /> Demandes d'influenceurs</li>
              <li><FaCheck /> Dashboard avancé avec statistiques</li>
              <li><FaCheck /> Mise en avant sur la carte</li>
              <li><FaCheck /> Badge "Pro" vérifié</li>
              <li><FaCheck /> Support prioritaire</li>
            </ul>
            <a href={`${APP_URL}/inscription?role=pro`} className="pricing-btn pricing-btn-primary" target="_blank" rel="noopener noreferrer">
              Passer au Pro <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="pro-cta-section">
        <div className="cta-content">
          <h2>Pret a faire decoller votre activite ?</h2>
          <p>Rejoignez Foodmoov et commencez a attirer de nouveaux clients des aujourd'hui.</p>
          <div className="cta-buttons">
            <a href={`${APP_URL}/inscription?role=pro`} className="btn-primary large" target="_blank" rel="noopener noreferrer">
              Commencer gratuitement <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfessionalPage;
