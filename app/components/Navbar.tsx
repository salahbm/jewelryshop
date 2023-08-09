"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
const Navbar = () => {
  const [states, setStates] = useState({
    search: false,
  });
  return (
    <div className="  bg flex items-center  text-lightText h-10  px-3 rounded-md my-2 w-full ">
      <div className=" w-2/3 gap-10 flex flex-row items-center justify-start">
        <span className="navBarHover">Store</span>
        <span className="navBarHover">Collection</span>
        <span className="navBarHover">About</span>
      </div>
      <div className="logo ">Mr.Joni</div>
      <div className=" flex flex-row w-2/3 justify-end gap-10">
        <div className="relative flex-row items-center flex">
          {states.search ? (
            <input
              placeholder="Search here"
              type="search"
              className=" w-full rounded-full border-[1px] text-base text-black outline-none duration-200 lg:h-full lg:w-full px-2"
            />
          ) : null}
          <span
            className={`absolute  hover:text-amber-800 hover:bg-white  right-1 ${
              states.search ? "text-amber-800" : "text-lightText navbarIcon"
            }`}
            onClick={() =>
              setStates((prev) => ({ ...prev, search: !prev.search }))
            }
          >
            <BsSearch />
          </span>
        </div>
        <span className="navbarIcon ">
          <BsFillCartFill />
        </span>
        <span className="navbarIcon">
          <HiUser />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
