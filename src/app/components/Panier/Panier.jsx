import React from "react";
import style from "./Panier.module.css";
import BasketProduct from "../BasketProduct/BasketProduct";

const Panier = () => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
          Votre panier
        </span>
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
        <hr style={{ width: "100%" }} />
      </div>
      <div className={style.productContainer}>
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
      </div>

      <div className={style.footer}>
        <hr style={{ width: "100%" }} />
        <div className={style.headProduct}>
          <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            Total estimé
          </span>
          <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            19,90€ EUR
          </span>
        </div>
        <div className={style.taxes}>
          <p>
            {" "}
            Taxes incluses. Réductions et{" "}
            <span style={{ textDecoration: "underline" }}>
              frais d’expédition
            </span>{" "}
            calculés à l’étape du paiement.
          </p>
          <button
            className={style.btn}
            style={{
              backgroundColor: "black",
              color: "white",

              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Procéder au paiement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panier;
