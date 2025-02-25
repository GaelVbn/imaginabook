import React from "react";
import Panier from "../components/Panier/Panier";
import style from "./panierPage.module.css";
const page = () => {
  return (
    <div className={style.container}>
      <Panier />
    </div>
  );
};

export default page;
