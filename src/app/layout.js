import "./globals.css";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Head from "next/head";

export const metadata = {
  title: "Imaginabook",
  description: "Vente de book en ligne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
