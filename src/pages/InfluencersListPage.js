// src/pages/InfluencersListPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api"; // <-- IMPORT DU NOUVEAU SERVICE
import "./InfluencersListPage.css";
import { FaHeart } from "react-icons/fa";

import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import tiktokLogo from "../assets/tiktok.png";
import twitterLogo from "../assets/twitter.png";
import defaultAvatar from "../assets/logo.png";

function InfluencersListPage() {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    api.get("/influencers/public")
      .then(data => {
        if (!cancelled) setInfluencers(data);
      })
      .catch(error => {
        if (!cancelled) {
          console.error("Erreur chargement influenceurs:", error);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return (
    <div className="influencers-page">
      <title>Nos Influenceurs - Foodmoov</title>
      <meta name="description" content="Découvrez les créateurs de contenu qui soutiennent la street-food et les food trucks sur Foodmoov." />

      <section className="influencers-hero">
        <div className="hero-content">
          <h1>Nos Influenceurs Partenaires</h1>
          <p>
            Ils parcourent les villes pour dénicher les meilleures pépites de la street-food.
            Suivez-les pour ne rien rater !
          </p>
          <Link to="/devenir-influenceur" className="join-btn">
            <FaHeart /> Devenir Influenceur
          </Link>
        </div>
      </section>

      <section className="influencers-grid-section">
        {loading ? (
          <div className="influencers-loading">Chargement des profils...</div>
        ) : influencers.length === 0 ? (
          <div className="no-influencers">
            <p>Aucun influenceur pour le moment. Soyez le premier !</p>
          </div>
        ) : (
          <div className="influencers-grid">
            {influencers.map((inf, index) => {
              const displayName = inf.username || `${inf.first_name || ""} ${inf.last_name || ""}`.trim() || "Influenceur Foodmoov";

              return (
                <div key={index} className="influencer-card">
                  <div className="card-image-wrapper">
                    <img 
                      src={inf.profile_image || defaultAvatar} 
                      alt={displayName} 
                      className="influencer-img"
                      onError={(e) => { e.currentTarget.src = defaultAvatar; }}
                    />
                  </div>
                  <div className="card-content">
                    <h3>{displayName}</h3>
                    <div className="social-buttons">
                      {inf.tiktok_link && (
                        <a href={inf.tiktok_link} target="_blank" rel="noreferrer" className="social-btn tiktok-img">
                          <img src={tiktokLogo} alt="TikTok" />
                        </a>
                      )}
                      {inf.instagram_link && (
                        <a href={inf.instagram_link} target="_blank" rel="noreferrer" className="social-btn instagram-img">
                          <img src={instagramLogo} alt="Instagram" />
                        </a>
                      )}
                      {inf.facebook_link && (
                        <a href={inf.facebook_link} target="_blank" rel="noreferrer" className="social-btn facebook-img">
                          <img src={facebookLogo} alt="Facebook" />
                        </a>
                      )}
                      {inf.twitter_link && (
                        <a href={inf.twitter_link} target="_blank" rel="noreferrer" className="social-btn twitter-img">
                          <img src={twitterLogo} alt="Twitter" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default InfluencersListPage;
