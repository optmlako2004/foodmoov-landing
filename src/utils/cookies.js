// src/utils/cookies.js
// Utilitaires pour gérer les cookies cross-subdomain

/**
 * Récupère la valeur d'un cookie
 * @param {string} name - Nom du cookie
 * @returns {string|null} - Valeur du cookie ou null
 */
export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
};

/**
 * Vérifie si un cookie existe
 * @param {string} name - Nom du cookie
 * @returns {boolean}
 */
export const hasCookie = (name) => {
  return getCookie(name) !== null;
};
