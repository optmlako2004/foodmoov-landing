// src/context/GoogleMapsContext.js
import React, { createContext, useContext } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const LIBRARIES = ["places"];

const GoogleMapsContext = createContext({ isLoaded: false, loadError: null });

export function GoogleMapsProvider({ children }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries: LIBRARIES,
  });

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, loadError }}>
      {children}
    </GoogleMapsContext.Provider>
  );
}

export function useGoogleMaps() {
  return useContext(GoogleMapsContext);
}
