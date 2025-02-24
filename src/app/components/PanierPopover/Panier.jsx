import React from "react";
import style from "./Panier.module.css";
import { RxCross2 } from "react-icons/rx";
import BasketProduct from "../BasketProduct/BasketProduct";

const Panier = ({ onClose }) => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
          Votre panier
        </span>
        <RxCross2
          style={{ fontSize: "2rem", cursor: "pointer" }}
          onClick={onClose}
          className={style.crossDesktop}
        />
      </div>
      <div className={style.headProduct}>
        <span style={{ fontSize: "0.8rem" }}>PRODUIT</span>
        <span style={{ fontSize: "0.8rem" }}>TOTAL</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <hr style={{ width: "100%", margin: "0.5rem 0" }} />
      </div>
      <div className={style.productContainer}>
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
      </div>
      <hr style={{ width: "100%", margin: "0.5rem 0" }} />
      <div className={style.headProduct} style={{ marginTop: "10px" }}>
        <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Total estimé
        </span>
        <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          19,90€ EUR
        </span>
      </div>
      <div className={style.taxes}>
        Taxes incluses. Réductions et{" "}
        <span style={{ textDecoration: "underline" }}>frais d’expédition</span>{" "}
        calculés à l’étape du paiement.
      </div>
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Procéder au paiement
      </button>
    </div>
  );
};

export default Panier;
