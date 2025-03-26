import React from "react";

const DataContainer = ({ title, data, type }) => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name || item.airline || item.topic}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {item.name || item.airline || item.topic}
                </h3>
                {/* Conditional content based on type */}
                {type === "restaurant" && (
                  <>
                    <p className="text-gray-600">{item.location}</p>
                    <p>🍽 {item.cuisine}</p>
                    <p>${item.pricePerPerson} per person</p>
                    <p>⭐ {item.rating}</p>
                  </>
                )}
                {type === "flight" && (
                  <>
                    <p className="text-gray-600">{item.from} ➔ {item.to}</p>
                    <p>⏱ {item.duration}</p>
                    <p>💸 ${item.price}</p>
                    <p>⭐ {item.rating}</p>
                  </>
                )}
                {type === "vacation" && (
                  <>
                    <p className="text-gray-600">{item.location}</p>
                    <p>💸 ${item.pricePerNight} / night</p>
                    <p>⭐ {item.rating}</p>
                  </>
                )}
                {type === "cruise" && (
                  <>
                    <p className="text-gray-600">Destination: {item.destination}</p>
                    <p>Duration: {item.duration}</p>
                    <p>💸 ${item.price}</p>
                    <p>⭐ {item.rating}</p>
                  </>
                )}
                {type === "car" && (
                  <>
                    <p className="text-gray-600">{item.carModel} - {item.location}</p>
                    <p>💸 ${item.pricePerDay} / day</p>
                    <p>⭐ {item.rating}</p>
                  </>
                )}
                {type === "forum" && (
                  <>
                    <p>Posts: {item.posts}</p>
                    <p>Active Users: {item.activeUsers}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataContainer;
