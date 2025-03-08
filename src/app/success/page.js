"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearPanier } from "../reducers/panier.reducer";

export default function Success() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Vider le panier après la confirmation du paiement
    dispatch(clearPanier());
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Merci pour votre achat !</h1>
      <p>Votre paiement a été effectué avec succès.</p>
    </div>
  );
}
