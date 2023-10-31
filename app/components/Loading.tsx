import React from "react";
import { loading } from "@/public/assets";
import Image from "next/image";

const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "fixed", // Use "fixed" to cover the entire viewport
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image width={200} height={200} alt="Loading" src={loading} />
    </div>
  );
};

export default Loading;
