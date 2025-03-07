"use client";
import React, { useState } from "react";
import style from "./contactPage.module.css";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { fetchUrl } from "../FetchUrl";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch(`${fetchUrl}/contact/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Votre email a été envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Erreur serveur.");
    }
  };

  return (
    <div className={style.container}>
      <form className={style.infoDesktop}>
        <div className={style.card}>
          <h2 className={style.title}>Contactez-nous</h2>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message">
            <textarea
              className={style.textarea}
              id="message"
              name="message"
              placeholder="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={style.submit} onClick={handleSubmit}>
            Envoyer
          </button>
          {status && <p className={style.status}>{status}</p>}
        </div>
      </form>
      <div className={style.social}>
        <a
          href="https://www.linkedin.com/in/esther-vanbeveren-158a9b192/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <CiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/etudesxmaman"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default page;
