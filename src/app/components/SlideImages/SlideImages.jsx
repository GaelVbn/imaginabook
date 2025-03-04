import React from "react";
import style from "./SlideImages.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import image1 from "../../../../public/category/1.jpeg?as=webp&w=500&q=75";
import image2 from "../../../../public/category/2.jpeg?as=webp&w=500&q=75";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiperComponent = () => {
  const images = [
    {
      src: image1,
      alt: "image 1",
      key: "1",
    },
    {
      src: image2,
      alt: "image 2",
      key: "2",
    },
  ];

  return (
    <Swiper
      className={style.images}
      // Install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20} // Space between slides
      slidesPerView={1} // Number of slides per view
      pagination={{ clickable: true }} // Enable clickable pagination
      scrollbar={{ draggable: true }} // Enable draggable scrollbar
      onSwiper={(swiper) => console.log(swiper)} // Callback when Swiper is initialized
      onSlideChange={() => console.log("slide change")} // Callback when slide changes
    >
      {images.map((image) => (
        <SwiperSlide key={image.key}>
          <Image
            className={style.image}
            src={image.src}
            alt={image.alt}
            width={500} // Remplacez par la largeur réelle de l'image
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        </SwiperSlide>
      ))}
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default MySwiperComponent;
