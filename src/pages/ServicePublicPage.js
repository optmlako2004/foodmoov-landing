// src/pages/ServicePublicPage.js - Page de présentation pour le service public
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaLandmark,
  FaCalendarAlt,
  FaUsers,
  FaHandshake,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
  FaTruck,
  FaCity,
  FaLeaf,
  FaShieldAlt,
  FaFileAlt,
} from "react-icons/fa";
import "./ServicePublicPage.css";

function ServicePublicPage() {
  const { APP_URL } = useAuth();

  const benefits = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Emplacements fixes",
      description: "Proposez des emplacements sur votre commune et recevez des candidatures de food truckers qualifiés.",
    },
    {
      icon: <FaCity />,
      title: "Animation locale",
      description: "Dynamisez vos places, marchés et zones d'activité avec une offre de restauration de rue variée.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Jours et horaires flexibles",
      description: "Définissez les jours de disponibilité, les créneaux horaires et la tarification de chaque emplacement.",
    },
    {
      icon: <FaFileAlt />,
      title: "Gestion simplifiée",
      description: "Suivez les candidatures des food truckers et gérez vos emplacements depuis votre tableau de bord.",
    },
    {
      icon: <FaLeaf />,
      title: "Circuit court",
      description: "Favorisez les producteurs locaux et les food trucks engagés dans une démarche durable.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Conformité garantie",
      description: "Tous les food trucks sont vérifiés : assurances, hygiène, autorisations à jour.",
    },
  ];

  const useCases = [
    {
      icon: <FaTruck />,
      title: "Places et parkings",
      description: "Proposez des emplacements sur vos places publiques ou parkings dédiés",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Marchés hebdomadaires",
      description: "Intégrez des food trucks à vos marchés avec des créneaux récurrents",
    },
    {
      icon: <FaCity />,
      title: "Zones d'activité",
      description: "Offrez une restauration de proximité dans vos zones industrielles ou commerciales",
    },
    {
      icon: <FaUsers />,
      title: "Événements ponctuels",
      description: "Fêtes municipales, festivals, foires et rassemblements publics",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Créez votre compte",
      description: "Inscrivez-vous en tant que collectivité et attendez la validation de votre compte.",
    },
    {
      number: "02",
      title: "Proposez un emplacement",
      description: "Renseignez le lieu, les jours disponibles, les horaires et la tarification.",
    },
    {
      number: "03",
      title: "Recevez des candidatures",
      description: "Les food truckers intéressés postulent. L'admin Foodmoov vous transmet les réponses.",
    },
    {
      number: "04",
      title: "Validez et accueillez",
      description: "Acceptez les food truckers qui vous conviennent et animez votre territoire.",
    },
  ];

  return (
    <div className="service-public-page">
      {/* Hero Section */}
      <section className="service-public-hero">
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-badge">
            <FaLandmark /> Service public
          </div>
          <h1>
            Proposez des <span className="highlight">emplacements aux food trucks</span>
          </h1>
          <p className="hero-subtitle">
            Mairies, communes, intercommunalités : proposez des emplacements fixes sur votre territoire
            et recevez des candidatures de food truckers vérifiés.
          </p>
          <div className="hero-cta">
            <a href={`${APP_URL}/service-public`} className="cta-primary" target="_blank" rel="noopener noreferrer">
              Proposer un emplacement <FaArrowRight />
            </a>
            <a href={`${APP_URL}/inscription?role=collectivity`} className="cta-secondary" target="_blank" rel="noopener noreferrer">
              Créer un compte
            </a>
          </div>
        </div>
        <div className="hero-visual" data-aos="fade-left">
          <div className="visual-card">
            <FaLandmark className="visual-icon" />
            <span>Foodmoov Public</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-public-benefits">
        <div className="section-header" data-aos="fade-up">
          <h2>Pourquoi choisir Foodmoov ?</h2>
          <p>Une solution adaptée aux exigences du service public</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="service-public-usecases">
        <div className="section-header" data-aos="fade-up">
          <h2>Pour quels types d'emplacements ?</h2>
          <p>Foodmoov s'adapte aux besoins de votre commune</p>
        </div>
        <div className="usecases-grid">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="usecase-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="usecase-icon">{useCase.icon}</div>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="service-public-steps">
        <div className="section-header" data-aos="fade-up">
          <h2>Comment ça marche ?</h2>
          <p>Un accompagnement sur mesure</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-public-cta">
        <div className="cta-content" data-aos="fade-up">
          <FaHandshake className="cta-icon" />
          <h2>Prêt à animer votre territoire ?</h2>
          <p>
            Créez votre compte collectivité et commencez à proposer des emplacements aux food truckers de votre région.
          </p>
          <div className="cta-buttons">
            <a href={`${APP_URL}/service-public`} className="cta-primary" target="_blank" rel="noopener noreferrer">
              Proposer un emplacement <FaArrowRight />
            </a>
            <a href={`${APP_URL}/inscription?role=collectivity`} className="cta-secondary" target="_blank" rel="noopener noreferrer">
              Créer un compte
            </a>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="service-public-features">
        <div className="features-content" data-aos="fade-up">
          <h2>Ce que vous obtenez</h2>
          <ul className="features-list">
            <li><FaCheckCircle /> Publication d'emplacements avec jours et horaires</li>
            <li><FaCheckCircle /> Réception des candidatures de food truckers vérifiés</li>
            <li><FaCheckCircle /> Tarification personnalisable (jour, semaine, mois)</li>
            <li><FaCheckCircle /> Tableau de bord dédié collectivité</li>
            <li><FaCheckCircle /> Médiation Foodmoov entre vous et les food truckers</li>
            <li><FaCheckCircle /> Conformité et vérification des partenaires</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ServicePublicPage;
