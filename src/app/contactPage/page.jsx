import React from "react";
import style from "./contactPage.module.css";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const page = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Contactez-moi</h1>
      <div className={style.infoDesktop}>
        <p className={style.text}>
          Nous serions ravis de vous entendre. <br />
          <br />
          N'hésitez pas à nous contacter pour toute question ou suggestion.
        </p>

        <div className={style.card}>
          <span>
            <strong>Email : </strong>
            <br />
            Contact@imaginabook.com
          </span>
          <span>
            <strong>Horaires SAV : </strong>
            <br />
            9h/17h du lundi au vendredi
          </span>
          <span>
            <strong>SIRET : </strong>
            <br />
            893 805 242
          </span>
        </div>
      </div>
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
