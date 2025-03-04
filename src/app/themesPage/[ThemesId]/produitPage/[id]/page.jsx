"use client";
import React from "react";
import style from "./produitPage.module.css";
import Slideshow from "@/app/components/SlideImages/SlideImages";

const page = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.slide}>
          <Slideshow />
        </div>

        <div className={style.description}>
          <div className={style.TitleDesc}>
            <h1 className={style.title}>Formes & Couleurs</h1>
            <p>
              description pour le produits en question qui répond à la catégorie
              et thématique choisis par l'utilisateur description pour le
              produits en question qui répond à la catégorie et thématique
              choisis par l'utilisateur description pour le produits en question
              qui répond à
            </p>
          </div>

          <div className={style.btnFormat}>
            <button>PDF</button>
            <button>Physique</button>
          </div>

          <div className={style.priceContainer}>
            <span className={style.price}>19,90€</span>
            <div>
              <span className={style.quantity}>Quantité disponible : 2</span>

              <div className={style.quantityBtn}>
                <button
                  style={{
                    border: "none",
                    padding: "0.5rem",
                    fontSize: "1.5rem",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <button
                  style={{
                    border: "none",
                    padding: "0.5rem 1.5rem",
                    backgroundColor: "transparent",
                    disabled: true,
                    fontSize: "1rem",
                  }}
                >
                  1
                </button>
                <button
                  style={{
                    border: "none",
                    padding: "0.5rem",
                    fontSize: "1.5rem",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className={style.actionBtn}>
              <button
                className={style.addToCartBtn}
                style={{
                  backgroundColor: "#2A628F",
                  cursor: "pointer",
                  border: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Ajouter au panier
              </button>
              <button
                className={style.addToCartBtn}
                style={{
                  backgroundColor: "#E76F51",
                  cursor: "pointer",
                  border: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
