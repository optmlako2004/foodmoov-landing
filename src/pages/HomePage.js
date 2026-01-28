// src/pages/HomePage.js - Page Vitrine Landing
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";
import "./HomePage.css";

import {
  FaMapMarkerAlt,
  FaUtensils,
  FaTruckMoving,
  FaStar,
  FaArrowRight,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

import heroImage from "../assets/app-map.png";

function HomePage() {
  const { APP_URL } = useAuth();
  const [stats, setStats] = useState({
    clients: 0,
    pros: 0,
    influencers: 0,
    partners: 0,
    total: 0,
    cities: 3
  });

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
    <div className="vitrine-home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">La plateforme des food trucks</span>
          <h1>Trouvez les meilleurs food trucks autour de vous</h1>
          <p>
            Foodmoov connecte les gourmands avec les meilleurs food trucks de votre ville.
            Carte interactive, menus détaillés et position en temps réel.
          </p>
          <div className="hero-actions">
            <a href={APP_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
              Accéder à l'application <FaArrowRight />
            </a>
            <Link to="/professionnels" className="btn-secondary">
              Je suis professionnel
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Application Foodmoov" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <span className="stat-number">{stats.clients}+</span>
            <span className="stat-label">Clients inscrits</span>
          </div>
          <div className="stat-item">
            <FaTruckMoving className="stat-icon" />
            <span className="stat-number">{stats.pros}+</span>
            <span className="stat-label">Food trucks</span>
          </div>
          <div className="stat-item">
            <FaStar className="stat-icon" />
            <span className="stat-number">{stats.influencers}</span>
            <span className="stat-label">Influenceurs</span>
          </div>
          <div className="stat-item">
            <FaHandshake className="stat-icon" />
            <span className="stat-number">{stats.partners}</span>
            <span className="stat-label">Partenaires</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="features-header">
          <h2>Tout ce dont vous avez besoin</h2>
          <p>Une application pensée pour les amateurs de street food</p>
        </div>
        <div className="features-grid">
          <Link to="/fonctionnalites/carte" className="feature-card">
            <div className="feature-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Carte interactive</h3>
            <p>Visualisez les food trucks actifs autour de vous en temps réel.</p>
            <span className="feature-arrow">→</span>
          </Link>

          <Link to="/fonctionnalites/menus" className="feature-card">
            <div className="feature-icon">
              <FaUtensils />
            </div>
            <h3>Menus détaillés</h3>
            <p>Consultez les plats, les prix et les photos avant de vous déplacer.</p>
            <span className="feature-arrow">→</span>
          </Link>

          <Link to="/fonctionnalites/professionnels" className="feature-card">
            <div className="feature-icon pro">
              <FaTruckMoving />
            </div>
            <h3>Espace Pro</h3>
            <p>Food truckers, partagez votre position et développez votre clientèle.</p>
            <span className="feature-arrow">→</span>
          </Link>

          <Link to="/fonctionnalites/influenceurs" className="feature-card">
            <div className="feature-icon influencer">
              <FaStar />
            </div>
            <h3>Influenceurs</h3>
            <p>Rejoignez notre réseau et profitez de dégustations offertes.</p>
            <span className="feature-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à découvrir les food trucks près de chez vous ?</h2>
          <p>Rejoignez des milliers d'utilisateurs qui utilisent Foodmoov chaque jour.</p>
          <div className="cta-buttons">
            <a href="https://app.foodmoov.com" className="btn-primary large" target="_blank" rel="noopener noreferrer">
              Lancer l'application <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
