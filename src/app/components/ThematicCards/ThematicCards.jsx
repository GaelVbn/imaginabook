"use client";
import React from "react";
import style from "./ThematicCards.module.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ThematicCards = ({ themes }) => {
  const router = useRouter();
  const params = useParams();

  // Récupérer le paramètre 'ThemesId' de l'URL
  const ThemesId = params.ThemesId;

  return (
    <div className={style["thematic-container"]}>
      <h2 className={style["thematic-title"]}>Les thématiques</h2>
      <div className={style["thematic-grid"]}>
        {themes.map((theme, index) => (
          <div
            key={index}
            className={style["thematic-card"]}
            onClick={() =>
              router.push(`/themesPage/${ThemesId}/produitPage/${theme.token}`)
            }
          >
            <Image
              className={style["thematic-image"]}
              src={theme.imagePhysique[0]}
              alt={theme.titre}
              width={500}
              height={500}
              layout="responsive"
              priority
            />
            <h3 className={style["thematic-card-title"]}>{theme.titre}</h3>
            <p className={style["thematic-card-description"]}>
              {theme.description.length > 100
                ? theme.description.slice(0, 100) + "... "
                : theme.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThematicCards;
