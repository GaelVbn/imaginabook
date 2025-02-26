import React from "react";
import style from "./Footer.module.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={style.container}>
      <p style={{ fontSize: "10px" }}>
        &copy; {date} GaelVbn - Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
