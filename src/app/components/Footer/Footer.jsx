import React from "react";
import style from "./Footer.module.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const isOpacity = useSelector((state) => state.style.isVisible);
  return (
    <footer
      className={style.container}
      style={{
        backgroundColor: isOpacity ? "rgba(100, 100, 100, 0.9)" : "",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <p>&copy; 2023 Mon Application</p>
    </footer>
  );
};

export default Footer;
