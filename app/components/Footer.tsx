"use client";
import React from "react";
import {
  AiOutlineArrowRight,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="p-2 w-full">
      <h2 className="text-white font-mono font-extrabold w-full md:text-6xl lg:text-8xl  text-2xl mb-8 text-center">
        Get The Last Information From Us
      </h2>
      <div className="flex justify-between items-center lg:px-20 placeholder:px-3">
        <span className=" w-1/2 md:w-1/3  lg:text-xl italic text-yellow-500  text-xs overflow-hidden ">
          Be the first to know about exciting new desings, speacial collections,
          store openings and much more ~~~
        </span>
        <div className="flex justify-between items-center bg-neutral-900  w-1/2 md:h-16 h-8 rounded-3xl pl-5 pr-2 mb-6">
          <input
            type="email"
            placeholder="Your Email Here"
            className=" bg-neutral-900 outline-none text-lightText w-full md:h-16 h-8 "
          />
          <AiOutlineArrowRight className="text-Red hover:text-yellow-500 duration-500 bg-slate-100 md:w-14 md:h-14 w-8 h-6 rounded-3xl " />
        </div>
      </div>

      <div className="flex items-center justify-between flex-col md:flex-row py-5">
        <p className="text-white  text-sm md:text-2xl mb-2">
          MrJoni All Rights are Reserved
        </p>
        <div className="flex items-center justify-between gap-2 md:gap-10 ">
          <FooterSMBTN Press={() => console.log("insta")} title="Facebook">
            <AiFillFacebook />
          </FooterSMBTN>
          <FooterSMBTN Press={() => console.log("insta")} title="Instagram">
            <AiFillInstagram />
          </FooterSMBTN>
          <FooterSMBTN Press={() => console.log("insta")} title="Whatsapp">
            <AiOutlineWhatsApp />
          </FooterSMBTN>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterSMBTN = ({
  Press,
  title,
  children,
}: {
  Press: () => void;
  title: string;
  children: any;
}) => {
  return (
    <div
      onClick={Press}
      className={`group rounded-3xl flex justify-center items-center px-2 cursor-pointer gap-1 relative border-2 border-yellow-500 hover:border-0`}
    >
      <p className="text-yellow-500 opacity-100 duration-300 group-hover:opacity-0">
        {title}
      </p>
      <span
        className={`${
          title === "Instagram"
            ? "text-red-600"
            : title === "Facebook"
            ? "text-blue"
            : "text-green"
        } absolute left-1/2 transform -translate-x-1/2  opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100 border-2 rounded-3xl w-20 h-7 text-2xl flex justify-center items-center ${
          title === "Instagram"
            ? "group-hover:border-red-600"
            : title === "Facebook"
            ? "group-hover:border-blue"
            : "group-hover:border-green"
        }`}
      >
        {children}
      </span>
    </div>
  );
};
