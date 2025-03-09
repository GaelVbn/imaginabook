import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Appliquer les en-têtes CORS pour les requêtes provenant de ton frontend
  res.headers.set("Access-Control-Allow-Origin", "https://www.imaginabook.com");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Gérer les requêtes OPTIONS pour les pré-vols
  if (req.method === "OPTIONS") {
    // Répondre avec un statut 204 pour la pré-requête OPTIONS (en-tête CORS valide)
    res.headers.set("Access-Control-Max-Age", "86400"); // Cache pour 1 jour
    return res.status(204).end();
  }

  // Si la requête est un POST pour /api/checkout_sessions, s'assurer que les en-têtes sont là aussi
  if (
    req.method === "POST" &&
    req.nextUrl.pathname === "/api/checkout_sessions"
  ) {
    res.headers.set(
      "Access-Control-Allow-Origin",
      "https://www.imaginabook.com"
    );
  }

  return res;
}
