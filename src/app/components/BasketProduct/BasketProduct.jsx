"use client";
import React from "react";
import style from "./BasketProduct.module.css";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeItem,
} from "../../reducers/panier.reducer";

const BasketProduct = ({ panier }) => {
  const dispatch = useDispatch();

  const handleIncrement = (token) => {
    dispatch(increment({ token }));
  };

  const handleDecrement = (token) => {
    dispatch(decrement({ token }));
  };

  const handleRemove = (token, buttons) => {
    dispatch(removeItem({ token, buttons }));
  };

  return (
    <div>
      {panier.length === 0 ? (
        <p style={{ textAlign: "center" }}>Panier vide</p>
      ) : (
        panier.map((product, index) => (
          <div key={index} className={style.container}>
            <div className={style.photoCard}>
              <Image
                src={product.imagePhysique[0]}
                width={100}
                height={130}
                alt={product.titre}
              />
            </div>
            <div className={style.infoCard}>
              <div className={style.headInfo}>
                <p>{product.titre}</p>
                <span>
                  {product.buttons === "PDF"
                    ? product.prix_pdf * product.quantite
                    : product.prix_physique * product.quantite}
                  €
                </span>
              </div>
              <span style={{ fontSize: "1rem", marginBottom: "20px" }}>
                {product.buttons}
              </span>
              <span style={{ fontSize: "1rem", marginBottom: "5px" }}>
                {product.buttons === "PDF"
                  ? product.prix_pdf
                  : product.prix_physique}
                €
              </span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  className={style.button}
                  style={{
                    pointerEvents: product.buttons === "PDF" ? "none" : "auto",
                    opacity: product.buttons === "PDF" ? 0.5 : 1,
                  }}
                >
                  <button
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => handleDecrement(product.token)}
                  >
                    -
                  </button>
                  <span>
                    {product.buttons === "PDF" ? 1 : product.quantite}
                  </span>
                  <button
                    style={{
                      padding: "5px 10px",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => handleIncrement(product.token)}
                  >
                    +
                  </button>
                </div>
                <FaRegTrashCan
                  style={{
                    marginLeft: "10px",
                    marginTop: "5px",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRemove(product.token, product.buttons)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BasketProduct;
