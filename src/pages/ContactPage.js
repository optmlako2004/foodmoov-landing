// src/pages/ContactPage.js - Page Contact Landing
import { useState } from "react";
import { api } from "../services/api";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck } from "react-icons/fa";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await api.post("/contact", formData);
      setStatus({ type: "success", message: "Message envoyé avec succès ! Nous vous répondrons rapidement." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-landing">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Nous contacter</h1>
          <p>Une question, une suggestion ou besoin d'aide ? Notre équipe est là pour vous.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Informations de contact</h2>
            <p>N'hésitez pas à nous contacter par email ou via le formulaire ci-contre.</p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:contact@foodmoov.com">contact@foodmoov.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">Adresse</span>
                  <span>France</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaPhone />
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">Téléphone</span>
                  <span>Sur demande</span>
                </div>
              </div>
            </div>

            <div className="contact-hours">
              <h3>Heures de réponse</h3>
              <p>Lundi - Vendredi : 9h - 18h</p>
              <p>Nous répondons généralement sous 24-48h.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="question">Question générale</option>
                  <option value="support">Support technique</option>
                  <option value="partnership">Partenariat</option>
                  <option value="professional">Espace professionnel</option>
                  <option value="feedback">Suggestion / Feedback</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre demande..."
                  rows={6}
                  disabled={isLoading}
                />
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.type === "success" && <FaCheck />}
                  {status.message}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? "Envoi en cours..." : (
                  <>
                    Envoyer le message <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
