// pages/api/_middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Configurer les en-têtes CORS
  res.headers.set("Access-Control-Allow-Origin", "https://www.imaginabook.com");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Gérer la requête OPTIONS pour le pré-vol
  if (req.method === "OPTIONS") {
    res.headers.set("Access-Control-Max-Age", "86400");
    res.headers.set("Access-Control-Allow-Origin", "*");
    return res.status(204).end();
  }

  return res;
}
