// src/pages/PartnerRegisterPage.js - Version Landing
// Redirige vers app.foodmoov.com pour inscription partenaire
import React from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import { FaStar, FaHandshake } from "react-icons/fa";

// URL de l'application (configurable via env)
const APP_URL = import.meta.env.VITE_APP_URL || "https://app.foodmoov.com";

function PartnerRegisterPage() {
  return (
    <div className="register-container">
      <title>Devenir Partenaire - Foodmoov</title>
      <div className="register-form-wrapper" style={{ borderTop: "5px solid var(--primary-color)", maxWidth: "500px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <FaHandshake style={{ fontSize: "3rem", color: "var(--primary-color)" }} />
        </div>
        <h1 className="register-title">Devenir Partenaire</h1>
        <p className="register-subtitle">Rejoignez le réseau Foodmoov en tant qu'entreprise partenaire.</p>

        <div style={{ backgroundColor: "#e7f5ff", padding: "25px", borderRadius: "8px", marginBottom: "20px", border: "1px solid #74c0fc", textAlign: "center" }}>
          <p style={{ margin: "0 0 20px 0", color: "#1971c2", fontSize: "1.05rem", lineHeight: "1.6" }}>
            <strong>Avantages partenaire :</strong><br /><br />
            Accédez à notre réseau d'influenceurs et bénéficiez d'une visibilité accrue pour votre marque.
          </p>
          <div style={{ borderTop: "1px dashed #74c0fc", paddingTop: "20px", marginTop: "10px" }}>
            <p style={{ color: "#1971c2", marginBottom: "15px", fontSize: "0.95rem" }}>
              <strong>Prêt à nous rejoindre ?</strong>
            </p>
            <a
              href={`${APP_URL}/devenir-partenaire`}
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
              Créer mon compte partenaire
            </a>
            <p style={{ color: "#1971c2", margin: "20px 0 15px 0", fontSize: "0.95rem" }}>
              <strong>Déjà membre ?</strong>
            </p>
            <a
              href={`${APP_URL}/connexion`}
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
              Se connecter
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

export default PartnerRegisterPage;
