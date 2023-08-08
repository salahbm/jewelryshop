"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillShop, AiFillHeart } from "react-icons/ai";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { logo } from "../assets/index";
const Navbar = () => {
  return (
    <div className=" w-full flex items-center  text-yellow-50 justify-between h-10">
      <div className="">
        <span className="navBarHover">Store</span>
        <span className="navBarHover">Collection</span>
        <span className="navBarHover">About</span>
      </div>
      <div>
        <span className="logo">Mr Joni</span>
      </div>
      <div className=" flex flex-row">
        <span className="navbarIcon justify-end px-1">
          <BsSearch />
        </span>
        <span className="navbarIcon">
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
