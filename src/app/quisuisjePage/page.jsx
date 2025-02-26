"use client";
import React from "react";
import style from "./quisuisjePage.module.css";
import Image from "next/image";
import photo from "../../../public/photo.png";
import { useSelector } from "react-redux";

const page = () => {
  const isOpacity = useSelector((state) => state.style.isVisible);
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.photo}>
          <Image
            src={photo}
            alt="photo"
            width={200}
            style={{ borderRadius: "15%", marginTop: "5%", marginBottom: "5%" }}
            className={style.photoProfile}
          />
        </div>
        <div className={style.paragraph}>
          <p style={{ fontSize: "1.1rem", textAlign: "center" }}>
            {" "}
            Bonjour et bienvenue sur Imaginabook ! <br />
            <br /> Je m’appelle Esther Vanbeveren, fière représentante de la
            génération milleniale née en 1993. Résidant à Téteghem, non loin de
            la charmante ville de Dunkerque, je suis fiancée et maman d’une
            petite fille née en 2022, et belle-maman de deux adorables filles
            nées en 2013 et 2019.
            <br />
            <br /> Avec une carrière riche et variée dans l'animation, la garde
            d'enfants et en tant qu'agent de crèche, la créativité est devenue
            ma seconde nature. C'est dans ce cadre que j'ai commencé à créer des
            ebooks pour ma fille, des créations qui, grâce au soutien
            indéfectible de mon entourage et de la communauté Instagram, sont
            désormais à votre disposition pour ravir petits et grands. <br />
            <br /> Je vous invite à découvrir mes créations et j'espère de tout
            cœur qu'elles sauront vous plaire.
            <br />
            <br /> Merci de votre visite et bonne lecture sur Imaginabook !{" "}
            <br />
            <br /> Esther Vanbeveren 🎨📚
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
