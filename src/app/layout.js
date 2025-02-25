"use client";
import "./globals.css";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Head from "next/head";
import style from "./reducers/style.reducer";
import { useState } from "react";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// Configure ton store avec un reducer (si tu en as un)
const store = configureStore({
  reducer: { style },
});

export default function RootLayout({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const isShowed = (boolean) => {
    setIsVisible(boolean);
  };

  return (
    <Provider store={store}>
      <html lang="en" className="scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            as="image"
            href="imaginabook/public/Logo.png"
          ></link>
          <title>Imaginabook</title>
          <meta name="description" content={"Vente de book en ligne"} />
        </Head>
        <body
          style={{
            overflowY: isVisible ? "hidden" : "visible",
          }}
        >
          <Navbar isShowed={isShowed} />
          <main>{children}</main>
          {/*<Footer isVisible={isVisible} />*/}
        </body>
      </html>
    </Provider>
  );
}
