"use client";
import React from "react";
import style from "./BasketProduct.module.css";
import Image from "next/image";
import book from "../../../../public/produit.JPG";
import { FaRegTrashCan } from "react-icons/fa6";

const BasketProduct = () => {
  return (
    <div className={style.container}>
      <div className={style.photoCard}>
        <Image src={book} width={100} height={130} alt="book" />
      </div>
      <div className={style.infoCard}>
        <div className={style.headInfo}>
          <p>Titre</p>
          <span>19,90€</span>
        </div>
        <span style={{ fontSize: "12px", marginBottom: "20px" }}>PDF</span>
        <span style={{ fontSize: "12px", marginBottom: "5px" }}>19,90€</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className={style.button}>
            <button
              style={{
                padding: "5px 10px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              +
            </button>
            <span>1</span>
            <button
              style={{
                padding: "5px 10px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              -
            </button>
          </div>
          <FaRegTrashCan
            style={{ marginLeft: "10px", marginTop: "5px", fontSize: "1.2rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
