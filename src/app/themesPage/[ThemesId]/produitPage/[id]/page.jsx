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
  const [quantite, setQuantite] = useState(1);

  const params = useParams();
  const id = params.id;

  const handlePDFClick = () => {
    setButtons("PDF");
  };

  const handlePhysiqueClick = () => {
    setButtons("Physique");
  };

  const handleIncrement = () => {
    setQuantite(quantite + 1);
  };

  const handleDecrement = () => {
    if (quantite > 1) {
      setQuantite(quantite - 1);
    }
  };

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await fetch(`${fetchUrl}/produits`, {
          headers: {
            Authorization: `Bearer ${id}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setProduit(data);
        setImgPDF(data[0]?.imagesPDF);
        setImgPhysique(data[0]?.imagePhysique);
      } catch (err) {
        console.error("Erreur de récupération du produit :", err);
      }
    };

    fetchProduit();
  }, [id]);
  const handleAddToCart = () => {
    const titre = produit[0]?.titre;
    const prix_pdf = produit[0]?.prix_pdf;
    const prix_physique = produit[0]?.prix_physique;
    const imagePhysique = produit[0]?.imagePhysique;
    const imagesPDF = produit[0]?.imagesPDF;
    const token = produit[0]?.token;

    dispatch(
      addItem({
        titre,
        prix_pdf,
        prix_physique,
        imagePhysique,
        imagesPDF,
        buttons,
        token,
        quantite: quantite,
      })
    );
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <div className={style.slide}>
          <Slideshow
            imgPhysique={imgPhysique}
            imgPDF={imgPDF}
            buttons={buttons}
          />
        </div>
        <div className={style.description}>
          <div className={style.TitleDesc}>
            <h1 className={style.title}>{produit[0]?.titre}</h1>
            <p>{produit[0]?.description}</p>
          </div>

          <div className={style.btnFormat}>
            <button
              onClick={handlePDFClick}
              style={{ backgroundColor: buttons === "PDF" ? "orange" : "" }}
            >
              PDF
            </button>
            <button
              onClick={handlePhysiqueClick}
              style={{
                backgroundColor: buttons === "Physique" ? "orange" : "",
              }}
            >
              Physique
            </button>
          </div>

          <div className={style.priceContainer}>
            <span className={style.price}>
              {buttons === "Physique"
                ? produit[0]?.prix_physique
                : produit[0]?.prix_pdf}
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
                  {buttons === "PDF" ? 1 : quantite}
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
      </div>
    </div>
  );
};

export default page;
