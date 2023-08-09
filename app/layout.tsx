import Navbar from "./components/Navbar";
import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-transparent m-3">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
