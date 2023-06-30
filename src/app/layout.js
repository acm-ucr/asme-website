/* eslint-disable new-cap */
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Poppins, Abel } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-popping",
});

const abel = Abel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abel",
  weight: "400",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${abel.variable}`}>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
