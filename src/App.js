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

function AppContent() {
  const location = useLocation();

  // Pages où masquer le footer
  const hideFooterOn = [];

  const shouldHideFooter = hideFooterOn.some(path => location.pathname.startsWith(path));

  return (
    <div className="App">
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Foodmoov",
            "url": "https://foodmoov.com",
            "logo": "https://foodmoov.com/logo.png"
          }
        `}
      </script>

      <Header />
      <ScrollToTop />

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

          {/* Autres pages */}
          <Route path="/professionnels" element={<ProfessionalPage />} />
          <Route path="/devenir-partenaire" element={<PartnerPage />} />
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

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>

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
