// src/pages/BecomeInfluencerPage.js - Version Landing
// Redirige vers app.foodmoov.com pour inscription/connexion
import React from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import { FaStar } from "react-icons/fa";

// URL de l'application (configurable via env)
const APP_URL = import.meta.env.VITE_APP_URL || "https://app.foodmoov.com";

function BecomeInfluencerPage() {
  return (
    <div className="register-container">
      <title>Devenir Influenceur - Foodmoov</title>
      <div className="register-form-wrapper" style={{ borderTop: "5px solid var(--primary-color)", maxWidth: "500px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <FaStar style={{ fontSize: "3rem", color: "var(--primary-color)" }} />
        </div>
        <h1 className="register-title">Devenir Influenceur</h1>
        <div style={{ backgroundColor: "#fff3cd", padding: "25px", borderRadius: "8px", marginBottom: "20px", border: "1px solid #ffc107", textAlign: "center" }}>
          <p style={{ margin: "0 0 20px 0", color: "#856404", fontSize: "1.05rem", lineHeight: "1.6" }}>
            <strong>Rejoignez notre communauté d'influenceurs !</strong><br /><br />
            Vous êtes passionné de street-food et vous avez une présence sur les réseaux sociaux ?
            Devenez influenceur Foodmoov !
          </p>
          <div style={{ borderTop: "1px dashed #ffc107", paddingTop: "20px", marginTop: "10px" }}>
            <p style={{ color: "#856404", marginBottom: "15px", fontSize: "0.95rem" }}>
              <strong>Vous avez déjà un compte Foodmoov ?</strong>
            </p>
            <a
              href={`${APP_URL}/connexion?redirect=/devenir-influenceur`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 30px",
                backgroundColor: "var(--primary-color)",
                color: "var(--dark-text)",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
                textDecoration: "none",
                marginBottom: "15px"
              }}
            >
              Se connecter
            </a>
            <p style={{ color: "#856404", margin: "20px 0 15px 0", fontSize: "0.95rem" }}>
              <strong>Nouveau sur Foodmoov ?</strong>
            </p>
            <a
              href={`${APP_URL}/inscription?role=influencer`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 30px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
                textDecoration: "none"
              }}
            >
              Créer mon compte influenceur
            </a>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/" style={{ color: "#666", textDecoration: "none" }}>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BecomeInfluencerPage;
