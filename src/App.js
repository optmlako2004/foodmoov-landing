// src/App.js - Landing Page Vitrine (foodmoov.com)
import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

// --- COMPOSANTS ---
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ScrollToTop from "./components/ScrollToTop.js";
import PageSkeleton from "./components/Skeleton.js";

// --- PAGES PRINCIPALES ---
const HomePage = lazy(() => import("./pages/HomePage.js"));
const ApplicationsPage = lazy(() => import("./pages/ApplicationsPage.js"));
const BlogPage = lazy(() => import("./pages/BlogPage.js"));
const SinglePostPage = lazy(() => import("./pages/SinglePostPage.js"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage.js"));

// --- PAGES FONCTIONNALITÉS ---
const FeatureMapPage = lazy(() => import("./pages/features/FeatureMapPage.js"));
const FeatureMenusPage = lazy(() => import("./pages/features/FeatureMenusPage.js"));
const FeatureProsPage = lazy(() => import("./pages/features/FeatureProsPage.js"));
const FeatureInfluencersPage = lazy(() => import("./pages/features/FeatureInfluencersPage.js"));
const FeatureReviewsPage = lazy(() => import("./pages/features/FeatureReviewsPage.js"));
const FeatureAlertsPage = lazy(() => import("./pages/features/FeatureAlertsPage.js"));
const FeatureSocialPage = lazy(() => import("./pages/features/FeatureSocialPage.js"));

// --- PAGES SECONDAIRES ---
const ProfessionalPage = lazy(() => import("./pages/ProfessionalPage.js"));
const PartnerPage = lazy(() => import("./pages/PartnerPage.js"));
const HelpPage = lazy(() => import("./pages/HelpPage.js"));
const SecurityPage = lazy(() => import("./pages/SecurityPage.js"));
const ContactPage = lazy(() => import("./pages/ContactPage.js"));
const MentionsLegalesPage = lazy(() => import("./pages/MentionsLegalesPage.js"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage.js"));
const BecomeInfluencerPage = lazy(() => import("./pages/BecomeInfluencerPage.js"));
const InfluencersListPage = lazy(() => import("./pages/InfluencersListPage.js"));
const InfluencerPage = lazy(() => import("./pages/InfluencerPage.js"));
const MenuPage = lazy(() => import("./pages/MenuPage.js"));
const AboutPage = lazy(() => import("./pages/AboutPage.js"));
const ClientPage = lazy(() => import("./pages/ClientPage.js"));
const EntreprisePage = lazy(() => import("./pages/EntreprisePage.js"));
const ServicePublicPage = lazy(() => import("./pages/ServicePublicPage.js"));
const BusinessChoicePage = lazy(() => import("./pages/BusinessChoicePage.js"));
const JoinChoicePage = lazy(() => import("./pages/JoinChoicePage.js"));

function AppContent() {
  const location = useLocation();

  // Pages où masquer le footer
  const hideFooterOn = [];

  const shouldHideFooter = hideFooterOn.some(path => location.pathname.startsWith(path));

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Foodmoov",
              "url": "https://foodmoov.com",
              "logo": "https://foodmoov.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@foodmoov.com",
                "contactType": "customer service",
                "availableLanguage": "French"
              }
            },
            {
              "@type": "WebSite",
              "name": "Foodmoov",
              "url": "https://foodmoov.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://app.foodmoov.com/recherche?address={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ]
        })}
      </script>

      <Header />
      <ScrollToTop />

      <main id="main-content">
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<HomePage />} />

          {/* Applications - Choix Client/Pro */}
          <Route path="/applications" element={<ApplicationsPage />} />

          {/* Pages Fonctionnalités */}
          <Route path="/fonctionnalites" element={<FeaturesPage />} />
          <Route path="/fonctionnalites/carte" element={<FeatureMapPage />} />
          <Route path="/fonctionnalites/menus" element={<FeatureMenusPage />} />
          <Route path="/fonctionnalites/professionnels" element={<FeatureProsPage />} />
          <Route path="/fonctionnalites/influenceurs" element={<FeatureInfluencersPage />} />
          <Route path="/fonctionnalites/avis" element={<FeatureReviewsPage />} />
          <Route path="/fonctionnalites/alertes" element={<FeatureAlertsPage />} />
          <Route path="/fonctionnalites/partage" element={<FeatureSocialPage />} />

          {/* Autres pages */}
          <Route path="/professionnels" element={<ProfessionalPage />} />
          <Route path="/rejoindre" element={<JoinChoicePage />} />
          <Route path="/devenir-partenaire" element={<PartnerPage />} />
          <Route path="/espace-client" element={<ClientPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/confidentialite" element={<PrivacyPolicyPage />} />
          <Route path="/securite" element={<SecurityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/aide" element={<HelpPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SinglePostPage />} />

          {/* Pages Influenceurs */}
          <Route path="/devenir-influenceur" element={<BecomeInfluencerPage />} />
          <Route path="/influenceurs" element={<InfluencersListPage />} />
          <Route path="/demander-influenceur" element={<InfluencerPage />} />

          {/* Page Menu (connexion/inscription) */}
          <Route path="/menu" element={<MenuPage />} />

          {/* Pages B2B */}
          <Route path="/business" element={<BusinessChoicePage />} />
          <Route path="/entreprise" element={<EntreprisePage />} />
          <Route path="/service-public" element={<ServicePublicPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      </main>

      {!shouldHideFooter && <Footer />}
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      delay: 0,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
