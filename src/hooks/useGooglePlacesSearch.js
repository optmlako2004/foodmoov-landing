// src/hooks/useGooglePlacesSearch.js
// Autocomplete d'adresse via Google Places (remplace api-adresse.data.gouv.fr)
import { useState, useRef, useCallback, useEffect } from "react";
import { useGoogleMaps } from "../context/GoogleMapsContext";

export function useGooglePlacesSearch({ types = ["address"] } = {}) {
  const { isLoaded } = useGoogleMaps();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const serviceRef = useRef(null);
  const sessionTokenRef = useRef(null);

  useEffect(() => {
    if (isLoaded && window.google) {
      serviceRef.current = new window.google.maps.places.AutocompleteService();
      sessionTokenRef.current =
        new window.google.maps.places.AutocompleteSessionToken();
    }
  }, [isLoaded]);

  const refreshSessionToken = useCallback(() => {
    if (window.google) {
      sessionTokenRef.current =
        new window.google.maps.places.AutocompleteSessionToken();
    }
  }, []);

  const search = useCallback(
    (query) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (!query || query.length < 3 || !serviceRef.current) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        serviceRef.current.getPlacePredictions(
          {
            input: query,
            componentRestrictions: { country: "fr" },
            sessionToken: sessionTokenRef.current,
            types,
          },
          (predictions, status) => {
            if (
              status ===
                window.google.maps.places.PlacesServiceStatus.OK &&
              predictions
            ) {
              const normalized = predictions.map((p) => ({
                placeId: p.place_id,
                label: p.description,
                name:
                  p.structured_formatting?.main_text || p.description,
                secondary:
                  p.structured_formatting?.secondary_text || "",
              }));
              setSuggestions(normalized);
              setShowSuggestions(true);
            } else {
              setSuggestions([]);
              setShowSuggestions(false);
            }
          }
        );
      }, 300);
    },
    [types]
  );

  const resolvePlace = useCallback(
    (placeId) => {
      return new Promise((resolve) => {
        if (!window.google) {
          resolve(null);
          return;
        }
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ placeId }, (results, status) => {
          refreshSessionToken();
          if (status === "OK" && results && results[0]) {
            const result = results[0];
            const location = result.geometry.location;
            const components = result.address_components || [];
            const getComponent = (type) => {
              const comp = components.find((c) => c.types.includes(type));
              return comp ? comp.long_name : null;
            };
            resolve({
              lat: location.lat(),
              lng: location.lng(),
              city:
                getComponent("locality") ||
                getComponent("administrative_area_level_2"),
              postcode: getComponent("postal_code"),
              formattedAddress: result.formatted_address,
            });
          } else {
            resolve(null);
          }
        });
      });
    },
    [refreshSessionToken]
  );

  const close = useCallback(() => {
    setShowSuggestions(false);
    setSuggestions([]);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    suggestions,
    showSuggestions,
    containerRef,
    search,
    close,
    resolvePlace,
    isReady: isLoaded,
  };
}
