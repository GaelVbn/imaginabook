"use client";
import React, { use, useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

const NavBar = ({ isShowed }) => {
  const numOfItems = useSelector((state) => state.panier.items.length);
  const quantityOfItems = useSelector((state) =>
    state.panier.items.reduce((total, item) => total + item.quantite, 0)
  );
  const dispatch = useDispatch();

  const [showPopover, setShowPopover] = useState(false);
  const [showPopoverPanier, setShowPopoverPanier] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
  }, [showPopoverPanier, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={style.container}>
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
            <button className={style.buttonPopover}>Notre Histoire</button>
          </Link>
          <div className={style.divider}></div>
          <Link href="/contactPage" onClick={togglePopover}>
            <button className={style.buttonPopover}>Contactez-nous</button>
          </Link>
          <div className={style.divider}></div>
        </div>
      )}
      <Link href="/" className={style.logo}>
        <Image src={logo} alt="Logo" width={230} height={125} priority={true} />
      </Link>
      <div className={style.shoppingbag}>
        <span className={style.badge}>{quantityOfItems}</span>
        {isSmallScreen ? (
          <Link href="/panierPage">
            <LiaShoppingBagSolid style={{ fontSize: "2.3rem" }} />
          </Link>
        ) : (
          <LiaShoppingBagSolid
            style={{ fontSize: "2.3rem" }}
            onClick={togglePopoverPanier}
          />
        )}
        {showPopoverPanier && <Panier onClose={closePanier} />}
      </div>

      <Link href="/" className={style.logoDesktop}>
        <Image src={logo} alt="Logo" width={230} height={125} priority />
      </Link>
      <div className={style.onglets}>
        <Link href="/quisuisjePage">
          <button className={style.button}>Notre Histoire</button>
        </Link>
        <Link href="/contactPage">
          <button className={style.button}>Contactez-nous</button>
        </Link>
      </div>
      <div className={style.shoppingbagDesktop}>
        <span className={style.badgeDesktop}>{quantityOfItems}</span>
        {isSmallScreen ? (
          <Link href="/panierPage">
            <LiaShoppingBagSolid
              style={{
                fontSize: "2.3rem",
                cursor: "pointer",
                padding: "5px",
              }}
            />
          </Link>
        ) : (
          <LiaShoppingBagSolid
            style={{ fontSize: "2.3rem", cursor: "pointer", padding: "5px" }}
            onClick={togglePopoverPanier}
          />
        )}
        {showPopoverPanier && <Panier onClose={closePanier} />}
      </div>
    </nav>
  );
};

export default NavBar;
