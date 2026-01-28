// src/pages/PartnerPage.js - Page Vitrine Partenaires
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";
import "./PartnerPage.css";
import {
  FaHandshake,
  FaGift,
  FaBullhorn,
  FaChartLine,
  FaArrowRight,
  FaUsers,
  FaStar,
  FaTruckMoving,
} from "react-icons/fa";

function PartnerPage() {
  const { getLoginUrl, APP_URL } = useAuth();
  const [stats, setStats] = useState({ partners: 0, influencers: 0, pros: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await api.get("/stats");
        setStats(data);
      } catch (error) {
        console.error("Erreur chargement stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="partner-landing">
      <title>Devenir Partenaire | Foodmoov</title>
      <meta
        name="description"
        content="Devenez partenaire Foodmoov et bénéficiez d'une visibilité auprès de notre communauté de gourmands et de food truckers."
      />

      {/* Hero Section */}
      <section className="partner-hero-landing">
        <div className="partner-hero-content">
          <span className="partner-badge">Partenariat</span>
          <h1>Devenez partenaire Foodmoov</h1>
          <p>
            Rejoignez notre écosystème et bénéficiez d'une visibilité unique auprès
            de notre communauté de gourmands, food truckers et influenceurs.
          </p>
          <div className="partner-hero-actions">
            <a href={`${APP_URL}/devenir-partenaire`} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Devenir partenaire <FaArrowRight />
            </a>
            <a href={getLoginUrl()} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              J'ai déjà un compte
            </a>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="partner-benefits-section">
        <div className="section-header">
          <h2>Pourquoi devenir partenaire ?</h2>
          <p>Des avantages exclusifs pour développer votre activité</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaBullhorn />
            </div>
            <h3>Visibilité maximale</h3>
            <p>Votre marque visible auprès de tous nos utilisateurs et food truckers.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaGift />
            </div>
            <h3>Codes promo</h3>
            <p>Diffusez vos codes promotionnels à notre communauté engagée.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaHandshake />
            </div>
            <h3>Réseau exclusif</h3>
            <p>Accédez à un réseau de professionnels de la street food.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <FaChartLine />
            </div>
            <h3>Analytics</h3>
            <p>Suivez les performances de vos offres en temps réel.</p>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="partner-how-section">
        <div className="section-header">
          <h2>Comment ça marche ?</h2>
          <p>3 étapes pour devenir partenaire</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon"><FaHandshake /></div>
            <h3>Inscrivez-vous</h3>
            <p>Créez votre compte partenaire et présentez votre entreprise.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon"><FaGift /></div>
            <h3>Créez vos offres</h3>
            <p>Ajoutez vos codes promo et offres spéciales pour la communauté.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon"><FaChartLine /></div>
            <h3>Développez-vous</h3>
            <p>Suivez vos performances et touchez de nouveaux clients.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="partner-stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <FaTruckMoving className="stat-icon" />
            <span className="stat-number">{stats.pros}+</span>
            <span className="stat-label">Food trucks</span>
          </div>
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <span className="stat-number">{stats.partners}</span>
            <span className="stat-label">Partenaires</span>
          </div>
          <div className="stat-item">
            <FaStar className="stat-icon" />
            <span className="stat-number">{stats.influencers}</span>
            <span className="stat-label">Influenceurs</span>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="partner-cta-section">
        <div className="cta-content">
          <h2>Prêt à rejoindre l'aventure ?</h2>
          <p>Devenez partenaire Foodmoov et développez votre visibilité dès aujourd'hui.</p>
          <div className="cta-buttons">
            <a href={`${APP_URL}/devenir-partenaire`} className="btn-primary large" target="_blank" rel="noopener noreferrer">
              Devenir partenaire <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnerPage;
