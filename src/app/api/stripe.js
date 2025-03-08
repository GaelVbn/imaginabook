import Stripe from "stripe";

console.log("STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY); // Ajoute ce log pour vérifier la clé

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-10-16",
});
