// src/pages/FindTrucksPage.js
import React, { useState } from "react"; 
import "./FindTrucksPage.css";

// Importer les composants de la carte
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import logoIconUrl from "../assets/logo.png";

const customFoodTruckIcon = L.icon({
  iconUrl: logoIconUrl,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// === MODIFICATION : Liste mise à jour à 18 entreprises ===
const realTruckData = [
  { id: 1, name: "fly burger" },
  { id: 2, name: "Kiosque du parc" },
  { id: 3, name: "Bko braise" },
  { id: 4, name: "Breizh Truck" },
  { id: 6, name: "Circus Street Food" },
  { id: 7, name: "Bistrot food" },
  { id: 8, name: "CHICKEN WORLD" },
  { id: 9, name: "food truck sénégalais" },
  { id: 10, name: "GLACES MARTINEZ MONTREUIL 93" },
  { id: 12, name: "Savoyard food truck" },
  { id: 13, name: "Puter truck" },
  { id: 14, name: "Burgers food truck" },
  { id: 17, name: "Cristian Vincenzo pesce" },
  { id: 27, name: "CityBurger" },
  { id: 28, name: "Dolce Bakery" },
  { id: 29, name: "WAFFLEN TRUCK" },
  { id: 30, name: "Le crêpe pan Food And Co" },
  { id: 31, name: "Food truck Araci" }
];
// === FIN DE LA MODIFICATION ===

const parisCenter = [48.8566, 2.3522];

const activeTrucks = realTruckData.map(truck => {
  const maxOffset = 0.05; 
  const randomLat = parisCenter[0] + (Math.random() * maxOffset * 2 - maxOffset);
  const randomLng = parisCenter[1] + (Math.random() * maxOffset * 2 - maxOffset);

  return {
    ...truck,
    position: [randomLat, randomLng],
    image: logoIconUrl, 
    specialty: "Spécialité à venir", 
    clickAndCollect: false, 
  };
});
// === FIN DES DONNÉES ===


function FindTrucksPage() {
  const mapCenter = parisCenter; 

  // === Logique "Voir plus" / "Voir moins" (Inchangée) ===
  const initialCount = 6; 
  const totalTrucks = activeTrucks.length; // Vaut 18 maintenant
  
  const [visibleCount, setVisibleCount] = useState(initialCount); 
  const [isShowingAll, setIsShowingAll] = useState(false);

  const toggleTrucksVisibility = () => {
    if (isShowingAll) {
      setVisibleCount(initialCount);
      setIsShowingAll(false);
    } else {
      setVisibleCount(totalTrucks);
      setIsShowingAll(true);
    }
  };
  // === FIN DE LA LOGIQUE ===

  return (
    <div className="find-trucks-page">
      <title>Trouver un Food Truck - Carte Interactive | Foodmoov</title>
      <meta
        name="description"
        content="Explorez la carte interactive de Foodmoov pour trouver les meilleurs food trucks près de chez vous en temps réel. Localisez, choisissez et savourez."
      />

      <h1>Trouver un Food Truck</h1>

      {/* CARTE INTERACTIVE (Affiche les 18 trucks) */}
      <div
        className="map-wrapper"
        style={{
          height: "500px",
          width: "100%",
          marginBottom: "50px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={mapCenter}
          zoom={12} 
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {activeTrucks.map((truck) => (
            <Marker
              key={truck.id}
              position={truck.position}
              icon={customFoodTruckIcon}
            >
              <Popup>
                <strong>{truck.name}</strong>
                <br />
                {truck.specialty}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* LISTE DES FICHES */}
      <div className="trucks-list">
        {activeTrucks.slice(0, visibleCount).map((truck) => (
          <div key={truck.id} className="truck-card">
            <img
              src={truck.image} 
              alt={truck.name}
              className="truck-card-image"
            />
            <div className="truck-card-content">
              <h3>{truck.name}</h3>
              <p className="specialty">{truck.specialty}</p>

              {truck.note && (
                <p className="truck-note">{truck.note}</p>
              )}

              {truck.clickAndCollect && (
                <span className="click-collect-badge">
                  Click & Collect disponible
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bouton "Voir plus" / "Voir moins" (Inchangé) */}
      {totalTrucks > initialCount && ( // 18 > 6, donc le bouton s'affiche
        <div className="show-more-container">
          <button onClick={toggleTrucksVisibility} className="show-more-button">
            {isShowingAll ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>
      )}

    </div>
  );
}

export default FindTrucksPage;