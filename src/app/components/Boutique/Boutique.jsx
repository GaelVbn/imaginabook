"use client";
import React from "react";
import style from "./Boutique.module.css";
import BoutiqueProducts from "../BoutiqueProducts/BoutiqueProducts";

const Boutique = () => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <h1>Choisis ton livre !</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div>
        <h3 className={style.titleCategory}>Catégories</h3>
        <div className={style.categories}>
          <button className={style.labelCategory}>18 mois / 2 ans</button>
          <button className={style.labelCategory}>2 / 3 ans</button>
          <button className={style.labelCategory}>4 / 6 ans</button>
          <button className={style.labelCategory}>crèche / école</button>
        </div>
      </div>
      <div className={style.bookContainer}>
        <BoutiqueProducts />
        <BoutiqueProducts />
        <BoutiqueProducts />
        <BoutiqueProducts />
        <BoutiqueProducts />
        <BoutiqueProducts />
        <BoutiqueProducts />
        <BoutiqueProducts />
      </div>
    </div>
  );
};

export default Boutique;
