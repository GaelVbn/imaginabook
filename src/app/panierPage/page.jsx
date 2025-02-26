"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Panier from "../components/Panier/Panier";
import style from "./panierPage.module.css";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        router.push("/");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router]);

  return (
    <div className={style.container}>
      <Panier />
    </div>
  );
};

export default Page;
