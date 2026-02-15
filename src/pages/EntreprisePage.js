// src/pages/EntreprisePage.js - Page de présentation pour les entreprises
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaBuilding,
  FaCalendarAlt,
  FaUsers,
  FaUtensils,
  FaHandshake,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaTruck,
  FaGift,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import "./EntreprisePage.css";

function EntreprisePage() {
  const { APP_URL } = useAuth();

  const benefits = [
    {
      icon: <FaUtensils />,
      title: "Diversité culinaire",
      description: "Accédez à une large sélection de food trucks proposant des cuisines variées pour satisfaire tous les goûts.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Organisation simplifiée",
      description: "Planifiez vos événements d'entreprise en quelques clics : séminaires, team buildings, pauses déjeuner.",
    },
    {
      icon: <FaUsers />,
      title: "Satisfaction employés",
      description: "Offrez une expérience culinaire unique qui renforce la cohésion d'équipe et le bien-être au travail.",
    },
    {
      icon: <FaChartLine />,
      title: "Gestion centralisée",
      description: "Suivez vos commandes, gérez vos budgets et accédez à l'historique de vos événements.",
    },
    {
      icon: <FaClock />,
      title: "Gain de temps",
      description: "Plus besoin de chercher des prestataires : tout est centralisé sur une seule plateforme.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Partenaires vérifiés",
      description: "Tous nos food trucks sont vérifiés et respectent les normes d'hygiène et de sécurité alimentaire.",
    },
  ];

  const useCases = [
    {
      icon: <FaGift />,
      title: "Événements d'entreprise",
      description: "Anniversaires, inaugurations, lancements de produits",
    },
    {
      icon: <FaUsers />,
      title: "Team building",
      description: "Renforcez la cohésion de vos équipes autour d'un moment convivial",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Séminaires",
      description: "Restauration sur mesure pour vos journées de formation",
    },
    {
      icon: <FaTruck />,
      title: "Pause déjeuner",
      description: "Service régulier de food trucks sur votre site",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Créez votre compte entreprise",
      description: "Inscrivez-vous gratuitement et accédez à votre espace dédié.",
    },
    {
      number: "02",
      title: "Décrivez votre besoin",
      description: "Type d'événement, nombre de personnes, préférences culinaires.",
    },
    {
      number: "03",
      title: "Recevez des propositions",
      description: "Foodmoov sélectionne les food trucks adaptés et vous transmet leurs propositions.",
    },
    {
      number: "04",
      title: "Validez et profitez",
      description: "Confirmez votre réservation et laissez-nous gérer le reste.",
    },
  ];

  return (
    <div className="entreprise-page">
      <title>Food Trucks pour Entreprises - Événements Corporate | Foodmoov</title>
      <meta name="description" content="Organisez vos événements d'entreprise avec des food trucks : team building, séminaires, pauses déjeuner. Demandez un devis gratuit sur Foodmoov." />
      <meta property="og:title" content="Food Trucks pour Entreprises - Événements Corporate | Foodmoov" />
      <meta property="og:description" content="Organisez vos événements d'entreprise avec des food trucks de qualité. Team building, séminaires, pauses déjeuner." />
      <meta property="og:url" content="https://foodmoov.com/entreprise" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/entreprise" />
      {/* Hero Section */}
      <section className="entreprise-hero">
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-badge">
            <FaBuilding /> Entreprise privée
          </div>
          <h1>
            Des food trucks pour vos <span className="highlight">événements d'entreprise</span>
          </h1>
          <p className="hero-subtitle">
            Simplifiez l'organisation de vos événements professionnels avec Foodmoov.
            Accédez à un réseau de food trucks de qualité pour satisfaire vos collaborateurs.
          </p>
          <div className="hero-cta">
            <a href={`${APP_URL}/entreprise-privee`} className="cta-primary" target="_blank" rel="noopener noreferrer">
              Demander un food truck <FaArrowRight />
            </a>
            <a href={`${APP_URL}/inscription?role=enterprise`} className="cta-secondary" target="_blank" rel="noopener noreferrer">
              Créer un compte
            </a>
          </div>
        </div>
        <div className="hero-visual" data-aos="fade-left">
          <div className="visual-card">
            <FaBuilding className="visual-icon" />
            <span>Foodmoov Business</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="entreprise-benefits">
        <div className="section-header" data-aos="fade-up">
          <h2>Pourquoi choisir Foodmoov ?</h2>
          <p>Une solution complète pour vos besoins de restauration d'entreprise</p>
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
      <section className="entreprise-usecases">
        <div className="section-header" data-aos="fade-up">
          <h2>Pour tous vos besoins</h2>
          <p>Foodmoov s'adapte à chaque situation</p>
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
      <section className="entreprise-steps">
        <div className="section-header" data-aos="fade-up">
          <h2>Comment ça marche ?</h2>
          <p>En 4 étapes simples</p>
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
      <section className="entreprise-cta">
        <div className="cta-content" data-aos="fade-up">
          <FaHandshake className="cta-icon" />
          <h2>Prêt à simplifier vos événements ?</h2>
          <p>
            Rejoignez les entreprises qui font confiance à Foodmoov pour leurs besoins de restauration.
          </p>
          <div className="cta-buttons">
            <a href={`${APP_URL}/entreprise-privee`} className="cta-primary" target="_blank" rel="noopener noreferrer">
              Demander un food truck <FaArrowRight />
            </a>
            <a href={`${APP_URL}/inscription?role=enterprise`} className="cta-secondary" target="_blank" rel="noopener noreferrer">
              Créer un compte
            </a>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="entreprise-features">
        <div className="features-content" data-aos="fade-up">
          <h2>Ce que vous obtenez</h2>
          <ul className="features-list">
            <li><FaCheckCircle /> Accès à tous les food trucks du réseau</li>
            <li><FaCheckCircle /> Tableau de bord dédié entreprise</li>
            <li><FaCheckCircle /> Gestion multi-sites</li>
            <li><FaCheckCircle /> Facturation centralisée</li>
            <li><FaCheckCircle /> Support prioritaire</li>
            <li><FaCheckCircle /> Rapports et statistiques</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default EntreprisePage;
