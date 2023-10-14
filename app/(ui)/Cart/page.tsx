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
import CreditCardForm from "./components/CreditCardFormat";
import Image from "next/image";
const CartPage = () => {
  const [totalAMT, setTotalAMT] = useState("");
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.shop.productData);

  function eachTotalPrice(item: any) {
    return (item.price * item.quantity).toFixed(2);
  }
  useEffect(() => {
    let price = 0;

    productData.map((item: any) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAMT(price.toFixed(2));
  }, []);

  return (
    <div className=" w-full p-3 min-h-screen">
      {productData.length > 0 ? (
        <div>
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
          <div className="lg:flex flex-row justify-around gap-5 items-center">
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
                      <Image
                        src={product.image}
                        alt="Product image"
                        className=" w-full h-full object-contain rounded-lg my-1"
                        width={200}
                        height={200}
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
            <div className="lg:w-2/6 w-full ">
              <div className=" p-4  border border-zinc-400 rounded-md flex flex-col gap-4 bg-yellow-50  lg:min-h-[600px]  ">
                <div className="w-full flex flex-col gap-4 border-b border-b-zinc-200 pb-4">
                  <Link href={"./Checkout"}>
                    <button className="bg-blue-500 cursor-pointer w-full h-10 rounded-full font-semibold duration-300 opacity-50 text-2xl">
                      Continue to checkout
                    </button>
                  </Link>
                  <p className="text-lg text-center text-red-500 -mt-4 font-semibold">
                    Please sign in for checkout
                  </p>

                  <p className="text-lg text-center">
                    For the best shopping experience,{" "}
                    <span className="underline underline-offset-2 decoration-[1px]">
                      sign in
                    </span>
                  </p>
                </div>
                <div className="w-full flex flex-col gap-4 border-b border-b-zinc-200 pb-4 ">
                  <div className="flex flex-col gap-1">
                    <div className="text-md flex justify-between">
                      <p className="font-semibold">
                        Subtotal
                        <span className="text-zinc-600 font-normal">
                          ({productData.length} items)
                        </span>
                      </p>
                      <p className="line-through text-zinc-500 text-base">
                        <span>${totalAMT}</span>
                      </p>
                    </div>
                    <div className="text-md flex justify-between">
                      <p className="font-semibold">Savings</p>
                      <p className="text-[#2a8703] font-bold bg-green-100 py-1 px-2 rounded-lg flex">
                        -<span>$737.00</span>
                      </p>
                    </div>
                    <div className="text-md flex justify-between">
                      <p className="font-semibold">Total Amount</p>
                      <p className="text-zinc-800 font-normal text-base">
                        <span>${totalAMT}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4 border-b border-b-zinc-200 pb-4">
                  <div className="flex flex-col gap-1">
                    <div className="text-md flex justify-between">
                      <p>Shipping</p>
                      <p className="text-[#2a8703]">Free</p>
                    </div>
                    <div className="text-md flex justify-between">
                      <p className="font-semibold">Taxes</p>
                      <p className="text-zinc-800">Calculated at checkout</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p>Estimated total</p>
                  <p className="text-zinc-800 font-bold text-lg">
                    <span>$2,758.99</span>
                  </p>
                </div>
              </div>
              {/* <CreditCardForm /> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center  text-white flex-col justify-between gap-14">
          <HiOutlineShoppingCart size={100} />
          <p className="text-3xl">It is empty</p>

          <Link href="/Shop" className="text-3xl">
            <button className="bg-white hover:bg-yellow-300 text-Red font-bold py-2 px-4 rounded">
              Shop more
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
