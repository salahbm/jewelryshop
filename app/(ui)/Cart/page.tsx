"use client";
import React, { useEffect, useState, FC } from "react";
import classes from "./cart.module.css";
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
const CartPage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.shop.productData);

  function eachTotalPrice(item: any) {
    return (item.price * item.quantity).toFixed(2);
  }

  return (
    <div className=" w-full p-2 ">
      <div className=" my-5 flex flex-row items-center justify-between px-10">
        <p className="rounded-md border border-gray-500 bg-lime-300  px-2">
          Total Items: {productData.length}
        </p>
        <button
          onClick={() => dispatch(resetCart())}
          className="flex flex-row items-center  justify-center rounded-md border border-gray-500 bg-red-300 px-2"
        >
          <h1>Clear Cart</h1>
          <IoMdClose size={20} />
        </button>
      </div>
      {productData.length > 0 ? (
        <div>
          {productData.map((product: any, index: number) => (
            <div key={index}>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between text-lg text-white">
                  <CiCirclePlus
                    onClick={() => dispatch(plusQuantity(product))}
                  />

                  <span style={{ marginInline: 5 }}>{product.quantity}</span>
                  <CiCircleMinus
                    onClick={() => dispatch(minusQuantity(product))}
                  />
                </div>
                <IoMdClose
                  size={20}
                  onClick={() => dispatch(deleteItem(product))}
                />
              </div>
              <div className=" flex flex-row items-center justify-between">
                <div key={index} className={classes.productInfoBox}>
                  <img src={product.image} alt="Product image" />
                  <span className={classes.prdName}>{product.name}</span>
                  <span className={classes.prdTitle}>{product.title}</span>
                </div>
                <div className=" flex flex-col items-end">
                  <span className={classes.prdPrice}>$ {product.price}</span>
                  <p className={classes.prdPrice}>
                    Total: $ {eachTotalPrice(product)}
                  </p>
                </div>
              </div>
              <div className=" mr-5 h-2 w-full rounded-sm bg-gray-300" />
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
          <p className={classes.price}>It is empty</p>

          <Link href="/Shop" style={{ marginTop: "70%" }}>
            <button className={classes.button1}>Shop more</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
