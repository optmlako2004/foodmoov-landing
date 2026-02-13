// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Ce composant détecte les changements de route et remonte la fenêtre en haut de page.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      // Si l'URL contient un hash (#offres-pro, etc.), scroll vers l'élément
      setTimeout(() => {
        const el = document.getElementById(window.location.hash.substring(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Ce composant ne rend aucun élément visible sur la page.
  return null;
}

export default ScrollToTop;
