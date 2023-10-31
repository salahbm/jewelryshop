import React from "react";
import { loading } from "@/public/assets";
import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <Image width={50} height={50} alt="Loading" src={loading} />
    </div>
  );
};

export default Loading;
