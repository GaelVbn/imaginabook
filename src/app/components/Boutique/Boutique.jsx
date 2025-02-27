"use client";
import React from "react";
import style from "./Boutique.module.css";
import BoutiqueProducts from "../BoutiqueProducts/BoutiqueProducts";
import Background from "../../../../public/bg.webp";
import photo1 from "../../../../public/category/1.jpeg";
import photo2 from "../../../../public/category/2.jpeg";
import photo3 from "../../../../public/category/3.jpeg";
import photo4 from "../../../../public/category/4.jpeg";

const Boutique = () => {
  return (
    <div className={style.container}>
      <div className={style.head} style={{ position: "relative" }}>
        <div
          className={style.overlay}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "0px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            borderRadius: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className={style.title}>Choisis ton livre !</h1>
        </div>
      </div>

      <div className={style.categoriesContainer}>
        <div className={style.categories}>
          <div
            className={style.labelCategory}
            style={{
              backgroundImage: `url(${photo1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p
              style={{
                width: "100%",
                height: "10%",
                backgroundColor: "rgba(220, 212, 195)",
                fontSize: "1rem",
                margin: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              18 mois / 2 ans
            </p>
          </div>
          <div
            className={style.labelCategory}
            style={{
              backgroundImage: `url(${photo2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p
              style={{
                width: "100%",
                height: "10%",
                backgroundColor: "rgba(220, 212, 195)",
                fontSize: "1rem",
                margin: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              2 / 3 ans
            </p>
          </div>
          <div
            className={style.labelCategory}
            style={{
              backgroundImage: `url(${photo3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p
              style={{
                width: "100%",
                height: "10%",
                backgroundColor: "rgba(220, 212, 195)",
                fontSize: "1rem",
                margin: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              4 / 6 ans
            </p>
          </div>
          <div
            className={style.labelCategory}
            style={{
              backgroundImage: `url(${photo4.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p
              style={{
                width: "100%",
                height: "10%",
                backgroundColor: "rgba(220, 212, 195)",
                fontSize: "1rem",
                margin: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              crèche / école
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boutique;
