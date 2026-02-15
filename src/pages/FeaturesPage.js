// src/pages/FeaturesPage.js - Page toutes les fonctionnalités
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FaMapMarkerAlt,
  FaUtensils,
  FaTruckMoving,
  FaStar,
  FaMobileAlt,
  FaHandshake,
  FaShieldAlt,
  FaHeart,
  FaSearch,
  FaBell,
  FaArrowRight,
  FaDownload
} from "react-icons/fa";
import "./FeaturesPage.css";

function FeaturesPage() {
  const { APP_URL } = useAuth();

  const mainFeatures = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Carte interactive",
      description: "Localisez les food trucks près de vous en temps réel. Visualisez leur position, leurs horaires et leur disponibilité.",
      link: "/fonctionnalites/carte",
      color: "orange"
    },
    {
      icon: <FaUtensils />,
      title: "Menus & Photos",
      description: "Consultez les menus complets avec photos, prix et descriptions. Découvrez les spécialités de chaque food truck.",
      link: "/fonctionnalites/menus",
      color: "orange"
    },
    {
      icon: <FaTruckMoving />,
      title: "Espace Professionnel",
      description: "Gérez votre food truck : planning, menu, photos, statistiques. Tout pour développer votre activité.",
      link: "/fonctionnalites/professionnels",
      color: "pro"
    },
    {
      icon: <FaStar />,
      title: "Programme Influenceurs",
      description: "Rejoignez notre réseau d'influenceurs. Partagez vos découvertes et gagnez des avantages exclusifs.",
      link: "/fonctionnalites/influenceurs",
      color: "influencer"
    }
  ];

  const secondaryFeatures = [
    {
      icon: <FaSearch />,
      title: "Recherche avancée",
      description: "Filtrez par cuisine, prix, distance ou disponibilité pour trouver exactement ce que vous cherchez."
    },
    {
      icon: <FaHeart />,
      title: "Favoris",
      description: "Enregistrez vos food trucks préférés pour les retrouver facilement et suivre leur actualité."
    },
    {
      icon: <FaBell />,
      title: "Notifications",
      description: "Soyez alerté quand vos food trucks favoris sont à proximité ou proposent des offres spéciales."
    },
    {
      icon: <FaMobileAlt />,
      title: "Application mobile",
      description: "Accédez à Foodmoov depuis votre smartphone, partout et à tout moment."
    },
    {
      icon: <FaHandshake />,
      title: "Partenariats",
      description: "Événements, festivals, entreprises : des solutions adaptées pour accueillir des food trucks."
    },
    {
      icon: <FaShieldAlt />,
      title: "Sécurité",
      description: "Vos données sont protégées avec les meilleures pratiques de sécurité et conformité RGPD."
    }
  ];

  return (
    <div className="features-landing">
      <title>Fonctionnalités - Carte, Menus, Avis et plus | Foodmoov</title>
      <meta name="description" content="Découvrez toutes les fonctionnalités de Foodmoov : carte interactive, menus détaillés, avis vérifiés, alertes en temps réel et espace professionnel." />
      <meta property="og:title" content="Fonctionnalités - Carte, Menus, Avis et plus | Foodmoov" />
      <meta property="og:description" content="Carte interactive, menus détaillés, avis vérifiés, alertes en temps réel et espace professionnel pour les food truckers." />
      <meta property="og:url" content="https://foodmoov.com/fonctionnalites" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/fonctionnalites" />
      {/* Hero Section */}
      <section className="features-hero">
        <div className="features-hero-content">
          <span className="features-badge">Toutes nos fonctionnalités</span>
          <h1>Découvrez tout ce que Foodmoov peut faire pour vous</h1>
          <p>
            Une plateforme complète pour connecter les amateurs de street-food
            avec les meilleurs food trucks de votre région.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="features-main-section">
        <div className="section-header">
          <h2>Fonctionnalités principales</h2>
          <p>Les outils essentiels pour une expérience street-food optimale</p>
        </div>
        <div className="features-main-grid">
          {mainFeatures.map((feature, index) => (
            <Link to={feature.link} key={index} className="feature-main-card">
              <div className={`feature-main-icon ${feature.color}`}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-main-arrow">
                En savoir plus <FaArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Secondary Features */}
      <section className="features-secondary-section">
        <div className="section-header">
          <h2>Et bien plus encore</h2>
          <p>Des fonctionnalités pensées pour simplifier votre quotidien</p>
        </div>
        <div className="features-secondary-grid">
          {secondaryFeatures.map((feature, index) => (
            <div key={index} className="feature-secondary-card">
              <div className="feature-secondary-icon">
                {feature.icon}
              </div>
              <div className="feature-secondary-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta-section">
        <div className="cta-content">
          <h2>Prêt à découvrir Foodmoov ?</h2>
          <p>Rejoignez des milliers d'utilisateurs qui trouvent leur bonheur street-food chaque jour</p>
          <div className="cta-buttons">
            <a href={APP_URL} className="btn-primary large" target="_blank" rel="noopener noreferrer">
              Accéder à l'application <FaArrowRight />
            </a>
            <Link to="/applications" className="btn-secondary">
              <FaDownload /> Télécharger
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesPage;
