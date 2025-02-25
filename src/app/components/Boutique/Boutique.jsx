"use client";
import React from "react";
import { useSelector } from "react-redux";

const Boutique = () => {
  const isOpacity = useSelector((state) => state.style.isVisible);

  return <div>Boutique Compo</div>;
};

export default Boutique;
