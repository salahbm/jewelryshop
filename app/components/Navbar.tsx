"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  CiUser,
  CiShoppingCart,
  CiHeart,
  CiMenuFries,
  CiShop,
} from "react-icons/ci";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { PiNewspaper } from "react-icons/pi";
const Navbar = () => {
  const [state, setState] = useState({
    menu: "close",
  });
  const [totalAMT, setTotalAMT] = useState("");
  const location = usePathname();

  const toggleMenu = () => {
    setState((prev) => ({
      ...prev,
      menu: prev.menu === "menu" ? "close" : "menu",
    }));
  };

  const productData = useSelector((state: any) => state.shop.productData);
  const userInfo = useSelector((state: any) => state.shop.userInfo);
  const likedItems = useSelector((state: any) => state.shop.likedItem);
  useEffect(() => {
    let price = 0;

    productData.map((item: any) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAMT(price.toFixed(2));

    if (location === "/Shop" || "/LikedItems" || "/Cart") {
      setState((prev) => ({
        ...prev,
        menu: "close",
      }));
    }
  }, [productData, location]);

  return (
    <nav className=" z-[999] w-full  text-neutral-700  relative  " >

      <div className="flex items-center bg px-4 md:justify-center justify-between rounded-2xl md:bg-none">
        <Link href="/">
          <div className="logo italic font-mono">Mr.Joni</div>
        </Link>

        <CiMenuFries
          className={`block cursor-pointer text-2xl lg:hidden ${
            state.menu === "menu" && "hidden"
          }`}
          onClick={toggleMenu}
        />

        <AiOutlineClose
          className={`block cursor-pointer text-2xl lg:hidden ${
            state.menu === "close" && "hidden"
          }`}
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`absolute  flex  flex-col  px-3  rounded-xl w-full navBg ${
          state.menu === "menu" ? "  opacity-100" : " opacity-0 hidden"
        }  lg:h-30  duration-300 md:static md:z-auto md:mx-auto md:flex md:w-auto md:flex-row  md:px-5 md:opacity-100 md:justify-between md:items-center`}
      >
        <div className="flex flex-col md:flex-row md:w-2/4 xl:w-1/4 md:items-center md:justify-between gap-1 ">
          <Link href={"/Shop"}>
            <div className="navBarHover gap-1">
              <CiShop className="text-2xl" />
              <p className="text-base font-semibold">Shop</p>
            </div>
          </Link>
          <Link href={"/About"}>
            <div className="navBarHover gap-1">
              <PiNewspaper className="text-2xl" />
              <p className="text-base font-semibold">About</p>
            </div>
          </Link>

          <Link href={"/LikedProducts"}>
            <div className="navBarHover relative gap-1">
              <CiHeart className="text-2xl" />
              <span
                className={` absolute left-4 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gYellow text-[8px] text-Red md:text-xs lg:left-4 lg:top-0 `}
              >
                {likedItems.length > 0 ? likedItems.length : 0}
              </span>

              <h1 className=" text-base font-semibold">Liked</h1>
            </div>
          </Link>

          <div className="relative flex h-12 flex-col gap-1 rounded-full  duration-300 md:items-center md:justify-center ">
            <Link href={"/Cart"}>
              <div className="navBarHover gap-1 ">
                <CiShoppingCart className="text-2xl" />
                <p className="text-base font-semibold">${totalAMT}</p>
              </div>
            </Link>

            <span className="font-body  absolute  left-4 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gYellow text-[8px] text-Red md:text-xs md:top-2 md:right-3">
              {productData.length > 0 ? productData.length : 0}
            </span>
          </div>
        </div>
        <Link href={"/Account"} className="navBarHover md:w-2/4 md:justify-end">
          {userInfo ? (
            <div
              className={`${
                userInfo?.name
                  ? " flex flex-row items-center gap-1"
                  : "flex flex-col"
              }`}
            >
              <Image
                src={userInfo?.image}
                width={28}
                height={28}
                alt="user pic"
                className="rounded-full"
              />
              <div className="flex flex-col items-center">
                <p>{userInfo?.name}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <CiUser className="text-2xl" />
              <h1 className=" text-base font-semibold">Account</h1>
            </div>
          )}
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;



