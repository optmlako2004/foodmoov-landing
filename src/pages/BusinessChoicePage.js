// src/pages/BusinessChoicePage.js - Choix Entreprise privée / Service public
import { Link } from "react-router-dom";
import { FaBuilding, FaLandmark, FaArrowRight } from "react-icons/fa";
import "./BusinessChoicePage.css";

function BusinessChoicePage() {
  return (
    <div className="business-choice-page">
      <title>Foodmoov for Business - Entreprises et Collectivités | Foodmoov</title>
      <meta name="description" content="Foodmoov for Business : solutions food truck pour entreprises privées et collectivités. Team building, séminaires, marchés et événements publics." />
      <meta property="og:title" content="Foodmoov for Business - Entreprises et Collectivités | Foodmoov" />
      <meta property="og:description" content="Solutions food truck pour entreprises privées et collectivités. Team building, séminaires, marchés et événements publics." />
      <meta property="og:url" content="https://foodmoov.com/business" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/business" />
      <div className="business-choice-container">
        <h1>Foodmoov for <span>Business</span></h1>
        <p>Choisissez votre type de structure pour découvrir nos solutions adaptées.</p>

        <div className="business-choice-grid">
          <Link to="/entreprise" className="business-choice-card">
            <div className="bc-icon"><FaBuilding /></div>
            <h2>Entreprise privée</h2>
            <p>Team building, séminaires, événements corporate... Offrez une expérience food truck unique à vos collaborateurs.</p>
            <span className="bc-link">Découvrir <FaArrowRight /></span>
          </Link>

          <Link to="/service-public" className="business-choice-card">
            <div className="bc-icon"><FaLandmark /></div>
            <h2>Service public</h2>
            <p>Marchés, festivals, événements municipaux... Dynamisez vos espaces publics avec des food trucks de qualité.</p>
            <span className="bc-link">Découvrir <FaArrowRight /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BusinessChoicePage;
