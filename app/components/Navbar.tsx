"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { CiUser, CiShoppingCart, CiHeart, CiMenuFries } from "react-icons/ci";
import Link from "next/link";

type E = {
  name: string;
};
const Navbar = () => {
  const [state, setState] = useState({
    menu: "close",
    search: false,
  });

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
    <div className=" z-[1] w-full  text-white  relative ">
      <div className="flex items-center bg px-4 lg:justify-center justify-between rounded-2xl lg:bg-none">
        <Link href="/">
          <div className="logo italic font-mono">Mr.Joni</div>
        </Link>

        <CiMenuFries
          className={`block cursor-pointer text-2xl lg:hidden ${
            state.menu === "menu" && "hidden"
          }`}
          onClick={toggleMenu}
        />

        {/* AiOutlineClose will be visible when menu === 'close' */}
        <AiOutlineClose
          className={`block cursor-pointer text-2xl lg:hidden ${
            state.menu === "close" && "hidden"
          }`}
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`absolute   gap-1 px-3 rounded-2xl w-full bg ${
          state.menu === "menu" ? "  opacity-100" : " opacity-0"
        }  lg:h-30  duration-700 lg:static lg:z-auto lg:mx-auto lg:flex lg:w-auto lg:items-center lg:justify-between lg:gap-10 lg:px-5 lg:opacity-100`}
      >
        <Link className="navBarHover" href={"/Shop"}>
          <p className="text-base font-semibold">Shop</p>
        </Link>
        <div className="navBarHover">
          <p className="text-base font-semibold">About</p>
        </div>
        <Link href={"/LikedProducts"}>
          <div className="navBarHover relative gap-2">
            <CiHeart className="text-2xl" />
            <span
              className={` absolute left-4 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gYellow text-[8px] text-Red md:text-xs lg:left-4 lg:top-0 `}
            >
              {/* {likedItems.length > 0 && likedItems.length} */}43
            </span>

            <h1 className=" text-base font-semibold">Liked items</h1>
          </div>
        </Link>

        <div className="relative flex h-12 flex-col gap-1 rounded-full  duration-300 lg:items-center lg:justify-center ">
          <Link href={"/Cart"}>
            <div className="navBarHover gap-2 ">
              <CiShoppingCart className="text-2xl" />
              <p className="text-base font-semibold">$312</p>
            </div>
          </Link>

          <span className="font-body  absolute  left-4 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gYellow text-[8px] text-Red md:text-xs lg:top-2 md:right-3">
            {/* {productData.length > 0 ? productData.length : 0} */}12
          </span>
        </div>
        <div className="navBarHover gap-2">
          <CiUser className="text-2xl" />
          <h1 className=" text-base font-semibold">Account</h1>
        </div>
        <div className="h-7 relative my-2 flex justify-end ">
          <input
            placeholder="Search everything here"
            type="text"
            className={`mx-2 h-7 ${
              state.search ? " w-full" : "w-0 "
            } rounded-full border-[1px] border-black  px-4 text-base text-black outline-none duration-700  ease-in-out lg:h-full `}
          />
          <button className="absolute right-3 top-0.5  flex  h-6 w-6 items-center justify-center rounded-full  hover:text-gYellow lg:top-0.5 lg:h-6 lg:w-6 lg:text-xl cursor-pointer text-Red ">
            <BsSearch
              onClick={() =>
                setState((prev) => ({ ...prev, search: !state.search }))
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
