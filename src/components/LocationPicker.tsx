
import React, { useState, useCallback, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { section } from "framer-motion/client"

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};
const defaultCenter = { lat: 10.8505, lng: 76.2711 }; // Default location

const LocationPicker = ({ onLocationSelect }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const autocompleteRef = useRef(null);

  // Fetch address using Google Geocoding API
  const fetchAddress = useCallback(async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      console.log("Geocode API Response:", data); // Debugging
      if (data.results.length > 0) {
        const formattedAddress = data.results[0].formatted_address;
        console.log("Fetched Address:", formattedAddress); // Debugging
        setAddress(formattedAddress);
        setSelectedLocation({ lat, lng, address: formattedAddress });
      } else {
        setAddress("Address not found");
        setSelectedLocation({ lat, lng, address: "Address not found" });
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Error fetching address");
      setSelectedLocation({ lat, lng, address: "Error fetching address" });
    }
  }, []);

  // Handle map click
  const onMapClick = useCallback(
    (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setSelectedLocation({ lat, lng, address: "" }); // Reset address temporarily
      fetchAddress(lat, lng);
    },
    [fetchAddress]
  );

  // Handle location selection
  const handleSelect = () => {
    if (selectedLocation && address) {
      onLocationSelect({ ...selectedLocation, address });
      alert("Location Selected!");
    }
  };

  // Initialize Google Places Autocomplete
  useEffect(() => {
    if (isLoaded && !loadError) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        autocompleteRef.current,
        { types: ["geocode"] }
      );
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
          console.error("No location found for the selected place.");
          return;
        }
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setSelectedLocation({ lat, lng, address: place.formatted_address });
        setAddress(place.formatted_address);
      });
    }
  }, [isLoaded, loadError]);

  if (loadError) return <p className="text-red-500">Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <div className="relative pt-32 mb-10">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a location"
          ref={autocompleteRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded shadow"
        />
      </div>

      {/* Google Map */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={selectedLocation || defaultCenter}
        onClick={onMapClick}
      >
        {selectedLocation && (
          <Marker
            key={`${selectedLocation.lat}-${selectedLocation.lng}`}
            position={selectedLocation}
          />
        )}
      </GoogleMap>

      {/* Selected Location Details */}
      {selectedLocation && (
        <div className="p-4 border rounded shadow mt-4">
          <p><strong>Latitude:</strong> {selectedLocation.lat}</p>
          <p><strong>Longitude:</strong> {selectedLocation.lng}</p>
          <p><strong>Address:</strong> {selectedLocation.address || "Fetching address..."}</p>

          <button
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={handleSelect}
          >
            Select Location
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;