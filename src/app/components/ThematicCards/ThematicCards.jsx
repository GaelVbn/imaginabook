"use client";
import React from "react";
import style from "./ThematicCards.module.css";
import image1 from "../../../../public/category/1.jpeg";
import image2 from "../../../../public/category/2.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";
const themes = [
  {
    title: "Pâques",
    description:
      "Description du produit, de la thématique du livre approprié pour cette catégorie d'âge.",
    image: image1,
  },
  {
    title: "Dinosaure",
    description:
      "Description du produit, de la thématique du livre approprié pour cette catégorie d'âge.",
    image: image2,
  },
  {
    title: "Formes & Couleurs",
    description:
      "Description du produit, de la thématique du livre approprié pour cette catégorie d'âge.",
    image: image2,
  },
  {
    title: "Dinosaure",
    description:
      "Description du produit, de la thématique du livre approprié pour cette catégorie d'âge.",
    image: image2,
  },
  {
    title: "Formes & Couleurs",
    description:
      "Description du produit, de la thématique du livre approprié pour cette catégorie d'âge.",
    image: image2,
  },
];

const ThematicCards = () => {
  const router = useRouter();
  return (
    <div className={style["thematic-container"]}>
      <h2 className={style["thematic-title"]}>Les thématiques</h2>
      <div className={style["thematic-grid"]}>
        {themes.map((theme, index) => (
          <div
            key={index}
            className={style["thematic-card"]}
            onClick={() =>
              router.push(`/themesPage/${index + 1}/produitPage/${index + 1}`)
            }
          >
            <Image
              className={style["thematic-image"]}
              src={theme.image}
              alt={theme.title}
              width={500}
              objectFit="cover"
              layout="responsive"
            ></Image>
            <h3 className={style["thematic-card-title"]}>{theme.title}</h3>
            <p className={style["thematic-card-description"]}>
              {theme.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThematicCards;
