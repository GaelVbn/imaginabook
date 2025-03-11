"use client";
import React, { useState, useEffect } from "react";
import style from "./produitPage.module.css";
import Slideshow from "@/app/components/SlideImages/SlideImages";
import { useParams } from "next/navigation";
import { fetchUrl } from "../../../../FetchUrl.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increment,
  decrement,
} from "@/app/reducers/panier.reducer.js";

const page = () => {
  const dispatch = useDispatch();

  const [produit, setProduit] = useState([]);
  const [buttons, setButtons] = useState("Physique");
  const [imgPDF, setImgPDF] = useState([]);
  const [imgPhysique, setImgPhysique] = useState([]);
  const [quantitePDF, setQuantitePDF] = useState(1);
  const [quantitePhysique, setQuantitePhysique] = useState(1);

  const [loading, setLoading] = useState(false);

  const params = useParams();
  const id = params.id;

  const handlePDFClick = () => {
    setButtons("PDF");
  };

  const handlePhysiqueClick = () => {
    setButtons("Physique");
  };

  const handleIncrement = () => {
    if (buttons === "Physique") {
      setQuantitePhysique(quantitePhysique + 1);
    } else {
      setQuantitePDF(quantitePDF + 1);
    }
  };

  const handleDecrement = () => {
    if (buttons === "Physique") {
      setQuantitePhysique(quantitePhysique - 1);
    } else {
      setQuantitePDF(quantitePDF - 1);
    }
  };

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await fetch(`${fetchUrl}/produit`, {
          headers: {
            Authorization: `Bearer ${id}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setProduit(data);
        setImgPDF(data?.imagesPDF);
        setImgPhysique(data?.imagePhysique);
      } catch (err) {
        console.error("Erreur de récupération du produit :", err);
      }
    };

    fetchProduit();
  }, [id]);

  const handleAddToCart = () => {
    const titre = produit?.titre;
    const prix_pdf = produit?.prix_pdf;
    const prix_physique = produit?.prix_physique;
    const imagePhysique = produit?.imagePhysique;
    const imagesPDF = produit?.imagesPDF;
    const token = produit?.token;

    dispatch(
      addItem({
        titre,
        prix_pdf,
        prix_physique,
        imagePhysique,
        imagesPDF,
        buttons,
        token,
        quantite: buttons === "PDF" ? quantitePDF : quantitePhysique,
      })
    );
  };

  const handlePaiement = async () => {
    setLoading(true);

    const name = produit?.titre;
    const price =
      buttons === "PDF" ? produit?.prix_pdf : produit?.prix_physique;
    const quantity = buttons === "PDF" ? quantitePDF : quantitePhysique;
    const image = buttons === "PDF" ? imgPDF[0] : imgPhysique[0];
    const token = produit?.token;
    const format = buttons;
    const products = [
      {
        name,
        price,
        quantity,
        image,
        token,
        format,
      },
    ];

    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products }),
    });
    const data = await response.json();
    console.log("Réponse du serveur :", data);

    if (data.url) {
      window.location.href = data.url; // Redirige l'utilisateur vers Stripe
    } else {
      alert("Erreur lors de la création de la session");
    }

    setLoading(false);
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        {/* Vérification des données avant d'afficher la page */}
        {!imgPhysique || !imgPDF ? (
          <div>Chargement...</div> // Message de chargement pendant que les données sont récupérées
        ) : (
          <>
            <div className={style.slide}>
              <Slideshow
                imgPhysique={imgPhysique}
                imgPDF={imgPDF}
                buttons={buttons}
              />
            </div>
            <div className={style.description}>
              <div className={style.TitleDesc}>
                <h1 className={style.title}>{produit?.titre}</h1>
                <p>{produit?.description}</p>
              </div>

              <div className={style.btnFormat}>
                <button
                  onClick={handlePDFClick}
                  style={{
                    backgroundColor: buttons === "PDF" ? "orange" : "",
                    boxShadow:
                      buttons === "PDF"
                        ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        : "",
                    border: buttons === "Physique" ? "0.5px solid #343434" : "",
                  }}
                >
                  PDF
                </button>
                <button
                  onClick={handlePhysiqueClick}
                  style={{
                    backgroundColor: buttons === "Physique" ? "orange" : "",
                    boxShadow:
                      buttons === "Physique"
                        ? "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        : "",
                    border: buttons === "PDF" ? "0.5px solid #343434" : "",
                  }}
                >
                  Physique
                </button>
              </div>

              <div className={style.priceContainer}>
                <span className={style.price}>
                  {buttons === "Physique"
                    ? produit?.prix_physique
                    : produit?.prix_pdf}
                  €
                </span>
                <div>
                  <span
                    className={style.quantity}
                    style={{ opacity: buttons === "PDF" ? 0.5 : 1 }}
                  >
                    Quantité :
                  </span>
                  <div
                    className={style.quantityBtn}
                    style={{
                      pointerEvents: buttons === "PDF" ? "none" : "auto",
                      opacity: buttons === "PDF" ? 0.5 : 1,
                    }}
                  >
                    <button
                      style={{
                        border: "none",
                        padding: "0.5rem",
                        fontSize: "1.5rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <button
                      style={{
                        border: "none",
                        padding: "0.5rem 1.5rem",
                        backgroundColor: "transparent",
                        disabled: true,
                        fontSize: "1rem",
                      }}
                    >
                      {buttons === "PDF" ? quantitePDF : quantitePhysique}
                    </button>
                    <button
                      style={{
                        border: "none",
                        padding: "0.5rem",
                        fontSize: "1.5rem",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={style.actionBtn}>
                  <button
                    className={style.addToCartBtn}
                    style={{
                      backgroundColor: "#2A628F",
                      cursor: "pointer",
                      border: "none",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                    onClick={() => {
                      handleAddToCart();
                    }}
                  >
                    Ajouter au panier
                  </button>
                  <button
                    onClick={handlePaiement}
                    className={style.addToCartBtn}
                    style={{
                      backgroundColor: "#E76F51",
                      cursor: "pointer",
                      border: "none",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    Acheter
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
