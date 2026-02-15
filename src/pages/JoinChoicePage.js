// src/pages/JoinChoicePage.js - Choix Partenaire / Influenceur
import { Link } from "react-router-dom";
import { FaHandshake, FaStar, FaArrowRight } from "react-icons/fa";
import "./JoinChoicePage.css";

function JoinChoicePage() {
  return (
    <div className="join-choice-page">
      <title>Rejoindre Foodmoov - Partenaire ou Influenceur | Foodmoov</title>
      <meta name="description" content="Rejoignez Foodmoov en tant que partenaire ou influenceur food. Développez votre visibilité et collaborez avec notre réseau de food trucks." />
      <meta property="og:title" content="Rejoindre Foodmoov - Partenaire ou Influenceur | Foodmoov" />
      <meta property="og:description" content="Rejoignez Foodmoov en tant que partenaire ou influenceur food et développez votre visibilité." />
      <meta property="og:url" content="https://foodmoov.com/rejoindre" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/rejoindre" />
      <div className="join-choice-container">
        <h1>Rejoignez <span>Foodmoov</span></h1>
        <p>Choisissez votre profil pour découvrir comment collaborer avec nous.</p>

        <div className="join-choice-grid">
          <Link to="/devenir-partenaire" className="join-choice-card">
            <div className="jc-icon"><FaHandshake /></div>
            <h2>Devenir partenaire</h2>
            <p>Vous êtes un commerce, un lieu événementiel ou une marque ? Associez-vous à Foodmoov et développez votre visibilité auprès de nos utilisateurs.</p>
            <span className="jc-link">En savoir plus <FaArrowRight /></span>
          </Link>

          <Link to="/devenir-influenceur" className="join-choice-card">
            <div className="jc-icon"><FaStar /></div>
            <h2>Devenir influenceur</h2>
            <p>Vous êtes passionné de street food et avez une communauté engagée ? Rejoignez notre programme influenceurs et partagez vos découvertes.</p>
            <span className="jc-link">En savoir plus <FaArrowRight /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinChoicePage;
