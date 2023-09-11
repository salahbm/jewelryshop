"use client";
import React from "react";
import { ProductData } from "@/app/constant/productData";
// import { Item } from "@/type";
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
  const isLiked = likedItems.some((product: any) => {
    return product;
  });

  return (
    <div className="grid grid-cols-3 gap-4 px-4 py-6 lg:grid-cols-4 ">
      {ProductData.map((item: any, index: number) => (
        <div
          key={index}
          className="lg-6 group relative border-[1px] border-gray-200"
        >
          <div className="h-[200px] w-full overflow-hidden p-1 lg:h-[350px] ">
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

          <div className="flex  justify-center px-2 py-4 ">
            <div className="flex  justify-between gap-3 py-2">
              <button
                onClick={() =>
                  dispatch(addToCart(item)) &&
                  toast.success(`${item.title.substring(0, 15)}... added`)
                }
                className=" text-20 flex h-5 w-10 items-center justify-center rounded-full bg-green text-[10px]  text-white duration-300 hover:bg-slate-400 md:h-7  md:w-20 md:text-[15px] lg:h-9 lg:w-20"
              >
                <span className=" ">
                  <GoPlus />
                </span>
                Add
              </button>
              <Link
                href={{
                  pathname: `product${item._id}`,
                  query: { product: JSON.stringify(item) },
                }}
              >
                <button className="flex h-5 w-11 items-center justify-center  rounded-full bg-midnight text-[10px] text-white duration-300 hover:bg-slate-200 md:h-7 md:w-20 md:text-[15px] lg:h-9 lg:w-20">
                  <span>
                    <GoPlus />
                  </span>
                  Details
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col items-center gap-1 px-2 md:flex-row lg:flex-row lg:gap-3 ">
            <p className="font-base text-[10px]  font-medium text-green lg:text-lg">
              Now ${item.price}
            </p>
            <p className=" text-[12px]  text-gray-500 line-through decoration-[1px] md:text-lg">
              ${item.oldPrice}
            </p>
          </div>
          <div className="flex flex-col gap-1 px-2 md:gap-3">
            <p className=" line-clamp-2 w-[100px] text-[10px] font-bold text-black lg:w-full lg:text-lg">
              {item.title}
            </p>
            <p className="line-clamp-2 w-[100px] text-[10px] font-thin text-gray-400 lg:w-full   lg:text-sm">
              {item.description}
            </p>
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
