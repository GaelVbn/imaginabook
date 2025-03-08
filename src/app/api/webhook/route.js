import Stripe from "stripe";

// Instancier Stripe avec ta clé secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false, // Stripe envoie les données en brut
  },
};

// Fonction pour lire le corps de la requête et le transformer en Buffer
async function getBufferFromStream(req) {
  const arrayBuffer = await req.arrayBuffer(); // Utilise arrayBuffer() pour obtenir les données
  return Buffer.from(arrayBuffer); // Convertir l'ArrayBuffer en Buffer
}

// Gestion de la méthode POST
export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // Lire le corps de la requête et le transformer en Buffer
    const buf = await getBufferFromStream(req);

    // Log pour vérifier le contenu du corps de la requête
    console.log("Corps brut de la requête Stripe:", buf.toString());

    event = stripe.webhooks.constructEvent(buf, sig, endpointSecret); // Vérifier la signature
  } catch (err) {
    console.error("Erreur Webhook Stripe:", err.message);
    return new Response(`Webhook error: ${err.message}`, { status: 400 });
  }

  // 🎯 Détecter si le paiement a réussi
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Récupérer l'email et l'ID de la session Stripe
    const email = session.customer_details.email;
    const sessionId = session.id;

    const tokensString = session.metadata.tokens;
    const format = session.metadata.formats;

    // Convertir la chaîne de caractères en tableau
    const tokens = tokensString.split(", ");

    console.log("token", tokens);
    console.log("format", format);

    console.log("✅ Paiement réussi ! Envoi de l'email à :", email);

    // ➜ Appel au backend Express pour envoyer l'email
    try {
      console.log("🚀 Envoi de la requête POST pour l'email au backend...");
      await fetch(`${process.env.BACKEND_URL}/api/email/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, email, tokens }),
      });
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi de l'email :", error);
    }
  }

  // Si tout s'est bien passé, on retourne une réponse
  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
