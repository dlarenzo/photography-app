import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"], display: "swap" });
const raleway = Raleway({ subsets: ["latin"], display: "swap" });
import Footer from "./components/Footer";

export const metadata = {
  title: "Lighthouse Photography",
  description: "Photography Studio in United States",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
