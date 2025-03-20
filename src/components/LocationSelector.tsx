import React, { useState, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};
const center = { lat: 10.8505, lng: 76.2711 }; // Default location (Kerala, India)

const GOOGLE_API_KEY = "AIzaSyDFEf-Cr8nBoi0BwLkqqjASA24obLVYo6E"; // Use .env for security

const LocationSelector = ({ onLocationSelect }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const onMapClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });

    // Fetch address using Google Geocoding API
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          const address = data.results[0].formatted_address;
          onLocationSelect({ lat, lng, address });
        }
      })
      .catch((error) => console.error("Error fetching address:", error));
  }, []);

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={selectedLocation || center}
        onClick={onMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>

      {selectedLocation && (
        <div className="p-2 bg-white border rounded shadow mt-2">
          <p>Latitude: {selectedLocation.lat}</p>
          <p>Longitude: {selectedLocation.lng}</p>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
