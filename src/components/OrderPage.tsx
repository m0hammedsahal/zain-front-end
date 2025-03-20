import React, { useState } from "react";
import LocationSelector from "./LocationSelector";

const OrderPage = () => {
  const [location, setLocation] = useState(null);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-3">Select Your Location</h1>
      <LocationSelector onLocationSelect={setLocation} />

      {location && (
        <div className="mt-4 p-3 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold">Selected Location:</h2>
          <p>{location.address}</p>
          <p>Lat: {location.lat}, Lng: {location.lng}</p>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
