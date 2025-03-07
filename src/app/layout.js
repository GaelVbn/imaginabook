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
            <Navbar isShowed={isShowed} />
            <main style={{ flex: "1 0 auto" }}>{children}</main>
            <Footer isVisible={isVisible} style={{ flexShrink: 0 }} />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
