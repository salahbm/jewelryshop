import { diamondsshop } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Diamonds = () => {
  return (
    <div>
      <Image src={diamondsshop} alt="shop" className="rounded-2xl" />
    </div>
  );
};

export default Diamonds;
