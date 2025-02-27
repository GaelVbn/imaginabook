"use client";
import React from "react";
import style from "./produitPage.module.css";
import Slideshow from "@/app/components/SlideImages/SlideImages";

const page = () => {
  return (
    <div className={style.container}>
      <Slideshow />
      <div className={style.description}>
        <h1>titre</h1>
        <p>description</p>
        <div className={style.btnFormat}>
          <button>PDF</button>
          <button>Physique</button>
        </div>
        <span>19,90€</span>
        <div>
          <span>Quantité: 1 dans le panier</span>

          <div className={style.quantityBtn}>
            <button style={{ border: "none" }}>-</button>
            <span style={{ margin: "0 10px" }}>1</span>
            <button style={{ border: "none" }}>+</button>
          </div>
        </div>
      </div>
      <button className={style.addToCartBtn}>Ajouter au panier</button>
    </div>
  );
};

export default page;
