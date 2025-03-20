import { stripe } from "../../api/stripe.js"; // Vérifie le chemin d'import

export async function POST(req) {
  try {
    const { products } = await req.json(); // Récupérer les données envoyées en POST

    // ➜ Filtrer les produits physiques et calculer les frais de livraison
    const physicalProducts = products.filter(
      (product) => product.format.toLowerCase() === "physique"
    );

    let shippingCost = 0;
    const physicalQuantity = physicalProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );

    // Calcul du total du panier
    const totalCartValue = physicalProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

    // Si le total du panier est supérieur ou égal à 50€, les frais sont gratuits
    if (totalCartValue >= 50) {
      shippingCost = 0;
    } else {
      if (physicalQuantity > 0) {
        shippingCost = 430; // 4,30€ de base jusqu'à 3 articles
        if (physicalQuantity > 3) {
          shippingCost += (physicalQuantity - 3) * 10; // +0,10€ par article supplémentaire
        }
      }
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      // ➜ Active la collecte de l'adresse de livraison
      shipping_address_collection: {
        allowed_countries: ["FR", "BE"], // Ajoute les pays où tu livres
      },

      phone_number_collection: {
        enabled: true,
      },

      // ➜ Ajoute dynamiquement les frais de livraison uniquement si des articles physiques sont présents
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: shippingCost, // Montant dynamique calculé
              currency: "eur",
            },
            display_name: "Livraison standard",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
      ],

      line_items: products.map((product) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
            images: product.image ? [product.image] : [],
          },
          unit_amount: product.price * 100, // Conversion de l'euro en centimes
        },
        quantity: product.quantity,
      })),

      mode: "payment",

      // ➜ Active la collecte de l'adresse de facturation (optionnel)
      billing_address_collection: "required",

      metadata: {
        tokens: products
          .filter((product) => product.format === "PDF")
          .map((product) => product.token)
          .join(", "), // Convertir en chaîne séparée par une virgule
      },

      // URLs de redirection
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error("Erreur Stripe:", error);
    return new Response(
      JSON.stringify({
        error:
          "Une erreur est survenue lors de la création de la session de paiement",
      }),
      { status: 500 }
    );
  }
}
