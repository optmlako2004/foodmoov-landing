// src/context/AuthContext.js - Version Landing (lecture seule)
// Détecte si l'utilisateur est connecté via le cookie partagé avec app.foodmoov.com
import React, { createContext, useState, useEffect, useContext } from "react";
import { getCookie } from "../utils/cookies";

// URL de l'application
const APP_URL = import.meta.env.VITE_APP_URL || "https://app.foodmoov.com";

// Créer le contexte
export const AuthContext = createContext(null);

// Hook personnalisé pour utiliser l'auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
};

// Fonction pour décoder un JWT sans bibliothèque externe
const decodeJWT = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    // silent
    return null;
  }
};

// Provider
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
    isAuthenticated: false,
    isAuthLoading: true,
  });

  // Vérifier le cookie au chargement
  useEffect(() => {
    const token = getCookie("foodmoov_token");

    if (token) {
      try {
        const decoded = decodeJWT(token);

        if (decoded && decoded.exp * 1000 > Date.now()) {
          // Token valide
          setAuthState({
            token: token,
            user: decoded,
            isAuthenticated: true,
            isAuthLoading: false,
          });
        } else {
          // Token expiré
          setAuthState({
            token: null,
            user: null,
            isAuthenticated: false,
            isAuthLoading: false,
          });
        }
      } catch (error) {
        // silent
        setAuthState({
          token: null,
          user: null,
          isAuthenticated: false,
          isAuthLoading: false,
        });
      }
    } else {
      // Pas de token
      setAuthState({
        token: null,
        user: null,
        isAuthenticated: false,
        isAuthLoading: false,
      });
    }
  }, []);

  // Fonction pour obtenir l'URL du dashboard selon le rôle
  const getDashboardUrl = () => {
    if (!authState.user) return `${APP_URL}/connexion`;

    const { role, influencerStatus, partnerStatus } = authState.user;

    if (role === 'admin') return `${APP_URL}/admin/dashboard`;
    if (role === 'influencer' && influencerStatus === 'validated') return `${APP_URL}/influencer/dashboard`;
    if (role === 'partner' || role === 'partner_pending') return `${APP_URL}/partner/dashboard`;
    if (role === 'pro') return `${APP_URL}/pro/dashboard`;
    if (role === 'enterprise' || role === 'collectivity') return `${APP_URL}/b2b/dashboard`;

    return `${APP_URL}/mon-compte`;
  };

  // Fonction pour obtenir l'URL de connexion (redirige vers l'app directement)
  const getLoginUrl = () => {
    return APP_URL;
  };

  // Fonction pour obtenir l'URL d'inscription
  const getRegisterUrl = () => {
    return `${APP_URL}/inscription`;
  };

  return (
    <AuthContext.Provider value={{
      authState,
      getDashboardUrl,
      getLoginUrl,
      getRegisterUrl,
      APP_URL
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
