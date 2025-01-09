'use client';

import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules

// Import Swiper styles (ensures styles are applied properly)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const images = [
    '/images/slide1.jpg', // Replace these with your image paths
    '/images/slide2.jpg',
    '/images/slide3.jpg',
  ];

  return (
    <section className="w-full h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Enable desired Swiper modules
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Configure autoplay
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination dots
        loop // Enable infinite looping
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
