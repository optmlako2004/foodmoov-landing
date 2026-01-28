// src/pages/ProfessionalPage.js - Page Vitrine Pro (distincte de l'app)
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
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
  FaChartLine,
} from "react-icons/fa";

function ProfessionalPage() {
  const { getLoginUrl, APP_URL } = useAuth();
  const [stats, setStats] = useState({ clients: 0, pros: 0, cities: 3 });

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
    <div className="pro-landing">
      <title>Espace Professionnel - Foodmoov Driver | Foodmoov</title>
      <meta
        name="description"
        content="Rejoignez Foodmoov Driver. Donnez à votre food truck la visibilité qu'il mérite et connectez-vous à des milliers de clients."
      />

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

      {/* Stats Section */}
      <section className="pro-stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <FaChartLine className="stat-icon" />
            <span className="stat-number">{stats.pros}+</span>
            <span className="stat-label">Food trucks inscrits</span>
          </div>
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <span className="stat-number">{stats.clients}+</span>
            <span className="stat-label">Clients potentiels</span>
          </div>
          <div className="stat-item">
            <FaMapMarkerAlt className="stat-icon" />
            <span className="stat-number">{stats.cities}</span>
            <span className="stat-label">Villes couvertes</span>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="pro-cta-section">
        <div className="cta-content">
          <h2>Prêt à faire décoller votre activité ?</h2>
          <p>Rejoignez Foodmoov gratuitement et commencez à attirer de nouveaux clients dès aujourd'hui.</p>
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
