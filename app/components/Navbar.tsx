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
    <div className=" w-full flex flex-row items-center  p-2 justify-between">
      <div className=" flex flex-row gap-3">
        <span>Store</span>
        <span>Collection</span>
        <span>About</span>
      </div>
      <div>Mr Joni</div>
      <div className=" flex flex-row gap-5">
        <span>
          <BsSearch />
        </span>
        <span>
          <BsFillCartFill />
        </span>
        <span>
          <HiUser />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
