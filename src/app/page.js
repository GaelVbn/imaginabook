"use client";
import style from "./components/Boutique/Boutique.module.css";
import Boutique from "./components/Boutique/Boutique";
import { useSelector } from "react-redux";

export default function Home() {
  const isOpacity = useSelector((state) => state.style.isVisible);
  return (
    <div
      className={style.container}
      style={{
        backgroundColor: isOpacity ? "rgba(100, 100, 100, 0.9)" : "",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Boutique />
    </div>
  );
}
