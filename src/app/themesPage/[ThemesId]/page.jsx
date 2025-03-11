"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import ThematicCards from "../../components/ThematicCards/ThematicCards";
import { fetchUrl } from "../../FetchUrl.js";

const Page = () => {
  const [themes, setThemes] = React.useState([]);
  const [error, setError] = React.useState(null);
  const params = useParams();

  // Récupérer le paramètre 'ThemesId' de l'URL
  const ThemesId = params.ThemesId;

  if (!ThemesId) {
    // Vous pouvez afficher un message de chargement ou une autre indication pendant que les données sont en cours de récupération
    return <div>Chargement...</div>;
  }

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await fetch(
          `${fetchUrl}/produits/categorie/${ThemesId}`
        );
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setThemes(data);
      } catch (err) {
        console.error("Erreur de récupération des thèmes :", err);
        setError(err.message);
      }
    };

    fetchThemes();
  }, [ThemesId]);
  return (
    <div>
      {/* Passer le paramètre récupéré au composant ThematicCards */}
      <ThematicCards themes={themes} />
    </div>
  );
};

export default Page;
