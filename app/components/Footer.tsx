"use client";
import React from "react";
import {
  AiOutlineArrowRight,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMessage,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="p-2">
      <h2 className="text-white font-mono font-extrabold w-full md:text-8xl  text-2xl mb-8">
        Get The Last Information <br /> From Us
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

      <div className="flex items-center justify-between px-20 my-10">
        <p className="text-white w-1/2">MrJoni All Rights are Reserved</p>
        <div className="flex items-center justify-between w-1/3">
          <FooterSMBTN
            Press={() => console.log("insta")}
            title="Facebook"
            children={<AiFillFacebook />}
          />
          <FooterSMBTN
            Press={() => console.log("insta")}
            title="Instagram"
            children={<AiFillInstagram />}
          />
          <FooterSMBTN
            Press={() => console.log("insta")}
            title="Telegram"
            children={<AiFillMessage />}
          />
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
      className="border-2 border-yellow-500 rounded-3xl flex justify-center items-center px-2 cursor-pointer gap-1 w-24  relative"
    >
      <p className="text-yellow-500  hover:opacity-0 duration-300">{title}</p>
      <span
        className={`${
          title === "Instagram" ? "text-red-600" : "text-blue"
        } hover:absolute hover:left-0 hover:top-0 duration-300`}
      >
        {children}
      </span>
    </div>
  );
};
