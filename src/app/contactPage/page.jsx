import React from "react";
import style from "./contactPage.module.css";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const page = () => {
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
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="message">
            <textarea
              className={style.textarea}
              id="message"
              name="message"
              placeholder="message"
              required
            />
          </label>
          <button type="submit" className={style.submit}>
            Envoyer
          </button>
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
