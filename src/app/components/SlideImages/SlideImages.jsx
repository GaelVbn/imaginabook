import React from "react";
import style from "./SlideImages.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiperComponent = ({ imgPhysique, imgPDF, buttons }) => {
  return (
    <Swiper
      className={style.images}
      // Install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20} // Space between slides
      slidesPerView={1} // Number of slides per view
      pagination={{ clickable: true }} // Enable clickable pagination
      scrollbar={{ draggable: true }} // Enable draggable scrollbar
    >
      {buttons === "PDF"
        ? imgPDF.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className={style.image}
                src={image}
                alt={"imagesPDF"}
                width={500} // Remplacez par la largeur réelle de l'image
                height={500}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                priority
              />
            </SwiperSlide>
          ))
        : buttons === "Physique"
        ? imgPhysique.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className={style.image}
                src={image}
                alt={"imagePhysique"}
                width={500} // Remplacez par la largeur réelle de l'image
                height={500}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                priority
              />
            </SwiperSlide>
          ))
        : null}
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default MySwiperComponent;
