"use client";
import React from "react";
import { ProductData } from "@/app/constant/productData";

import Image from "next/image";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { likedProducts, unlikeItem } from "../../redux/shopSlice";
import { AiFillHeart } from "react-icons/ai";
import { addToCart } from "@/app/redux/shopSlice";
const Products = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state: any) => state.shop.likedItem);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6 lg:grid-cols-4 ">
      {ProductData.map((item: any, index: number) => (
        <div
          key={index}
          className="lg-6 group relative border-[1px] border-yellow-50 rounded-lg p-2"
        >
          <div className="flex flex-col px-2 gap-1 mb-1">
            <p className=" line-clamp-2 w-[100px] text-[10px] font-bold text-white lg:w-full lg:text-lg whitespace-nowrap">
              {item.title}
            </p>
            <p className="line-clamp-2 w-[100px] text-[10px] font-thin text-gray-50 lg:w-full   lg:text-[12px] italic font-mono whitespace-nowrap">
              {item.description}
            </p>
          </div>
          <div className="h-[200px] w-full overflow-hidden p-1  ">
            <Image
              width={200}
              height={200}
              src={item.image}
              alt="itemImage"
              className="h-full w-full scale-100 object-contain duration-300 group-hover:scale-110"
            />
          </div>
          <button
            onClick={() =>
              likedItems.some((product: any) => product._id === item._id)
                ? dispatch(unlikeItem(item._id))
                : dispatch(likedProducts(item))
            }
            className={`absolute right-1 top-1 text-3xl ${
              likedItems.some((product: any) => product._id === item._id)
                ? "text-yellow-500"
                : "text-white"
            }`}
          >
            <AiFillHeart />
          </button>

          <div className="flex  justify-center px-2 py-4 flex-col items-center md:flex-row">
            <div className="flex  justify-between gap-3 py-2 flex-col items-center md:flex-row">
              <button
                onClick={() =>
                  dispatch(addToCart(item)) &&
                  toast.success(`${item.title.substring(0, 15)}... added`)
                }
                className=" text-20 flex h-5 w-10 items-center justify-center rounded-full bg-lime-500 text-[10px]  text-white duration-300 hover:bg-slate-400 md:h-7  md:w-20 md:text-[15px] lg:h-9 lg:w-18"
              >
                <span className=" ">
                  <GoPlus />
                </span>
                Add
              </button>
              <div className=" flex flex-col items-center gap-1 px-2 md:flex-row lg:flex-row lg:gap-3 ">
                <p className="font-base text-[10px]  font-medium text-lime-300 lg:text-[16px]">
                  Now ${item.price}
                </p>
                <p className=" text-[8px]  text-gray-50 line-through decoration-[1px] lg:text-[14px]">
                  ${item?.oldPrice}
                </p>
              </div>
              <Link
                href={{
                  pathname: `product${item._id}`,
                  query: { product: JSON.stringify(item) },
                }}
              >
                <button className="flex h-5 w-11 items-center justify-center  rounded-full bg-gray-50 text-[10px] text-Red duration-300 hover:bg-yellow-50 md:h-7 md:w-20 md:text-[15px] lg:h-9 lg:w-16">
                  <span>
                    <GoPlus />
                  </span>
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "8px",
            backgroundColor: "#333",
            color: "#FFFF",
          },
        }}
      />
    </div>
  );
};

export default Products;
