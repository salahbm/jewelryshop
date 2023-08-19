import { ourwork } from "@/public/assets";
import Image from "next/image";
import React from "react";

const OurWork = () => {
  return (
    <div className="my-2">
      <Image src={ourwork} alt="shop" className="rounded-2xl" />
    </div>
  );
};

export default OurWork;
