"use client";
import style from "./components/Boutique/Boutique.module.css";
import Boutique from "./components/Boutique/Boutique";
import { useEffect, useState } from "react";
import { fetchUrl } from "./FetchUrl";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      const cache = await caches.open("my-cache");
      const cachedResponse = await cache.match(`${fetchUrl}/categories`);

      if (cachedResponse) {
        const data = await cachedResponse.json();
        setCategories(data);
      } else {
        try {
          const response = await fetch(`${fetchUrl}/categories`);

          if (!response.ok) {
            throw new Error(
              `Erreur: ${response.status} ${response.statusText}`
            );
          }

          const data = await response.json();
          setCategories(data);

          // Store the response in the cache with a 15-minute expiration
          cache.put(
            `${fetchUrl}/categories`,
            new Response(JSON.stringify(data), {
              headers: {
                "Content-Type": "application/json",
                "Cache-Control": "max-age=900",
              },
            })
          );
        } catch (err) {
          console.error("Erreur de récupération des catégories :", err);
          setError(err.message);
        }
      }
    };

    fetchCategories();

    // Refresh the cache every 15 minutes
    const interval = setInterval(fetchCategories, 900000); // 15 minutes in milliseconds

    return () => clearInterval(interval);
  }, [fetchUrl]);

  return (
    <div className={style.containerG}>
      <Boutique categories={categories} />
    </div>
  );
}
