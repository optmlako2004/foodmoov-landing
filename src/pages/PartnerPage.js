// src/pages/PartnerPage.js - Page Vitrine Partenaires
import { useAuth } from "../context/AuthContext";
import "./PartnerPage.css";
import {
  FaHandshake,
  FaGift,
  FaBullhorn,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

function PartnerPage() {
  const { getLoginUrl, APP_URL } = useAuth();

  return (
    <div className="partner-landing">
      <title>Devenir Partenaire | Foodmoov</title>
      <meta
        name="description"
        content="Devenez partenaire Foodmoov et bénéficiez d'une visibilité auprès de notre communauté de gourmands et de food truckers."
      />
      <meta property="og:title" content="Devenir Partenaire | Foodmoov" />
      <meta property="og:description" content="Devenez partenaire Foodmoov et bénéficiez d'une visibilité auprès de notre communauté de gourmands." />
      <meta property="og:url" content="https://foodmoov.com/devenir-partenaire" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/devenir-partenaire" />

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
            <a href={`${APP_URL}/inscription?role=partner`} className="btn-primary" target="_blank" rel="noopener noreferrer">
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

      {/* CTA Final */}
      <section className="partner-cta-section">
        <div className="cta-content">
          <h2>Prêt à rejoindre l'aventure ?</h2>
          <p>Devenez partenaire Foodmoov et développez votre visibilité dès aujourd'hui.</p>
          <div className="cta-buttons">
            <a href={`${APP_URL}/inscription?role=partner`} className="btn-primary large" target="_blank" rel="noopener noreferrer">
              Devenir partenaire <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnerPage;
