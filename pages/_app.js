import "../styles/globals.css";
/* eslint-disable new-cap */
import "bootstrap/dist/css/bootstrap.min.css";
import { Outfit, Montserrat } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${outfit.variable} ${montserrat.variable} bg-bob-background h-full`}
    >
      <Component {...pageProps} />
    </main>
  );
}
