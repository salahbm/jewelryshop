"use client";
import React from "react";
import classes from "./likedProducts.module.css";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { resetLikedItems, unlikeItem } from "@/app/redux/shopSlice";
const LikedProducts = () => {
  const dispatch = useDispatch();
  const likedItem = useSelector((state: any) => state.shop.likedItem);

  return (
    <div className="w-full p-5">
      <div className=" my-5 flex flex-row items-center justify-between px-10">
        <p className="rounded-md border border-gray-500 bg-lime-300  px-2">
          Total Liked Items: {likedItem.length}
        </p>
        <button
          onClick={() => dispatch(resetLikedItems())}
          className="flex flex-row items-center  justify-center rounded-md border border-gray-500 bg-red-300 px-2"
        >
          <h1>Clear All liked Items</h1>
          <IoMdClose size={20} />
        </button>
      </div>
      {likedItem.length > 0 ? (
        <div className=" grid  grid-cols-3 ">
          {likedItem.map((product: any, index: number) => (
            <div key={index}>
              <div className=" relative h-[200px]  w-[200px] rounded-md border border-gray-400">
                <img src={product.image} alt="Product image" />
                <button onClick={() => dispatch(unlikeItem(product))}>
                  <CiHeart
                    className={`text-2x  absolute right-1 top-1 text-3xl`}
                  />
                </button>
              </div>
              <p className=" w-[220px]">{product.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <HiOutlineShoppingCart size={100} style={{ marginTop: "20%" }} />
          <p className={classes.price}>It is empty</p>

          <Link href="/" style={{ marginTop: "70%" }}>
            <button className={classes.button1}>Shop more</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LikedProducts;
