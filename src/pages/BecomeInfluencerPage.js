// src/pages/BecomeInfluencerPage.js - Page Vitrine Influenceurs
import { useAuth } from "../context/AuthContext";
import "./BecomeInfluencerPage.css";
import {
  FaStar,
  FaCamera,
  FaUtensils,
  FaUsers,
  FaArrowRight,
  FaInstagram,
  FaBullhorn,
  FaHeart,
} from "react-icons/fa";

function BecomeInfluencerPage() {
  const { getLoginUrl, APP_URL } = useAuth();

  return (
    <div className="influencer-landing">
      <title>Devenir Influenceur | Foodmoov</title>
      <meta
        name="description"
        content="Devenez influenceur Foodmoov et partagez votre passion pour la street food avec notre communauté."
      />
      <meta property="og:title" content="Devenir Influenceur | Foodmoov" />
      <meta property="og:description" content="Devenez influenceur Foodmoov et partagez votre passion pour la street food avec notre communauté." />
      <meta property="og:url" content="https://foodmoov.com/devenir-influenceur" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/devenir-influenceur" />

      {/* Hero Section */}
      <section className="influencer-hero-landing">
        <div className="influencer-hero-content">
          <span className="influencer-badge"><FaStar /> Influenceur</span>
          <h1>Devenez influenceur Foodmoov</h1>
          <p>
            Vous êtes passionné de street food et actif sur les réseaux sociaux ?
            Rejoignez notre communauté d'influenceurs et partagez les meilleures
            expériences food truck avec votre audience.
          </p>
          <div className="influencer-hero-actions">
            <a href={`${APP_URL}/inscription?role=influencer`} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Devenir influenceur <FaArrowRight />
            </a>
            <a href={getLoginUrl()} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              J'ai déjà un compte
            </a>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="influencer-benefits-section">
        <div className="section-header">
          <h2>Pourquoi devenir influenceur ?</h2>
          <p>Des avantages exclusifs pour les créateurs de contenu</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon"><FaUtensils /></div>
            <h3>Repas offerts</h3>
            <p>Dégustez gratuitement chez nos food trucks partenaires lors de vos collaborations.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><FaBullhorn /></div>
            <h3>Visibilité</h3>
            <p>Gagnez en visibilité auprès de notre communauté de gourmands et food truckers.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><FaUsers /></div>
            <h3>Réseau exclusif</h3>
            <p>Accédez à un réseau de food trucks et de partenaires pour des collaborations uniques.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><FaCamera /></div>
            <h3>Liberté créative</h3>
            <p>Créez du contenu authentique à votre image, en toute liberté.</p>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="influencer-how-section">
        <div className="section-header">
          <h2>Comment ça marche ?</h2>
          <p>3 étapes pour devenir influenceur</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon"><FaInstagram /></div>
            <h3>Inscrivez-vous</h3>
            <p>Créez votre compte influenceur et partagez vos réseaux sociaux.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon"><FaUtensils /></div>
            <h3>Recevez des invitations</h3>
            <p>Les food trucks vous invitent pour des dégustations offertes.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon"><FaHeart /></div>
            <h3>Partagez</h3>
            <p>Créez du contenu et partagez votre expérience sur vos réseaux.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="influencer-cta-section">
        <div className="cta-content">
          <h2>Prêt à devenir influenceur ?</h2>
          <p>Rejoignez la communauté Foodmoov et partagez votre passion pour la street food.</p>
          <div className="cta-buttons">
            <a href={`${APP_URL}/inscription?role=influencer`} className="btn-primary large" target="_blank" rel="noopener noreferrer">
              Devenir influenceur <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BecomeInfluencerPage;
