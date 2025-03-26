import React from 'react'


export const thingsToDoList = [
  {
    id: 1,
    name: "Scuba Diving",
    location: "Goa, India",
    description: "Explore the underwater world and vibrant marine life.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    price: 2500, // per session
    rating: 4.7
  },
  {
    id: 2,
    name: "Hot Air Balloon Ride",
    location: "Cappadocia, Turkey",
    description: "Experience breathtaking views of valleys and rock formations.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    price: 8000,
    rating: 4.9
  },
  {
    id: 3,
    name: "Skydiving",
    location: "Dubai, UAE",
    description: "Jump from 13,000 feet over the Palm Jumeirah.",
    image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=800&q=80",
    price: 15000,
    rating: 4.8
  },
  {
    id: 4,
    name: "Desert Safari",
    location: "Rajasthan, India",
    description: "Enjoy camel rides, sand dunes, and a traditional cultural show.",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
    price: 3000,
    rating: 4.5
  },
  {
    id: 5,
    name: "Paragliding",
    location: "Bir Billing, India",
    description: "Fly above the Himalayas and enjoy stunning views.",
    image: "https://images.unsplash.com/photo-1526481280690-9064580a3a29?auto=format&fit=crop&w=800&q=80",
    price: 3500,
    rating: 4.6
  },
  {
    id: 6,
    name: "Snorkeling",
    location: "Andaman Islands",
    description: "Discover colorful reefs and marine creatures.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    price: 2000,
    rating: 4.4
  }
];


const ThingsToDo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {thingsToDoList.map((activity) => (
    <div key={activity.id} className="border rounded-lg shadow p-4 hover:shadow-xl transition">
      <img src={activity.image} alt={activity.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold">{activity.name}</h3>
      <p className="text-gray-600">{activity.location}</p>
      <p className="text-gray-700 my-2">{activity.description}</p>
      <p className="font-semibold">₹{activity.price} per person</p>
      <p className="text-yellow-500">⭐ {activity.rating}</p>
    </div>
  ))}
</div>

  )
}

export default ThingsToDo