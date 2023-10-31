"use client";
import { persistor, store } from "@/app/redux/store";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";
import "./styles/globals.css";
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
      <body
        className={`homebg m-3  xxl:px-[250px]  xl:px-24  px-1 ${open_sans.variable} font-sans `}
      >
        <AuthProvider>
          <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
              <Navbar />
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Footer />
            </PersistGate>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
