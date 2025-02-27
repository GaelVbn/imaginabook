import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiperComponent = () => {
  return (
    <Swiper
      // Install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20} // Space between slides
      slidesPerView={1} // Number of slides per view
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }} // Enable navigation buttons
      pagination={{ clickable: true }} // Enable clickable pagination
      scrollbar={{ draggable: true }} // Enable draggable scrollbar
      onSwiper={(swiper) => console.log(swiper)} // Callback when Swiper is initialized
      onSlideChange={() => console.log("slide change")} // Callback when slide changes
      style={{
        height: "190px",
        width: "50%",
        "@media (min-width: 1024px)": {
          height: "250px",
          width: "50%",
        },
      }}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/200/150?random=1" alt="image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200/150?random=2" alt="image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200/150?random=3" alt="image 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/200/150?random=4" alt="image 4" />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default MySwiperComponent;
