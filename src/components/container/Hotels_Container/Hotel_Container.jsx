import React, { useEffect } from 'react'
import { getHotels } from '../../../services/travel_api'
import { useOutletContext } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './hotel.css'

let static_hotel_list=[
  {
    "id": 1,
    "name": "Grand Palace Hotel",
    "location": "Paris, France",
    "pricePerNight": 180,
    "rating": 4.5,
    "amenities": ["Free WiFi", "Spa", "Breakfast Included", "Swimming Pool", "Gym"],
    "image": "https://example.com/images/hotel1.jpg",
    "description": "Luxury stay in the heart of Paris with a beautiful view of the Eiffel Tower."
  },
  {
    "id": 2,
    "name": "Seaside Resort",
    "location": "Goa, India",
    "pricePerNight": 120,
    "rating": 4.3,
    "amenities": ["Beach Access", "Free Parking", "Bar", "Restaurant", "Spa"],
    "image": "https://example.com/images/hotel2.jpg",
    "description": "A beachside resort offering scenic views, perfect for your Goa getaway."
  },
  {
    "id": 3,
    "name": "Mountain View Lodge",
    "location": "Swiss Alps, Switzerland",
    "pricePerNight": 250,
    "rating": 4.8,
    "amenities": ["Mountain View", "Sauna", "Skiing", "Fireplace", "Free Breakfast"],
    "image": "https://example.com/images/hotel3.jpg",
    "description": "Enjoy the serene views of the Swiss Alps with top-class amenities."
  },
  {
    "id": 4,
    "name": "Cityscape Inn",
    "location": "New York, USA",
    "pricePerNight": 200,
    "rating": 4.0,
    "amenities": ["City View", "Rooftop Bar", "WiFi", "Breakfast Buffet", "Gym"],
    "image": "https://example.com/images/hotel4.jpg",
    "description": "Centrally located in New York with stunning skyline views and modern rooms."
  },
  {
    "id": 5,
    "name": "Desert Oasis Hotel",
    "location": "Dubai, UAE",
    "pricePerNight": 300,
    "rating": 4.7,
    "amenities": ["Infinity Pool", "Desert Safari", "Luxury Spa", "Fine Dining", "Valet Parking"],
    "image": "https://example.com/images/hotel5.jpg",
    "description": "Luxury hotel experience in the heart of Dubai, perfect for a lavish stay."
  },
  {
    "id": 5,
    "name": "Desert Oasis Hotel",
    "location": "Dubai, UAE",
    "pricePerNight": 300,
    "rating": 4.7,
    "amenities": ["Infinity Pool", "Desert Safari", "Luxury Spa", "Fine Dining", "Valet Parking"],
    "image": "https://example.com/images/hotel5.jpg",
    "description": "Luxury hotel experience in the heart of Dubai, perfect for a lavish stay."
  },
  {
    "id": 5,
    "name": "Desert Oasis Hotel",
    "location": "Dubai, UAE",
    "pricePerNight": 300,
    "rating": 4.7,
    "amenities": ["Infinity Pool", "Desert Safari", "Luxury Spa", "Fine Dining", "Valet Parking"],
    "image": "https://example.com/images/hotel5.jpg",
    "description": "Luxury hotel experience in the heart of Dubai, perfect for a lavish stay."
  },
  {
    "id": 5,
    "name": "Desert Oasis Hotel",
    "location": "Dubai, UAE",
    "pricePerNight": 300,
    "rating": 4.7,
    "amenities": ["Infinity Pool", "Desert Safari", "Luxury Spa", "Fine Dining", "Valet Parking"],
    "image": "https://example.com/images/hotel5.jpg",
    "description": "Luxury hotel experience in the heart of Dubai, perfect for a lavish stay."
  },
  {
    "id": 5,
    "name": "Desert Oasis Hotel",
    "location": "Dubai, UAE",
    "pricePerNight": 300,
    "rating": 4.7,
    "amenities": ["Infinity Pool", "Desert Safari", "Luxury Spa", "Fine Dining", "Valet Parking"],
    "image": "https://example.com/images/hotel5.jpg",
    "description": "Luxury hotel experience in the heart of Dubai, perfect for a lavish stay."
  },
  {
    "id": 5,
    "name": "Desert Oasis Hotel",
    "location": "Dubai, UAE",
    "pricePerNight": 300,
    "rating": 4.7,
    "amenities": ["Infinity Pool", "Desert Safari", "Luxury Spa", "Fine Dining", "Valet Parking"],
    "image": "https://example.com/images/hotel5.jpg",
    "description": "Luxury hotel experience in the heart of Dubai, perfect for a lavish stay."
  }
];


const Hotel_Container = () => {
let  { placesData, location, locationName } =useOutletContext()

  useEffect(() => {
    
  if(locationName){
    const hotel_data= getHotels(location?.latitude,location?.longitude,locationName);
    console.log("Hotel container data",hotel_data);
  }else{
    console.log("location name in hotel container is null and hotel data cannot be fetch");
    
  }
   
    
  }, [location,locationName])
  
  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Recommended Hotels</h2>
<Swiper
  modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
  effect="coverflow"
  loop={true}
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  pagination={{ clickable: true }}
  centeredSlides={true}
  grabCursor={true}
  keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
  mousewheel={{ enabled: true, forceToAxis: true, sensitivity: 1 }}
  coverflowEffect={{
    rotate: 0,
    slideShadows: false,
  }}
  className="hotelSwiper"
>
  {static_hotel_list.map((hotel) => (
    <SwiperSlide key={hotel.id} className="!w-[320px] md:!w-[350px]">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-4">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
        <p className="text-gray-600">{hotel.location}</p>
        <p className="mt-2 font-semibold">${hotel.pricePerNight} / night</p>
        <p className="mt-1 text-yellow-500">⭐ {hotel.rating}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
  </div>
  );
}

export default Hotel_Container