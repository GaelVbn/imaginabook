"use client";
import React from "react";
import style from "./Boutique.module.css";
import { useRouter } from "next/navigation";

const Boutique = ({ categories }) => {
  const router = useRouter();

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
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "0px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(/bg.webp)`, // Image de fond statique
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
          <h1 className={style.title}>Site en maintenance...</h1>
        </div>
      </div>

      <div className={style.categoriesContainer}>
        <div className={style.categories}>
          {categories.map((category, index) => (
            <div
              key={index}
              className={style.labelCategory}
              style={{
                backgroundImage: `url(${category.image})`, // Image dynamique
                cursor: "pointer",
              }}
              onClick={() => router.push(`/themesPage/${category.nom}`)}
            >
              {/* <p className={style.nameCategory}>{category.nom}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boutique;
