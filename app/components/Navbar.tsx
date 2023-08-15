"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { CiUser, CiShoppingCart, CiHeart, CiMenuFries } from "react-icons/ci";

import Link from "next/link";
type E = {
  name: string;
};
const Navbar = () => {
  const [state, setState] = useState({
    menu: "menu",
    search: false,
  });
  const [totalAMT, setTotalAMT] = useState("");
  const toggleMenu = () => {
    setState((prev) => ({
      ...prev,
      menu: prev.menu === "menu" ? "close" : "menu",
    }));
  };

  // const productData = useSelector((state: any) => state.shop.productData);
  // const likedItems = useSelector((state: any) => state.shop.likedItem);
  // useEffect(() => {
  //   let price = 0;

  //   productData.map((item: any) => {
  //     price += item.price * item.quantity;
  //     return price;
  //   });
  //   setTotalAMT(price.toFixed(2));
  // }, [productData]);

  return (
    <div className=" z-[1] w-full bg text-white rounded-2xl relative">
      <div className="flex items-center justify-between px-4 opacity-100">
        <Link href="/">
          <div className="logo w-1/2 md:w-0 ">Mr.Joni</div>
        </Link>

        <CiMenuFries
          className={`block cursor-pointer text-2xl lg:hidden ${
            state.menu === "close" && "hidden"
          }`}
          onClick={toggleMenu}
        />

        {/* AiOutlineClose will be visible when menu === 'close' */}
        <AiOutlineClose
          className={`block cursor-pointer text-2xl lg:hidden ${
            state.menu === "menu" && "hidden"
          }`}
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`absolute  gap-1 px-3 rounded-b-2xl w-full bg ${
          state.menu === "menu" ? "visible  opacity-100" : "hidden opacity-0"
        }  lg:h-30 z-[1] transition-all duration-500 ease-in lg:static lg:z-auto lg:mx-auto lg:flex lg:w-auto lg:items-center lg:justify-between lg:gap-10 lg:px-5 lg:opacity-100`}
      >
        <div className="navBarHover">
          <p className="text-base font-semibold">Shop</p>
        </div>
        <div className="navBarHover">
          <p className="text-base font-semibold">About</p>
        </div>
        <Link href={"/LikedProducts"}>
          <div className="navBarHover relative gap-2">
            <CiHeart className="text-2xl" />
            <span
              className={`font-body  absolute  left-8 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-700 text-[8px] text-black md:text-xs lg:left-9 lg:top-2 ${" hidden"}`}
            >
              {/* {likedItems.length > 0 && likedItems.length} */}423
            </span>

            <h1 className=" -mt-1 text-base font-semibold">Liked items</h1>
          </div>
        </Link>
        <div className="navBarHover gap-2">
          <CiUser className="text-2xl" />
          <div>
            <h1 className=" -mt-1 text-base font-semibold">Account</h1>
          </div>
        </div>
        <div className="relative flex h-12 flex-col gap-1 rounded-full bg duration-300 lg:items-center lg:justify-center ">
          <Link href={"/Cart"}>
            <div className="navBarHover gap-2">
              <CiShoppingCart className="text-2xl" />
              <h1 className=" -mt-1 text-base font-semibold">Cart</h1>
            </div>
          </Link>
          <p className="-mt-2 ml-0.5 text-[10px]">${totalAMT}3412</p>
          <span className="font-body  absolute  left-4 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-amber-700 text-[8px] text-lightText md:text-xs lg:left-10 lg:top-0">
            {/* {productData.length > 0 ? productData.length : 0} */}123
          </span>
        </div>
        <div className="relative flex h-10 flex-1">
          <input
            placeholder="Search everything here"
            type="text"
            className={`mx-4 h-7 ${
              state.search ? "w-60 lg:w-full " : "w-0 pointer-events-none"
            } rounded-full border-[1px] border-black  px-4 text-base text-black outline-none duration-700 focus-visible:border-black lg:h-full `}
          />

          <span className="absolute right-5 top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-amber-700 text-black lg:top-1 lg:h-8 lg:w-8 lg:text-xl">
            <BsSearch
              onClick={() =>
                setState((prev) => ({ ...prev, search: !state.search }))
              }
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
