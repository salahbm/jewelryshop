"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillShop, AiFillHeart } from "react-icons/ai";
import { BsCollectionFill, BsFillCartFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { logo } from "../assets/index";
const Navbar = () => {
  return (
    <div className=" w-full bg-zinc-900 h-10 flex flex-row items-center justify-between">
      <span className=" text-white">
        <AiFillShop /> <span>Store</span>
      </span>
      <span>
        <BsCollectionFill /> <span>Collection</span>
      </span>
      <Image
        src={logo}
        alt="logo"
        className=" w-13 h-13 object-contain rounded-md "
      />
      <span>
        <BsFillCartFill /> <span>Cart</span>
      </span>
      <span>
        <AiFillHeart /> <span>Liked</span>
      </span>
      <span>
        <HiUser /> <span>Account</span>
      </span>
    </div>
  );
};

export default Navbar;
