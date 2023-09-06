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
  variable: "--font-poppins",
});

const abel = Abel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abel",
  weight: "400",
});

export const metadata = {
  title: "ASME at UCR",
  description:
    "The official website for ASME club at UCR, created by ACM at UCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${abel.variable}`}>
      <body className="flex flex-col items-center w-full">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
