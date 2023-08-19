import { footer } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Image src={footer} alt="shop" className="rounded-2xl" />
    </div>
  );
};

export default Footer;
