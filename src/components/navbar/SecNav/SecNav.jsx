import React from "react";

const SecNav = () => {
  return (
    <div className="flex h-14 bg-slate-50 justify-center items-center">
      <nav className="flex  justify-between items-center">
        <a href="/current">Current Location</a>
        <a href="/hotels" className="m-3">Hotels</a>
        <a href="/things_to_do" className="m-3">Things to Do</a>
        <a href="/restaurants" className="m-3">Restaurants</a>
        <a href="/flights" className="m-3">Flights</a>
        <a href="/vacationRentals" className="m-3">Vacation Rentals</a>
        <a href="/cruises" className="m-3">Cruises</a>
        <a href="/rentalcars" className="m-3">Rental Cars</a> 
        <a href="/forums" className="m-3">Forums</a>
      </nav>
    </div>
  );
};

export default SecNav;
