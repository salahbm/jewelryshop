"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
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

      <div>
        {/* <SMButton title={"Instagram"} onClick={() => console.log("insta")} /> */}
      </div>
    </div>
  );
};
const SMButton = (
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined,
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
) => {
  return (
    <div onClick={onClick} className="">
      <p>{title}</p>
    </div>
  );
};
export default Footer;
