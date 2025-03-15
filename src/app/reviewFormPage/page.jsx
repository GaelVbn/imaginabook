"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Star } from "lucide-react";
import styles from "./ReviewForm.module.css";
import { fetchUrl } from "../FetchUrl";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [tokenReview, setTokenReview] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("tokenReview");
    if (!token) {
      setTokenReview(null);
      setIsValid(false);
      return;
    } else {
      setTokenReview(token);
    }

    // Vérification de la validité du token
    fetch(`${fetchUrl}/email/validate-token`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          setIsValid(true);
        } else {
          setIsValid(false);
          alert(data.message);
        }
      })
      .catch(() => {
        setIsValid(false);
        alert("Erreur lors de la vérification du token.");
      });
  }, [searchParams]);

  // Si le token est invalide, on affiche un message
  if (!isValid) {
    return (
      <div style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
        Vous n'avez pas les droits pour évaluer ce livre.
      </div>
    );
  }

  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si les champs sont remplis
    if (rating === 0 || comment === "" || name === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      // Envoi de la requête POST avec les données
      const res = await fetch(`${fetchUrl}/review/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          rating,
          comment,
        }),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi de l'avis.");
      }

      alert("Avis envoyé avec succès. Merci !");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.reviewContainer}>
      <h2 className={styles.reviewTitle}>Donnez votre avis</h2>

      <div className={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            className={`${styles.starIcon} ${
              index <= (hover || rating) ? styles.starFilled : ""
            }`}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </div>
      <input
        type="text"
        value={name}
        placeholder="Nom"
        onChange={(e) => setName(e.target.value)}
        className={styles.reviewName}
      />
      <textarea
        placeholder="Écrivez votre avis ici..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={styles.reviewTextarea}
      />

      <button onClick={handleSubmit} className={styles.reviewButton}>
        Soumettre
      </button>
    </div>
  );
}
