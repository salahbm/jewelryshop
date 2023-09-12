"use client";
import React, { useEffect, useState, FC } from "react";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  plusQuantity,
  minusQuantity,
  resetCart,
  deleteItem,
} from "@/app/redux/shopSlice";
import { StoreItem } from "@/app/type";
const CartPage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.shop.productData);

  function eachTotalPrice(item: any) {
    return (item.price * item.quantity).toFixed(2);
  }

  return (
    <div className=" w-full p-2">
      <div className=" my-5 flex flex-row items-center gap-4 w-1/2 whitespace-nowrap">
        <p className="rounded-md border border-gray-500 bg-yellow-300  px-2 ">
          Total: {productData.length}
        </p>
        <button
          onClick={() => dispatch(resetCart())}
          className="flex flex-row items-center  justify-center rounded-md border border-gray-500 bg-red-400 px-2"
        >
          <h1>Clear</h1>
          <IoMdClose size={20} />
        </button>
      </div>
      {productData.length > 0 ? (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {productData.map((product: StoreItem, index: number) => (
            <div
              key={index}
              className="relative my-5 border-2 border-white rounded-lg p-1 min-h-[160px] md:min-h-[200px] "
            >
              <p className="text-white text-center text-xl  md:text-2xl whitespace-nowrap">
                {product.title}
              </p>
              <div className=" flex flex-row justify-between py-2">
                <div className=" w-2/3">
                  <img
                    src={product.image}
                    alt="Product image"
                    className=" w-full h-full object-contain rounded-lg my-1"
                  />
                </div>

                <div className="w-1/3 flex flex-col justify-between gap-5 items-center">
                  <div className="flex flex-row items-center justify-end  text-xl md:text-3xl ">
                    <button
                      onClick={() => dispatch(plusQuantity(product))}
                      className="text-lime-500 "
                    >
                      <CiCirclePlus />
                    </button>

                    <span className="mx-2 text-yellow-100">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(minusQuantity(product))}
                      className=" text-orange-700"
                    >
                      <CiCircleMinus />
                    </button>
                  </div>
                  <p className="text-center text-yellow-50">
                    {product.description}
                  </p>
                  <div className=" flex flex-col items-center  text-white">
                    <span className="">Each: ${product.price}</span>
                    <p className="">Total: ${eachTotalPrice(product)}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => dispatch(deleteItem(product._id))}
                className="text-white absolute top-2 right-1 rounded-full border-2 hover:bg-white hover:text-Red text-lg md:text-2xl"
              >
                <IoMdClose />
              </button>
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
          <HiOutlineShoppingCart size={100} />
          <p className="">It is empty</p>

          <Link href="/Shop">
            <button className="">Shop more</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
