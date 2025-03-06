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
      try {
        const response = await fetch(`${fetchUrl}/categories`);

        if (!response.ok) {
          throw new Error(`Erreur: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Erreur de récupération des catégories :", err);
        setError(err.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={style.containerG}>
      <Boutique categories={categories} />
    </div>
  );
}
