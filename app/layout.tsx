"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const metadata: Metadata = {
  title: "Mr Joni",
  description: "Jewelry Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`homebg m-3 ${open_sans.variable} font-sans`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
