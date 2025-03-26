import { React, useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { getDestination } from "../services/travel_api";
import Container from "../components/container/Places_Container/Container";
import Slide from "../components/slides/Slide";
import Footer from "../components/footer/Footer";
import SecNav from "../components/navbar/SecNav/SecNav";
import Hotels_Container from "../components/container/Hotels_Container/Hotel_Container";
import { Routes, Route, Outlet } from "react-router-dom";

const Home = () => {
  const [location, setLocation] = useState(null); // Start with null to indicate no location
  const [placesData, setPlacesData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [locationName, setlocationName] = useState(null);

  const handleLocation = (local) => {
    setLocation(local);
    console.log("location is recieved in parent");
  };

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position, "This is position data");
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          console.error("Error getting location:", err);
        }
      );
    } else {
      console.error("Geolocation not supported");
    }
  };

  const fetchLocationName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      console.log(data, "here is the locationname data");

      setlocationName(data.address?.city || "Unknown Location");
      console.log(locationName);
    } catch (error) {
      console.error("Error fetching location name:", error);
      setlocationName("Unknown Location");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);


  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      fetchLocationName(location.latitude, location.longitude);
    }
  }, [location]);

  useEffect(() => {
    if (location?.latitude && location?.longitude && locationName) {
      // Ensure lat and lon are defined
      const fetchPlaces = async () => {
        setLoading(true); // Start loading
        try {
          const places = await getDestination(
            location.latitude,
            location.longitude,
            locationName
          );
          console.log(places);
          setPlacesData(places?.data || []); // Set places data if available
        } catch (error) {
          console.error("Error fetching places:", error);
        } finally {
          setLoading(false); // End loading once the data is fetched
        }
      };

      fetchPlaces();
    }
  }, [location, locationName]);

  console.log(placesData);

  return (
    <div className="bg-slate-900 h-screen">
      <Navbar />
      <SecNav />
      <Slide onsetHandleLocation={handleLocation} />

      {loading === 0 ? (
        <p>No places found</p>
      ) : (
        <Outlet context={{ placesData, location, locationName }} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
