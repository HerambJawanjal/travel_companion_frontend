import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import SecNav from "../components/navbar/SecNav/SecNav";
import SignPage from "../pages/SignPage";
import Registration from "../components/LoginAndRegistration/Registration";
import Navbar from "../components/navbar/Navbar";
import Slide from "../components/slides/Slide";

import Hotel_Container from "../components/container/Hotels_Container/Hotel_Container";
import Container from "../components/container/Places_Container/Container";
import ThingsToDo from "../components/container/ThingsToDO/ThinkgsToDo";
import DataContainer from "../components/container/DataContainer";


export const static_forums_list = [
  {
    id: 1,
    topic: "Best Beach Destinations",
    posts: 120,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    activeUsers: 50
  },
  {
    id: 2,
    topic: "Budget Travel Tips",
    posts: 85,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    activeUsers: 30
  },
  {
    id: 3,
    topic: "Hidden Gems in Europe",
    posts: 95,
    image: "https://images.unsplash.com/photo-1543342386-2d4a40b4b9c2?auto=format&fit=crop&w=800&q=80",
    activeUsers: 42
  },
  {
    id: 4,
    topic: "Solo Travel Experiences",
    posts: 110,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    activeUsers: 47
  },
  {
    id: 5,
    topic: "Best Food Destinations",
    posts: 150,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    activeUsers: 55
  },
  {
    id: 6,
    topic: "Adventure Travel & Hiking",
    posts: 90,
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    activeUsers: 40
  },
  {
    id: 7,
    topic: "Luxury Travel Recommendations",
    posts: 70,
    image: "https://images.unsplash.com/photo-1559589689-577aabd1e7e4?auto=format&fit=crop&w=800&q=80",
    activeUsers: 35
  },
  {
    id: 8,
    topic: "Family-Friendly Destinations",
    posts: 88,
    image: "https://images.unsplash.com/photo-1508807526345-15e9b5e820d4?auto=format&fit=crop&w=800&q=80",
    activeUsers: 38
  },
  {
    id: 9,
    topic: "Travel Safety Tips",
    posts: 60,
    image: "https://images.unsplash.com/photo-1516972810927-80185027ca84?auto=format&fit=crop&w=800&q=80",
    activeUsers: 28
  },
  {
    id: 10,
    topic: "Best National Parks to Visit",
    posts: 105,
    image: "https://images.unsplash.com/photo-1508264165352-258a6d34b6ef?auto=format&fit=crop&w=800&q=80",
    activeUsers: 45
  }
];

export const static_rental_cars = [
  {
    id: 1,
    company: "Hertz",
    carModel: "Toyota Corolla",
    location: "Los Angeles",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 40,
    rating: 4.3
  },
  {
    id: 2,
    company: "Enterprise",
    carModel: "Ford Mustang",
    location: "Miami",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 70,
    rating: 4.6
  },
  {
    id: 3,
    company: "Avis",
    carModel: "Chevrolet Malibu",
    location: "Chicago",
    image: "https://images.unsplash.com/photo-1549921296-3f7b2de0f215?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 50,
    rating: 4.4
  },
  {
    id: 4,
    company: "Budget",
    carModel: "Nissan Altima",
    location: "New York",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 55,
    rating: 4.2
  },
  {
    id: 5,
    company: "Sixt",
    carModel: "BMW 3 Series",
    location: "Berlin",
    image: "https://images.unsplash.com/photo-1602941525421-6c1f7b29d4cc?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 80,
    rating: 4.7
  },
  {
    id: 6,
    company: "Alamo",
    carModel: "Jeep Wrangler",
    location: "Las Vegas",
    image: "https://images.unsplash.com/photo-1603722774112-6f3c09b51fbf?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 90,
    rating: 4.6
  },
  {
    id: 7,
    company: "National",
    carModel: "Kia Sportage",
    location: "San Francisco",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 60,
    rating: 4.3
  },
  {
    id: 8,
    company: "Europcar",
    carModel: "Volkswagen Golf",
    location: "Paris",
    image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4d?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 65,
    rating: 4.4
  },
  {
    id: 9,
    company: "Thrifty",
    carModel: "Hyundai Elantra",
    location: "Toronto",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 45,
    rating: 4.1
  },
  {
    id: 10,
    company: "Fox Rent A Car",
    carModel: "Chevrolet Tahoe",
    location: "Orlando",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80",
    pricePerDay: 95,
    rating: 4.5
  }
];

export const static_cruise_list = [
  {
    id: 1,
    name: "Caribbean Explorer",
    destination: "Bahamas",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    price: 1500,
    duration: "7 Days",
    rating: 4.5
  },
  {
    id: 2,
    name: "Mediterranean Cruise",
    destination: "Greece & Italy",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    price: 2000,
    duration: "10 Days",
    rating: 4.7
  },
  {
    id: 3,
    name: "Alaskan Adventure",
    destination: "Alaska, USA",
    image: "https://images.unsplash.com/photo-1601339671396-a5ba6e513267?auto=format&fit=crop&w=800&q=80",
    price: 1800,
    duration: "8 Days",
    rating: 4.6
  },
  {
    id: 4,
    name: "Baltic Sea Voyage",
    destination: "Scandinavia & Russia",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80",
    price: 2200,
    duration: "12 Days",
    rating: 4.8
  },
  {
    id: 5,
    name: "South Pacific Cruise",
    destination: "Fiji & Tahiti",
    image: "https://images.unsplash.com/photo-1581349486134-6fc5e3f62d1f?auto=format&fit=crop&w=800&q=80",
    price: 2400,
    duration: "15 Days",
    rating: 4.9
  },
  {
    id: 6,
    name: "Panama Canal Journey",
    destination: "Central America",
    image: "https://images.unsplash.com/photo-1615040110639-e21cdad98d39?auto=format&fit=crop&w=800&q=80",
    price: 2100,
    duration: "10 Days",
    rating: 4.5
  },
  {
    id: 7,
    name: "Hawaiian Escape",
    destination: "Hawaii, USA",
    image: "https://images.unsplash.com/photo-1577015883429-c90b148f0e58?auto=format&fit=crop&w=800&q=80",
    price: 1900,
    duration: "9 Days",
    rating: 4.7
  },
  {
    id: 8,
    name: "Norwegian Fjords Cruise",
    destination: "Norway",
    image: "https://images.unsplash.com/photo-1532904742-32b37e4aa8fa?auto=format&fit=crop&w=800&q=80",
    price: 2300,
    duration: "11 Days",
    rating: 4.8
  },
  {
    id: 9,
    name: "Australia Coastal Cruise",
    destination: "Sydney & Great Barrier Reef",
    image: "https://images.unsplash.com/photo-1506956191973-7f51bb26e4d7?auto=format&fit=crop&w=800&q=80",
    price: 2500,
    duration: "14 Days",
    rating: 4.7
  },
  {
    id: 10,
    name: "Antarctic Expedition",
    destination: "Antarctica",
    image: "https://images.unsplash.com/photo-1516997124798-2c56f123c579?auto=format&fit=crop&w=800&q=80",
    price: 5000,
    duration: "15 Days",
    rating: 5.0
  }
];

export const static_vacation_rentals = [
  {
    id: 1,
    name: "Sea View Villa",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 300,
    rating: 4.8
  },
  {
    id: 2,
    name: "Mountain Cabin",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 250,
    rating: 4.6
  },
  {
    id: 3,
    name: "Beachfront Bungalow",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 180,
    rating: 4.7
  },
  {
    id: 4,
    name: "City Penthouse",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1560448075-bb1ae5f1c24e?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 400,
    rating: 4.5
  },
  {
    id: 5,
    name: "Cozy Cottage",
    location: "Cotswolds, England",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf3417?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 220,
    rating: 4.4
  },
  {
    id: 6,
    name: "Desert Retreat",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1551887374-5b2c6a6bbf79?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 350,
    rating: 4.6
  },
  {
    id: 7,
    name: "Lake House",
    location: "Lake Tahoe, USA",
    image: "https://images.unsplash.com/photo-1505691723518-36a9c03d3e0b?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 275,
    rating: 4.7
  },
  {
    id: 8,
    name: "Tropical Treehouse",
    location: "Costa Rica",
    image: "https://images.unsplash.com/photo-1543486958-d783bfbf3ab2?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 200,
    rating: 4.8
  },
  {
    id: 9,
    name: "Snowy Chalet",
    location: "Aspen, USA",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 320,
    rating: 4.9
  },
  {
    id: 10,
    name: "Countryside Barn",
    location: "Tuscany, Italy",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 240,
    rating: 4.5
  }
];


export const static_flights_list = [
  {
    id: 1,
    airline: "Emirates",
    from: "New York (JFK)",
    to: "Dubai (DXB)",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",
    price: 1200,
    duration: "12h 30m",
    rating: 4.7
  },
  {
    id: 2,
    airline: "Singapore Airlines",
    from: "Singapore (SIN)",
    to: "London (LHR)",
    image: "https://images.unsplash.com/photo-1586377581044-89927b366c3e?auto=format&fit=crop&w=800&q=80",
    price: 950,
    duration: "14h",
    rating: 4.9
  },
  {
    id: 3,
    airline: "Qatar Airways",
    from: "Doha (DOH)",
    to: "Paris (CDG)",
    image: "https://images.unsplash.com/photo-1520139518570-4eec10ed27f6?auto=format&fit=crop&w=800&q=80",
    price: 1100,
    duration: "7h 45m",
    rating: 4.8
  },
  {
    id: 4,
    airline: "Lufthansa",
    from: "Frankfurt (FRA)",
    to: "San Francisco (SFO)",
    image: "https://images.unsplash.com/photo-1504199361689-7b82b93400ba?auto=format&fit=crop&w=800&q=80",
    price: 980,
    duration: "11h 20m",
    rating: 4.5
  },
  {
    id: 5,
    airline: "British Airways",
    from: "London (LHR)",
    to: "Toronto (YYZ)",
    image: "https://images.unsplash.com/photo-1580428180131-891c83a9cf0e?auto=format&fit=crop&w=800&q=80",
    price: 850,
    duration: "8h 15m",
    rating: 4.4
  },
  {
    id: 6,
    airline: "Air India",
    from: "Delhi (DEL)",
    to: "New York (JFK)",
    image: "https://images.unsplash.com/photo-1600093463581-8d886c7427ba?auto=format&fit=crop&w=800&q=80",
    price: 1050,
    duration: "15h 30m",
    rating: 4.2
  },
  {
    id: 7,
    airline: "Turkish Airlines",
    from: "Istanbul (IST)",
    to: "Tokyo (HND)",
    image: "https://images.unsplash.com/photo-1570598912132-55f1e4f05e4e?auto=format&fit=crop&w=800&q=80",
    price: 1150,
    duration: "11h 50m",
    rating: 4.6
  },
  {
    id: 8,
    airline: "Delta Airlines",
    from: "Los Angeles (LAX)",
    to: "Sydney (SYD)",
    image: "https://images.unsplash.com/photo-1518552714815-721fefd1f7fa?auto=format&fit=crop&w=800&q=80",
    price: 1400,
    duration: "15h 10m",
    rating: 4.3
  },
  {
    id: 9,
    airline: "Cathay Pacific",
    from: "Hong Kong (HKG)",
    to: "Melbourne (MEL)",
    image: "https://images.unsplash.com/photo-1581897485815-61c2fa2228d1?auto=format&fit=crop&w=800&q=80",
    price: 890,
    duration: "9h 20m",
    rating: 4.7
  },
  {
    id: 10,
    airline: "Etihad Airways",
    from: "Abu Dhabi (AUH)",
    to: "Los Angeles (LAX)",
    image: "https://images.unsplash.com/photo-1517959105824-56b29aa1c730?auto=format&fit=crop&w=800&q=80",
    price: 1300,
    duration: "16h 10m",
    rating: 4.8
  }
];


export const static_restaurant_list = [
  {
    id: 1,
    name: "The Gourmet Kitchen",
    location: "New York City, USA",
    image: "https://images.unsplash.com/photo-1555992336-03a23c8c1f8e?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 40,
    rating: 4.5,
    cuisine: "Italian"
  },
  {
    id: 2,
    name: "Sushi World",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1562158070-57b8de99b3d9?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 50,
    rating: 4.8,
    cuisine: "Japanese"
  },
  {
    id: 3,
    name: "Spice Symphony",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 20,
    rating: 4.4,
    cuisine: "Indian"
  },
  {
    id: 4,
    name: "Le Petit Paris",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 60,
    rating: 4.7,
    cuisine: "French"
  },
  {
    id: 5,
    name: "Casa Mexicana",
    location: "Mexico City, Mexico",
    image: "https://images.unsplash.com/photo-1613145990591-f9538cf1b02e?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 25,
    rating: 4.3,
    cuisine: "Mexican"
  },
  {
    id: 6,
    name: "Dragon's Delight",
    location: "Beijing, China",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 30,
    rating: 4.6,
    cuisine: "Chinese"
  },
  {
    id: 7,
    name: "Mediterraneo",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613141411417-68b2bc4f893b?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 35,
    rating: 4.5,
    cuisine: "Greek"
  },
  {
    id: 8,
    name: "The Steakhouse",
    location: "Texas, USA",
    image: "https://images.unsplash.com/photo-1617196034694-63a03bfa89c0?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 55,
    rating: 4.6,
    cuisine: "American"
  },
  {
    id: 9,
    name: "Tapas & Wine",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1543352634-4cf5c0b61c71?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 45,
    rating: 4.7,
    cuisine: "Spanish"
  },
  {
    id: 10,
    name: "Ocean's Catch",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=800&q=80",
    pricePerPerson: 50,
    rating: 4.8,
    cuisine: "Seafood"
  }
];



const PublicRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="current" element={<Container />} />
          <Route path="hotels" element={<Hotel_Container />} />
          <Route path="things_to_do" element={<ThingsToDo/>} />
          <Route path="restaurants" element={<DataContainer title="Top Restaurants"
        data={static_restaurant_list}
        type="restaurant" />} />
          <Route path="flights" element={<DataContainer title="Top Flights"
        data={static_flights_list}
        type="flight" />} />
          <Route path="vacationRentals" element={<DataContainer title="Top Vacation Rentals"
        data={static_vacation_rentals}
        type="vacation" />} />
          <Route path="cruises" element={<DataContainer title="Top Cruises"
        data={static_cruise_list}
        type="cruise" />} />
          <Route path="rentalcars" element={<DataContainer title="Top Rentalcars "
        data={static_rental_cars}
        type="car" />} />
          <Route path="forums" element={<DataContainer title="Top Forums"
        data={static_forums_list}
        type="forum" />} />
          
        </Route>
        <Route path="/Sign" element={<SignPage />} />

        <Route path="/Discover" element={<Registration />} />
        <Route path="/Trip" element={<Registration />} />
        <Route path="/Reviews" element={<Registration />} />
      </Routes>
    </>
  );
};

export default PublicRoute;
