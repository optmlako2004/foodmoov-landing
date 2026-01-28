// src/pages/HelpPage.js - Page d'aide
import React from "react";
import { Link } from "react-router-dom";
import "./HelpPage.css";

import {
  FaQuestionCircle,
  FaMapMarkerAlt,
  FaTruckMoving,
  FaStar,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";

const faqItems = [
  {
    category: "Utilisation",
    questions: [
      {
        q: "Comment trouver un food truck près de moi ?",
        a: "Téléchargez l'application Foodmood, activez la géolocalisation et consultez la carte interactive pour voir les food trucks actifs autour de vous."
      },
      {
        q: "Les informations sont-elles en temps réel ?",
        a: "Oui, les food trucks partagent leur position GPS en direct. La carte est mise à jour automatiquement."
      },
      {
        q: "Puis-je recevoir des notifications ?",
        a: "Oui, activez les notifications pour être alerté quand vos food trucks favoris s'installent près de chez vous."
      }
    ]
  },
  {
    category: "Professionnels",
    questions: [
      {
        q: "Comment inscrire mon food truck ?",
        a: "Téléchargez l'application Foodmoov Driver et créez votre compte professionnel. Vous pourrez ensuite partager votre position et gérer votre menu."
      },
      {
        q: "Foodmoov est-il gratuit pour les pros ?",
        a: "L'inscription et l'utilisation de base sont gratuites. Des options premium sont disponibles pour plus de visibilité."
      }
    ]
  },
  {
    category: "Influenceurs",
    questions: [
      {
        q: "Comment devenir influenceur Foodmoov ?",
        a: "Créez un compte influenceur sur notre plateforme. Vous pourrez ensuite envoyer des demandes de dégustation aux food trucks partenaires."
      },
      {
        q: "Quels sont les critères pour être accepté ?",
        a: "Vous devez avoir un compte Instagram ou TikTok actif avec du contenu orienté food ou lifestyle."
      }
    ]
  }
];

function HelpPage() {
  return (
    <div className="help-page">
      <div className="help-hero">
        <FaQuestionCircle className="help-icon" />
        <h1>Centre d'aide</h1>
        <p>Trouvez des réponses à vos questions</p>
      </div>

      {/* Quick Links */}
      <div className="help-quick-links">
        <Link to="/fonctionnalites/carte" className="quick-link">
          <FaMapMarkerAlt />
          <span>Carte interactive</span>
        </Link>
        <Link to="/fonctionnalites/professionnels" className="quick-link">
          <FaTruckMoving />
          <span>Espace Pro</span>
        </Link>
        <Link to="/fonctionnalites/influenceurs" className="quick-link">
          <FaStar />
          <span>Influenceurs</span>
        </Link>
        <Link to="/applications" className="quick-link">
          <FaMobileAlt />
          <span>Applications</span>
        </Link>
      </div>

      {/* FAQ */}
      <div className="help-faq">
        <h2>Questions fréquentes</h2>

        {faqItems.map((category, idx) => (
          <div key={idx} className="faq-category">
            <h3>{category.category}</h3>
            <div className="faq-list">
              {category.questions.map((item, qIdx) => (
                <details key={qIdx} className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="help-contact">
        <h3>Vous n'avez pas trouvé votre réponse ?</h3>
        <p>Contactez-nous et nous vous répondrons dans les plus brefs délais.</p>
        <a href="mailto:contact@foodmoov.com" className="contact-btn">
          <FaEnvelope /> contact@foodmoov.com
        </a>
      </div>
    </div>
  );
}

export default HelpPage;
