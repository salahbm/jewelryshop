"use client";
import React from "react";
import classes from "./likedProducts.module.css";
import { HiHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { unlikeItem, resetLikedItems } from "@/app/redux/shopSlice";

import { StoreItem } from "@/app/type";
import Image from "next/image";
const LikedProducts = () => {
  const dispatch = useDispatch();
  const likedItem = useSelector((state: any) => state.shop.likedItem);

  return (
    <div className="w-full p-5 min-h-screen ">
      <div className=" my-5 flex flex-row items-center gap-2 w-1/2">
        <p className="rounded-md border border-gray-500 bg-yellow-500  px-2 text-black">
          Total: {likedItem.length}
        </p>
        <button
          onClick={() => dispatch(resetLikedItems())}
          className="flex flex-row items-center text-black justify-center rounded-md border border-gray-500 bg-red-400 px-2"
        >
          <h1>Clear</h1>
          <IoMdClose size={20} />
        </button>
      </div>
      {likedItem.length > 0 ? (
        <div className=" grid  grid-cols-2 items-center gap-10 md:grid-cols-3 lg:grid-cols-4">
          {likedItem.map((product: StoreItem, index: number) => (
            <div key={index}>
              <div className="  relative rounded-md border min-h-24 min-w-24 border-yellow-700">
                <Link
                  href={{
                    pathname: `product${product._id}`,
                    query: { product: JSON.stringify(product) },
                  }}
                >
                  <Image
                    src={product?.image}
                    alt="Product image"
                    className="object-fill w-full h-full rounded-md "
                    width={200}
                    height={200}
                  />
                </Link>
                <button onClick={() => dispatch(unlikeItem(product._id))}>
                  <AiFillHeart
                    className={`text-2x  absolute right-1 top-1 text-xl md:text-3xl text-yellow-500 `}
                  />
                </button>
              </div>
              <p className="  text-black text-center text-sm overflow-hidden whitespace-nowrap">
                {product.title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <div className="flex flex-row items-center gap-2 my-2">
            <p className="text-black">It is empty</p>
            <HiHeart size={30} style={{ color: "yellow" }} />
          </div>

          <Link href="/Shop">
            <button className={classes.button1}>Shop </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LikedProducts;
