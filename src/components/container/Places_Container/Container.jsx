import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Card from "../../card/Card";
import './Container.css';
import { useOutletContext } from 'react-router-dom';

const Container = () => {
  const { placesData,locationName } = useOutletContext();
  console.log(placesData);
  let places = placesData?.features || [];
  console.log(places);
  
  return (
    <section className="h-5/6 bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
  <div className="bg-white h-2/3 w-11/12 md:w-4/5 lg:w-3/5 p-6 rounded-2xl shadow-xl overflow-visible">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">{locationName}</h2>

    {places.length > 0 ? (
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
        className="coverflow"
      >
        {places.map((place, index) => (
          <SwiperSlide key={index} className="max-w-xs">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              <Card place={place} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <p className="text-center text-gray-600 text-lg">No places available</p>
    )}
  </div>
</section>

  );
};

export default Container;
