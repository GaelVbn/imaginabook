"use client";
import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import logo from "../../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import Panier from "../PanierPopover/Panier";
import { useDispatch } from "react-redux";
import { setIsVisible } from "../../reducers/style.reducer";

const NavBar = ({ isShowed }) => {
  const dispatch = useDispatch();

  const [showPopover, setShowPopover] = useState(false);
  const [showPopoverPanier, setShowPopoverPanier] = useState(false);

  const togglePopover = () => {
    setShowPopover((prev) => !prev);
  };

  const togglePopoverPanier = () => {
    setShowPopoverPanier((prev) => !prev);
    isShowed(!showPopoverPanier);
  };

  const closePanier = () => {
    setShowPopoverPanier(false);
    isShowed(!showPopoverPanier);
  };

  useEffect(() => {
    dispatch(setIsVisible(showPopoverPanier));
  }, [showPopoverPanier]);

  return (
    <nav
      className={style.container}
      style={{
        backgroundColor: showPopoverPanier ? "rgba(100, 100, 100, 0.9)" : "",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className={style.menu} onClick={togglePopover}>
        {showPopover ? (
          <RxCross2 style={{ fontSize: "2.3rem" }} />
        ) : (
          <IoMenu style={{ fontSize: "2.3rem" }} />
        )}
      </div>
      {showPopover && (
        <div className={style.popover}>
          <Link href="/quisuisjePage" onClick={togglePopover}>
            <button className={style.buttonPopover}>Qui suis-je ?</button>
          </Link>
          <Link href="/contactPage" onClick={togglePopover}>
            <button className={style.buttonPopover}>Contactez-moi</button>
          </Link>
        </div>
      )}
      <Link href="/" className={style.logo}>
        <Image src={logo} alt="Logo" width={230} height={125} priority={true} />
      </Link>
      <div className={style.shoppingbag}>
        <span className={style.badge}>0</span>
        <LiaShoppingBagSolid
          style={{ fontSize: "2.3rem" }}
          onClick={togglePopoverPanier}
        />
        {showPopoverPanier && <Panier onClose={closePanier} />}
      </div>

      <Link href="/" className={style.logoDesktop}>
        <Image src={logo} alt="Logo" width={230} height={125} priority />
      </Link>
      <div className={style.onglets}>
        <Link href="/quisuisjePage">
          <button className={style.button}>Qui suis-je ?</button>
        </Link>
        <Link href="/contactPage">
          <button className={style.button}>Contactez-moi</button>
        </Link>
      </div>
      <div className={style.shoppingbagDesktop}>
        <span className={style.badgeDesktop}>0</span>
        <LiaShoppingBagSolid
          style={{ fontSize: "2.3rem", cursor: "pointer", padding: "5px" }}
          onClick={togglePopoverPanier}
        />
        {showPopoverPanier && <Panier onClose={closePanier} />}
      </div>
    </nav>
  );
};

export default NavBar;
