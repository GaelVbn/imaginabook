"use client";
import "./globals.css"; // Importation des styles globaux
import Navbar from "../app/components/NavBar/NavBar";
import Footer from "../app/components/Footer/Footer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useState } from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import styleReducer from "../app/reducers/style.reducer";
import panierReducer from "../app/reducers/panier.reducer";
import storageEngine from "./storageEngine";
import { Toaster } from "react-hot-toast";

// Configuration du store Redux avec persistance
const persistConfig = {
  key: "root",
  storage: storageEngine,
};
const rootReducer = combineReducers({
  style: styleReducer,
  panier: panierReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["panier", "style"],
      },
    }),
});

const persistor = persistStore(store);

export default function RootLayout({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const isShowed = (boolean) => {
    setIsVisible(boolean);
  };

  return (
    <html lang="en" id="html">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Imaginabook</title>
        <meta
          name="Site e-commerce de vente de livres pour enfants"
          content="Achetez en ligne des livres pour enfants sur Imaginabook, votre boutique en ligne de confiance."
        />
        <meta
          name="keywords"
          content="e-commerce, boutique en ligne, produits, enfants, kids, instagram, craft, livres, lecture, éducation, contes, développement, imagination"
        />
        <meta name="Gael" content="Vanbeveren" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dlnktdljy/image/upload/t_square%20logo/v1741615527/Logo_u0gpcy.png"
          type="image/png"
          sizes="900x900"
        />
      </head>
      <body
        style={{
          overflowY: isVisible ? "hidden" : "visible",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {isVisible && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
            }}
          />
        )}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Toaster />
            <Navbar isShowed={isShowed} />
            <main style={{ flex: "1 0 auto" }}>{children}</main>
            <Footer isVisible={isVisible} style={{ flexShrink: 0 }} />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
