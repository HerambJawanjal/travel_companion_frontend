import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Keyboard } from 'swiper/modules'; // Import Keyboard module
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Card from '../card/Card'; // Assuming you have a Card component for each place

const Container = (props) => {
  const places = props.places?.features || []; // Fallback if `features` is undefined

  return (
    <section className="h-5/6 bg-white flex items-center justify-center overflow-hidden ">
      <div className="bg-white h-2/3 w-11/12 md:w-4/5 lg:w-3/5 p-4 rounded-lg overflow-visible ">
        
        {places.length > 0 ? (
          <Swiper
            modules={[EffectCoverflow, Pagination, Keyboard]} // Add Keyboard module
            effect="coverflow"
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            grabCursor={true}
            keyboard={{
              enabled: true, // Enable keyboard control
              onlyInViewport: true, // Restrict keyboard control to when Swiper is in the viewport
              pageUpDown: true, // Allow pageUp and pageDown keys for navigation
            }}
            coverflowEffect={{
              rotate: 0,
              slideShadows: false,
            }}
            className="coverflow"
          >
            {places.map((place, index) => (
              <SwiperSlide key={index}>
                <Card place={place} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-white">No places available</p>
        )}
      </div>
    </section>
  );
};

export default Container;
