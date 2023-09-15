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
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
      </head>
      <body>
        <Navigation />
        <div className="w-full flex flex-col min-h-screen overflow-hidden items-center justify-center mb-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
