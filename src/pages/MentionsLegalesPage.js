// src/pages/MentionsLegalesPage.js - Page Mentions Légales Landing
import { Link } from "react-router-dom";
import "./MentionsLegalesPage.css";

function MentionsLegalesPage() {
  return (
    <div className="mentions-landing">
      {/* Hero Section */}
      <section className="mentions-hero">
        <div className="mentions-hero-content">
          <h1>Mentions Légales</h1>
          <p>En vigueur au {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="mentions-content-section">
        <div className="mentions-container">

          <div className="mentions-intro">
            <p>
              Conformément aux dispositions des Articles 6-III et 19 de la Loi
              n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie
              numérique, dite L.C.E.N., il est porté à la connaissance des
              utilisateurs et visiteurs du site Foodmoov les présentes mentions
              légales.
            </p>
            <p>
              Le site Foodmoov est accessible à l'adresse :
              <strong> https://foodmoov.com</strong> (ci-après "le Site").
              L'accès et l'utilisation du Site sont soumis aux présentes "Mentions
              légales" détaillées ci-après ainsi qu'aux lois et/ou règlements
              applicables.
            </p>
          </div>

          {/* Article 1 */}
          <div className="mentions-block">
            <h2>ARTICLE 1 - INFORMATIONS LÉGALES</h2>

            <h3>1.1. Éditeur du site</h3>
            <p>
              L'édition du site Foodmoov est assurée par :
              <br />
              <strong>Foodmoov</strong>
              <br />
              Statut juridique : <strong>[BIENTOT]</strong>
              <br />
              Capital social : <strong>[BIENTOT]</strong>
              <br />
              Siège social : 6, avenue du Parc 92400 COURBEVOIE - France
              <br />
              Numéro RCS : <strong>[BIENTOT]</strong>
              <br />
              Numéro de TVA intracommunautaire : <strong>[BIENTOT]</strong>
              <br />
              Téléphone : 06 51 63 51 01
              <br />
              Adresse e-mail : contact@foodmoov.com
              <br />
              Directeur de la publication : M. Mehar JEMAI
            </p>

            <h3>1.2. Hébergeur du site</h3>
            <p>
              L'hébergement du site Foodmoov est assuré par :
              <br />
              <strong>o2switch</strong>
              <br />
              Statut : SAS au capital de 100 000 euros
              <br />
              Siège social : Chem. des Pardiaux, 63000 Clermont-Ferrand, France
              <br />
              Téléphone : 04 44 44 60 40
              <br />
              RCS : Clermont-Ferrand – SIRET : 510 909 807 00032
            </p>
          </div>

          {/* Article 2 */}
          <div className="mentions-block">
            <h2>ARTICLE 2 - ACCESSIBILITÉ</h2>
            <p>
              Le Site est par principe accessible aux utilisateurs 24/24h et 7/7j,
              sauf interruption, programmée ou non, pour des besoins de
              maintenance ou en cas de force majeure.
            </p>
            <p>
              En cas d'impossibilité d'accès au Site, celui-ci s'engage à faire
              son maximum afin d'en rétablir l'accès. Le Site ne saurait être
              tenu pour responsable de tout dommage, quelle qu'en soit la nature,
              résultant de son indisponibilité.
            </p>
          </div>

          {/* Article 3 */}
          <div className="mentions-block">
            <h2>ARTICLE 3 - PROPRIÉTÉ INTELLECTUELLE</h2>
            <p>
              Tous les éléments du site Foodmoov (textes, logos, images, icônes,
              mises en page...) sont la propriété exclusive de
              <strong> Foodmoov</strong>.
            </p>
            <p>
              Sauf autorisation expresse, la reproduction ainsi que toute
              utilisation des œuvres autres que la consultation individuelle et
              privée sont interdites.
            </p>
          </div>

          {/* Article 4 */}
          <div className="mentions-block">
            <h2>ARTICLE 4 - COLLECTE DE DONNÉES</h2>
            <p>
              Le site assure à l'Utilisateur une collecte et un traitement
              d'informations personnelles dans le respect de la vie privée
              conformément à la loi n°78-17 du 6 janvier 1978 relative à
              l'informatique, aux fichiers et aux libertés.
            </p>
            <p>
              Pour plus d'informations sur la collecte et le traitement de vos
              données, veuillez consulter notre{" "}
              <Link to="/confidentialite">
                Politique de Confidentialité
              </Link>.
            </p>
          </div>

          {/* Article 5 */}
          <div className="mentions-block">
            <h2>ARTICLE 5 - COOKIES</h2>
            <p>
              L'Utilisateur est informé que lors de ses visites sur le site, un
              cookie peut s'installer automatiquement sur son logiciel de
              navigation. Pour plus d'informations, veuillez consulter notre{" "}
              <Link to="/confidentialite">
                Politique de Confidentialité
              </Link>.
            </p>
          </div>

          {/* Article 6 */}
          <div className="mentions-block">
            <h2>ARTICLE 6 - CONTACT</h2>
            <p>
              Pour tout signalement de contenus ou d'activités illicites,
              l'Utilisateur peut contacter l'Éditeur à l'adresse :
              contact@foodmoov.com, ou par courrier recommandé avec accusé
              de réception adressé à l'Éditeur aux coordonnées précisées à
              l'article 1.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default MentionsLegalesPage;
