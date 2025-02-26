import React from "react";
import style from "./BoutiqueProducts.module.css";
import Image from "next/image";
import Produit from "../../../../public/produit.JPG";
const BoutiqueProducts = () => {
  return (
    <div className={style.container}>
      <div className={style.photo}>
        <Image
          src={Produit}
          style={{ borderRadius: "10%" }}
          alt="Image product"
        />
      </div>
      <h3 style={{ textAlign: "center" }}>Produit</h3>
    </div>
  );
};

export default BoutiqueProducts;
