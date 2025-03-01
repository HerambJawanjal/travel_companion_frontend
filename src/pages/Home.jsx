import { React, useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { getDestination } from "../services/travel_api";
import Container from "../components/container/Container";
import Slide from "../components/slides/Slide";
import Footer from "../components/footer/Footer";
import SecNav from "../components/SecNav/SecNav";


const Home = () => {
  const [location, setLocation] = useState(null); // Start with null to indicate no location
  const [placesData, setPlacesData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log("Position fetched:", position);
        },
        (err) => {
          console.error("Error getting location:", err);
        }
      );
    } else {
      console.error("Geolocation not supported");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      // Ensure lat and lon are defined
      const fetchPlaces = async () => {
        setLoading(true); // Start loading
        try {
          const places = await getDestination(location.latitude, location.longitude);
          setPlacesData(places?.data || []); // Set places data if available
        } catch (error) {
          console.error("Error fetching places:", error);
        } finally {
          setLoading(false); // End loading once the data is fetched
        }
      };

      fetchPlaces();
    }
  }, [location]);

  return (
    <div className="bg-slate-900 h-screen">
      <Navbar />
      <SecNav/>
      <Slide />
      {loading ? (
        <p>Loading places...</p> // Show a loading message or spinner while waiting
      ) : (
        <Container places={placesData} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
