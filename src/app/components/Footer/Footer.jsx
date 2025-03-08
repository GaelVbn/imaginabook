"use client";
import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={style.container}>
      <p style={{ fontSize: "10px", color: "black", paddingTop: "1%" }}>
        <a
          href="/CGV.pdf"
          download
          aria-label="Télécharger les Conditions Générales de Vente"
          style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}
          onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}
        >
          Télécharger nos Conditions Générales de Vente (CGV)
        </a>
      </p>
      <p style={{ fontSize: "10px", paddingBottom: "1%", margin: "0%" }}>
        &copy; {date} GaelVbn - Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
