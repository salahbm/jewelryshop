"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Provider } from "react-redux";
import { store, persistor } from "@/app/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "./context/AuthProvider";
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
      <body className={`homebg m-3 ${open_sans.variable} font-sans`}>
        <AuthProvider>
          <Provider store={store}>
            <PersistGate loading={"loading"} persistor={persistor}>
              <Navbar />
              {children}
              <Footer />
            </PersistGate>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
