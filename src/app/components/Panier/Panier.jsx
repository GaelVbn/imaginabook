"use client";
import React, { useState } from "react";
import style from "./Panier.module.css";
import BasketProduct from "../BasketProduct/BasketProduct";
import { useSelector } from "react-redux";

const Panier = () => {
  const panier = useSelector((state) => state.panier.items);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const products = panier.map((item) => ({
      name: item.titre + " - " + item.buttons,
      price: item.buttons === "PDF" ? item.prix_pdf : item.prix_physique,
      quantity: item.quantite,
      image: item.buttons === "PDF" ? item.imagesPDF[0] : item.imagePhysique[0],
      token: item.token,
      format: item.buttons,
    }));
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url; // Redirige l'utilisateur vers Stripe
    } else {
      alert("Erreur lors de la création de la session");
    }

    setLoading(false);
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
          Votre panier
        </span>
        <div className={style.headProduct}>
          <span style={{ fontSize: "0.8rem" }}>PRODUIT</span>
          <span style={{ fontSize: "0.8rem" }}>TOTAL</span>
        </div>
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
        <BasketProduct panier={panier} />
      </div>

      <div className={style.footer}>
        <hr style={{ width: "100%" }} />
        <div className={style.headProduct}>
          <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            Total estimé
          </span>
          <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            {panier
              .reduce((total, product) => {
                const productTotal =
                  product.buttons === "PDF"
                    ? product.prix_pdf * product.quantite
                    : product.prix_physique * product.quantite;
                return total + productTotal;
              }, 0)
              .toFixed(2)}
            EUR
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
            onClick={handleCheckout}
            className={style.btn}
            style={{
              backgroundColor: "black",
              color: "white",

              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {loading ? "Chargement..." : "Payer maintenant"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panier;
