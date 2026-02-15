// src/pages/HomePage.js - Landing Page Vitrine
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { useGooglePlacesSearch } from "../hooks/useGooglePlacesSearch";
import { api } from "../services/api";
import "./HomePage.css";

// CDN Cloudinary : f_auto (meilleur format), q_auto (qualité auto), w_400 (taille marquee)
const CDN = "https://res.cloudinary.com/dnmoehkux/image/upload/f_auto,q_auto,w_400/foodmoov_landing";

import {
  FaMapMarkerAlt,
  FaUtensils,
  FaClock,
  FaStar,
  FaBell,
  FaBolt,
  FaHeart,
  FaTruck,
  FaBuilding,
  FaArrowRight,
  FaApple,
  FaGooglePlay,
  FaMap,
  FaCalendarCheck,
  FaChartLine,
  FaShareAlt,
  FaShieldAlt,
  FaHeadset,
  FaChevronDown,
  FaFire,
  FaHamburger,
  FaHandshake,
  FaSearch,
} from "react-icons/fa";

const marqueeRow1 = [
  { name: "Logo 1", image: `${CDN}/row1/logo1.avif` },
  { name: "Pizza", image: `${CDN}/row1/pizza.jpg` },
  { name: "Frites", image: `${CDN}/row1/frites.jpg` },
  { name: "Logo 2", image: `${CDN}/row1/logo2.webp` },
  { name: "Burger", image: `${CDN}/row1/burger.webp` },
  { name: "Donuts", image: `${CDN}/row2/donuts.jpg` },
  { name: "Logo 3", image: `${CDN}/row1/logo3.webp` },
  { name: "Hot-dog", image: `${CDN}/row1/hotdog.jpg` },
  { name: "Noodles", image: `${CDN}/row1/noodles.webp` },
  { name: "Logo 4", image: `${CDN}/row1/logo4.jpg` },
];

const marqueeRow2 = [
  { name: "Kebab", image: `${CDN}/row1/kebab.avif` },
  { name: "Panini", image: `${CDN}/row1/panini.jpg` },
  { name: "Logo 5", image: `${CDN}/row1/logo5.jpg` },
  { name: "Gaufres", image: `${CDN}/row1/gaufres.jpg` },
  { name: "Pepperoni", image: `${CDN}/row1/pepperoni.jpg` },
  { name: "Logo 6", image: `${CDN}/row1/logo6.avif` },
  { name: "Burrito", image: `${CDN}/row2/burrito.jpg` },
  { name: "Fish & Chips", image: `${CDN}/row2/fishchips.jpg` },
  { name: "Logo 7", image: `${CDN}/row1/logo7.webp` },
  { name: "Nachos", image: `${CDN}/row2/nachos.jpg` },
];

// Images de bouffe uniquement pour la section "FOOD STRIP" (bas de page)
const foodOnlyItems = [
  { name: "Pizza", image: `${CDN}/row1/pizza.jpg` },
  { name: "Frites", image: `${CDN}/row1/frites.jpg` },
  { name: "Burger", image: `${CDN}/row1/burger.webp` },
  { name: "Hot-dog", image: `${CDN}/row1/hotdog.jpg` },
  { name: "Noodles", image: `${CDN}/row1/noodles.webp` },
  { name: "Kebab", image: `${CDN}/row1/kebab.avif` },
  { name: "Panini", image: `${CDN}/row1/panini.jpg` },
  { name: "Gaufres", image: `${CDN}/row1/gaufres.jpg` },
  { name: "Pepperoni", image: `${CDN}/row1/pepperoni.jpg` },
  { name: "Burrito", image: `${CDN}/row2/burrito.jpg` },
  { name: "Fish & Chips", image: `${CDN}/row2/fishchips.jpg` },
  { name: "Nachos", image: `${CDN}/row2/nachos.jpg` },
  { name: "Donuts", image: `${CDN}/row2/donuts.jpg` },
  { name: "Ramen", image: `${CDN}/row2/ramen.jpg` },
  { name: "Gyros", image: `${CDN}/row2/gyros.jpg` },
  { name: "Wings", image: `${CDN}/row2/istockphoto-510163478-612x612.jpg` },
  { name: "Crêpes", image: `${CDN}/row2/crepes.avif` },
  { name: "Churros", image: `${CDN}/row2/churros.jpg` },
];

const dropdownFeatures = [
  { icon: <FaMapMarkerAlt />, title: "Carte interactive", desc: "Localisez tous les food trucks en temps réel autour de vous.", link: "/fonctionnalites/carte" },
  { icon: <FaUtensils />, title: "Menus détaillés", desc: "Consultez les cartes complètes avec photos et prix.", link: "/fonctionnalites/menus" },
  { icon: <FaStar />, title: "Avis et notes", desc: "Des avis vérifiés pour choisir en toute confiance.", link: "/fonctionnalites/avis" },
  { icon: <FaBell />, title: "Alertes en temps réel", desc: "Recevez une notification quand votre food truck est proche.", link: "/fonctionnalites/alertes" },
  { icon: <FaCalendarCheck />, title: "Réservation d'événements", desc: "Privatisez un food truck pour vos événements.", link: "/entreprise" },
  { icon: <FaChartLine />, title: "Dashboard foodtrucker", desc: "Gérez votre activité avec des statistiques détaillées.", link: "/fonctionnalites/professionnels" },
  { icon: <FaShareAlt />, title: "Partage social", desc: "Partagez vos découvertes avec vos amis.", link: "/fonctionnalites/partage" },
  { icon: <FaShieldAlt />, title: "Paiement sécurisé", desc: "Transactions protégées pour une expérience sereine.", link: "/securite" },
  { icon: <FaHeadset />, title: "Support réactif", desc: "Une équipe disponible pour répondre à vos questions.", link: "/aide" },
];

function HomePage() {
  const { APP_URL } = useAuth();
  const location = useLocation();
  const toast = useToast();
  const [showFeatures, setShowFeatures] = useState(false);
  const [showNotifyForm, setShowNotifyForm] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyLoading, setNotifyLoading] = useState(false);

  // Address autocomplete (Google Places)
  const [searchAddress, setSearchAddress] = useState("");
  const [sugPos, setSugPos] = useState(null);
  const addrInputRef = useRef(null);
  const addrSugRef = useRef(null);
  const searchBarRef = useRef(null);
  const placesSearch = useGooglePlacesSearch();

  const handleAddrInput = useCallback((e) => {
    const val = e.target.value;
    setSearchAddress(val);
    placesSearch.search(val);
  }, [placesSearch]);

  const handleAddrSelect = useCallback(async (suggestion) => {
    setSearchAddress(suggestion.label);
    placesSearch.close();
    const details = await placesSearch.resolvePlace(suggestion.placeId);
    if (details) {
      window.location.href = `${APP_URL}/recherche?address=${encodeURIComponent(suggestion.label)}&lat=${details.lat}&lng=${details.lng}`;
    } else {
      window.location.href = `${APP_URL}/recherche?address=${encodeURIComponent(suggestion.label)}`;
    }
  }, [APP_URL, placesSearch]);

  const handleAddrSubmit = useCallback((e) => {
    e.preventDefault();
    if (placesSearch.suggestions.length > 0) {
      handleAddrSelect(placesSearch.suggestions[0]);
    } else if (searchAddress.length >= 3) {
      window.location.href = `${APP_URL}/recherche?address=${encodeURIComponent(searchAddress)}`;
    }
  }, [placesSearch.suggestions, handleAddrSelect, searchAddress, APP_URL]);

  const handleNotifySubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!notifyEmail) return;
    setNotifyLoading(true);
    try {
      await api.post("/subscribe", { email: notifyEmail });
      toast.success("Vous serez notifié dès que le Click & Collect sera disponible !");
      setNotifyEmail("");
      setShowNotifyForm(false);
    } catch (error) {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setNotifyLoading(false);
    }
  }, [notifyEmail, toast]);

  // Mémoiser les tableaux dupliqués pour les marquees
  const marqueeRow1Doubled = useMemo(() => [...marqueeRow1, ...marqueeRow1], []);
  const marqueeRow2Doubled = useMemo(() => [...marqueeRow2, ...marqueeRow2], []);
  const foodStripDoubled = useMemo(() => [...foodOnlyItems, ...foodOnlyItems], []);

  useEffect(() => {
    if (location.state?.scrollTo === "fonctionnalites") {
      setShowFeatures(true);
      setTimeout(() => {
        const el = document.getElementById("fonctionnalites");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      window.history.replaceState({}, "");
    }
  }, [location.state]);

  // Calcule la position du dropdown quand les suggestions sont visibles
  useEffect(() => {
    if (placesSearch.showSuggestions && placesSearch.suggestions.length > 0 && searchBarRef.current) {
      const rect = searchBarRef.current.getBoundingClientRect();
      setSugPos({ top: rect.bottom + 8, left: rect.left, width: rect.width });
    } else {
      setSugPos(null);
    }
  }, [placesSearch.showSuggestions, placesSearch.suggestions]);

  return (
    <div className="vitrine-home">
      <title>Foodmoov - Trouvez les meilleurs Food Trucks près de chez vous</title>
      <meta name="description" content="Foodmoov vous aide à localiser les food trucks autour de vous en temps réel, consulter leurs menus et découvrir la street-food en France." />
      <meta property="og:title" content="Foodmoov - Trouvez les meilleurs Food Trucks près de chez vous" />
      <meta property="og:description" content="Localisez les food trucks en temps réel, consultez les menus et découvrez la street-food en France avec Foodmoov." />
      <meta property="og:url" content="https://foodmoov.com/" />
      <meta property="og:image" content="https://foodmoov.com/logo.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://foodmoov.com/" />
      {/* ===== HERO ===== */}
      <section className="hero">
        <div
          className="hero-left"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=900&fit=crop&q=80)` }}
        />
        <div className="hero-content">
          <h1>Trouvez les <span>meilleurs food trucks</span> autour de vous</h1>
          <p>Entrez votre adresse pour découvrir les food trucks à proximité, consulter leurs menus et commander.</p>
          <form ref={searchBarRef} className="search-bar" onSubmit={handleAddrSubmit}>
            <FaMapMarkerAlt className="search-icon" />
            <input
              ref={addrInputRef}
              type="text"
              placeholder="Saisissez votre adresse..."
              value={searchAddress}
              onChange={handleAddrInput}
              onFocus={() => placesSearch.suggestions.length > 0 && placesSearch.search(searchAddress)}
              autoComplete="off"
            />
            <button type="submit" className="search-btn"><FaSearch /> Chercher</button>
          </form>
          {/* Suggestions via portal — échappe au overflow:hidden du hero */}
          {placesSearch.showSuggestions && placesSearch.suggestions.length > 0 && sugPos && createPortal(
            <ul className="hero-addr-suggestions" ref={addrSugRef} style={sugPos}>
              {placesSearch.suggestions.map((s) => (
                <li key={s.placeId} onClick={() => handleAddrSelect(s)}>
                  <FaMapMarkerAlt className="addr-sug-icon" />
                  <div className="addr-sug-text">
                    <span className="addr-sug-main">{s.name}</span>
                    <span className="addr-sug-sub">{s.secondary}</span>
                  </div>
                </li>
              ))}
              <li className="powered-by-google"><img src="https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3_hdpi.png" alt="Powered by Google" /></li>
            </ul>,
            document.body
          )}
          <div className="hero-sub">
            <a href={`${APP_URL}/connexion`}>Connectez-vous</a> pour retrouver vos adresses récentes.
          </div>
          <div className="hero-tags">
            <span><FaMapMarkerAlt /> Géolocalisation</span>
            <span><FaUtensils /> Menus en ligne bientôt</span>
            <span><FaClock /> Temps réel</span>
          </div>
        </div>
        <div
          className="hero-right"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=900&fit=crop&q=80)` }}
        />
      </section>

      {/* ===== FOOD MARQUEE ===== */}
      <section className="food-marquee">
        <div className="marquee-row">
          <div className="marquee-track marquee-left">
            {marqueeRow1Doubled.map((item, i) => (
              <div className="marquee-card" key={`r1-${i}`}>
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-row">
          <div className="marquee-track marquee-right">
            {marqueeRow2Doubled.map((item, i) => (
              <div className="marquee-card" key={`r2-${i}`}>
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPLIT SECTION ===== */}
      <section className="split-section">
        <div className="container">
          <div className="split-grid">
            <div className="split-text">
              <h2>Explorez la carte interactive des food trucks</h2>
              <p>Visualisez en temps réel tous les food trucks autour de vous. Consultez les menus, les avis et commandez directement depuis votre smartphone.</p>
              <div className="split-features">
                <div className="split-feature">
                  <div className="sf-icon"><FaMapMarkerAlt /></div>
                  <div>
                    <strong>Carte en temps réel</strong>
                    <span>Localisez les food trucks instantanément</span>
                  </div>
                </div>
                <div className="split-feature">
                  <div className="sf-icon"><FaStar /></div>
                  <div>
                    <strong>Avis vérifiés</strong>
                    <span>Consultez les retours des gourmands</span>
                  </div>
                </div>
                <div className="split-feature">
                  <div className="sf-icon"><FaBell /></div>
                  <div>
                    <strong>Notifications</strong>
                    <span>Soyez alerté quand votre food truck préféré est proche</span>
                  </div>
                </div>
              </div>
              <div className="app-badges">
                <Link to="/applications" className="app-badge">
                  <FaApple className="badge-icon" />
                  <div>
                    <span className="badge-small">Télécharger sur</span>
                    <span className="badge-big">App Store</span>
                  </div>
                </Link>
                <Link to="/applications" className="app-badge">
                  <FaGooglePlay className="badge-icon" />
                  <div>
                    <span className="badge-small">Disponible sur</span>
                    <span className="badge-big">Google Play</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="map-placeholder">
              <FaMap className="map-main-icon" />
              <span>Carte interactive</span>
              <FaMapMarkerAlt className="map-pin pin-1" />
              <FaMapMarkerAlt className="map-pin pin-2" />
              <FaMapMarkerAlt className="map-pin pin-3" />
              <FaMapMarkerAlt className="map-pin pin-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROMO BANNER ===== */}
      <section className="promo-banner">
        <span className="leaf-deco l1"><FaUtensils /></span>
        <span className="leaf-deco l2"><FaFire /></span>
        <span className="leaf-deco l3"><FaHamburger /></span>
        <span className="leaf-deco l4"><FaTruck /></span>
        <span className="leaf-deco l5"><FaStar /></span>
        <span className="leaf-deco l6"><FaMapMarkerAlt /></span>
        <div className="container">
          <div className="promo-inner">
            <span className="promo-badge"><FaBolt /> Bientôt</span>
            <h2>Click & Collect bientôt disponible</h2>
            <p>Commandez directement auprès de vos food trucks préférés</p>
            {!showNotifyForm ? (
              <button className="promo-btn" onClick={() => setShowNotifyForm(true)}><FaBell /> Être notifié</button>
            ) : (
              <form className="notify-form" onSubmit={handleNotifySubmit}>
                <input
                  type="email"
                  placeholder="Votre adresse e-mail..."
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  required
                  autoFocus
                />
                <button type="submit" disabled={notifyLoading}>
                  {notifyLoading ? "Envoi..." : "M'alerter"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== FOOD STRIP ===== */}
      <section className="food-strip">
        <div className="food-strip-inner">
          {foodStripDoubled.map((item, i) => (
            <div className="food-strip-item" key={i}>
              <span className="food-img">
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
              </span>
              <span className="food-label">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AUDIENCE SECTION ===== */}
      <section className="audience-section">
        <div className="container">
          <div className="audience-header">
            <span className="section-tag">Pour chacun d'entre vous</span>
            <h2>Foodmoov s'adapte à vos besoins</h2>
            <p>Que vous soyez un gourmand, un foodtrucker ou une entreprise, nous avons la solution qu'il vous faut.</p>
          </div>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon"><FaHeart /></div>
              <h3>Vous êtes gourmand ?</h3>
              <p>Trouvez les meilleurs food trucks près de chez vous et commandez en quelques clics.</p>
              <Link to="/applications" className="audience-link">Découvrir <FaArrowRight /></Link>
            </div>
            <div className="audience-card">
              <div className="audience-icon"><FaTruck /></div>
              <h3>Vous êtes foodtrucker ?</h3>
              <p>Rejoignez Foodmoov et touchez une clientèle toujours plus nombreuse. Votre visibilité est entre vos mains.</p>
              <a href={`${APP_URL}/inscription?role=pro`} className="audience-link" target="_blank" rel="noopener noreferrer">Nous rejoindre <FaArrowRight /></a>
            </div>
            <div className="audience-card">
              <div className="audience-icon"><FaBuilding /></div>
              <h3>Foodmoov for Business</h3>
              <p>Du team building aux événements corporate, nous avons la solution food truck pour tous vos événements professionnels.</p>
              <Link to="/business" className="audience-link">En savoir plus <FaArrowRight /></Link>
            </div>
            <div className="audience-card">
              <div className="audience-icon"><FaHandshake /></div>
              <h3>Devenir partenaire ou influenceur</h3>
              <p>Vous souhaitez collaborer avec Foodmoov ? Rejoignez notre réseau de partenaires ou notre programme influenceurs.</p>
              <Link to="/rejoindre" className="audience-link">Nous rejoindre <FaArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DROPDOWN FEATURES ===== */}
      <section className="dropdown-section" id="fonctionnalites">
        <div className="container">
          <div className="dropdown-toggle-wrap">
            <button
              className={`dropdown-toggle ${showFeatures ? 'active' : ''}`}
              onClick={() => setShowFeatures(!showFeatures)}
            >
              Toutes nos fonctionnalités <FaChevronDown className="toggle-chevron" />
            </button>
          </div>
          <div className={`dropdown-grid ${showFeatures ? 'open' : ''}`}>
            {dropdownFeatures.map((feat, i) => (
              <Link to={feat.link} className="dropdown-card" key={i}>
                <div className="dd-icon">{feat.icon}</div>
                <div className="dd-text">
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
