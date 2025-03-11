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
      const cache = await caches.open("my-cache");
      const cachedResponse = await cache.match(
        `${fetchUrl}/produits/categorie/${ThemesId}`
      );

      if (cachedResponse) {
        const data = await cachedResponse.json();
        setThemes(data);
      } else {
        try {
          const response = await fetch(
            `${fetchUrl}/produits/categorie/${ThemesId}`
          );

          if (!response.ok) {
            throw new Error(
              `Erreur: ${response.status} ${response.statusText}`
            );
          }

          const data = await response.json();
          setThemes(data);

          // Store the response in the cache with a 15-minute expiration
          cache.put(
            `${fetchUrl}/produits/categorie/${ThemesId}`,
            new Response(JSON.stringify(data), {
              headers: {
                "Content-Type": "application/json",
                "Cache-Control": "max-age=900",
              },
            })
          );
        } catch (err) {
          console.error("Erreur de récupération des thèmes :", err);
          setError(err.message);
        }
      }
    };

    fetchThemes();

    // Refresh the cache every 15 minutes
    const interval = setInterval(fetchThemes, 900000); // 15 minutes in milliseconds

    return () => clearInterval(interval);
  }, [fetchUrl, ThemesId]);

  return (
    <div>
      {/* Passer le paramètre récupéré au composant ThematicCards */}
      <ThematicCards themes={themes} />
    </div>
  );
};

export default Page;
