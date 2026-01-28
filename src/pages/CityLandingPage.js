// src/pages/CityLandingPage.js - Version Landing (sans auth)
import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CityLandingPage.css';
import logo from '../assets/logo.png';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';

// Coordonnées pour centrer la carte
const CITY_COORDS = {
  paris: { center: [48.86, 2.34], zoom: 12, name: 'Paris' },
  lyon: { center: [45.764, 4.8357], zoom: 12, name: 'Lyon' },
  marseille: { center: [43.2965, 5.3698], zoom: 12, name: 'Marseille' },
};

const realTruckData = [
  { id: 1, name: "fly burger" }, { id: 2, name: "Kiosque du parc" },
  { id: 3, name: "Bko braise" }, { id: 4, name: "Breizh Truck" },
  { id: 6, name: "Circus Street Food" }, { id: 7, name: "Bistrot food" },
  { id: 8, name: "CHICKEN WORLD" }, { id: 9, name: "food truck sénégalais" },
  { id: 10, name: "GLACES MARTINEZ MONTREUIL 93" }, { id: 12, name: "Savoyard food truck" },
  { id: 13, name: "Puter truck" }, { id: 14, name: "Burgers food truck" },
  { id: 17, name: "Cristian Vincenzo pesce" }, { id: 27, name: "CityBurger" },
  { id: 28, name: "Dolce Bakery" }, { id: 29, name: "WAFFLEN TRUCK" },
  { id: 30, name: "Le crêpe pan Food And Co" }, { id: 31, name: "Food truck Araci" }
];

const generateRealMarkers = (trucks) => {
  const markers = [];
  const [lat, lng] = CITY_COORDS.paris.center;
  const maxOffset = 0.05;
  trucks.forEach(truck => {
    markers.push({
      id: truck.id,
      position: [lat + (Math.random() * maxOffset * 2 - maxOffset), lng + (Math.random() * maxOffset * 2 - maxOffset)],
      name: truck.name
    });
  });
  return markers;
};

const customIcon = L.icon({
  iconUrl: logo,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});


function CityLandingPage() {
  const { slug } = useParams();
  const city = CITY_COORDS[slug];

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = await api.post("/subscribe", { email });
      toast.success(data.message || "Inscription réussie !");
      setEmail("");
    } catch (error) {
      toast.error(error.message || "Une erreur s'est produite lors de l'inscription.");
    } finally {
      setIsLoading(false);
    }
  };

  const parisMarkers = useMemo(() => {
    return slug === 'paris' ? generateRealMarkers(realTruckData) : [];
  }, [slug]);

  if (!city) {
    return <div className="city-landing-page error-page"><h1>Ville non supportée</h1><Link to="/">Retour à l'accueil</Link></div>;
  }

  if (slug !== 'paris') {
    return (
      <div className="city-landing-page coming-soon">
        <div className="landing-card">
          <h1>{city.name}, nous arrivons bientôt !</h1>
          <p>
            Nous préparons activement notre lancement à {city.name}. Bientôt, vous pourrez
            trouver plus de 30 food trucks sur notre application !
          </p>

          <form className="notification-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Laissez-nous votre email"
              value={email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <button type="submit" className="cta-button primary" disabled={isLoading}>
              {isLoading ? "Envoi..." : "Prévenez-moi du lancement"}
            </button>
          </form>

          <Link to="/" className="back-link">&larr; Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="city-landing-page map-view">
      <div className="landing-map-header">
        <h1>Découvrez les Food Trucks à {city.name}</h1>
        <p>Plus de 30 camions gourmets vous attendent !</p>
      </div>

      <div className="map-container-wrapper">
        <MapContainer
          center={city.center}
          zoom={city.zoom}
          scrollWheelZoom={true}
          className="city-leaflet-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {parisMarkers.map(marker => (
            <Marker
              key={marker.id}
              position={marker.position}
              icon={customIcon}
            >
              <Popup>
                <strong>{marker.name}</strong>
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>

      <div className="map-view-footer">
        <Link to="/food-trucks" className="cta-button primary">
          Voir la liste des Food Trucks
        </Link>
      </div>
    </div>
  );
}

export default CityLandingPage;
