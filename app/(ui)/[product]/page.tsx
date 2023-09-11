"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
// import { Item, StoreItem } from "@/type";
import { CiHeart, CiStar } from "react-icons/ci";
// import {
//   addToCart,
//   likedProducts,
//   plusQuantity,
//   minusQuantity,
// } from "@/app/redux/shopSlice";
import { useDispatch } from "react-redux";
// import toast, { Toaster } from "react-hot-toast";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const ProductsDetail = () => {
  const pathme = useSearchParams();
  // const dispatch = useDispatch();
  // const [product, setProduct] = useState<StoreItem | null>();

  // useEffect(() => {
  //   const receivedItem = pathme.get("product");

  //   if (receivedItem) {
  //     try {
  //       const parsedItem: StoreItem = JSON.parse(receivedItem);
  //       setProduct(parsedItem);
  //     } catch (error) {
  //       console.error("Error parsing product:", error);
  //     }
  //   }
  // }, [pathme]);

  return (
    <div className=" bg-white">
      <div className="  max-w-full mx-auto flex flex-col items-center py-2 md:flex-row">
        <div className="  relative  m-2 flex h-full w-[75%] rounded-md border border-gray-500 lg:w-2/3">
          {/* <img
            src={product?.image}
            alt="productIMage"
            className="  h-[200px] w-[200px] object-contain"
          /> */}
        </div>
        <div className="flex h-full w-full flex-col gap-1 px-4 lg:w-1/3">
          <p className=" flex flex-col gap-6 rounded-md border border-gray-400 px-2 py-4 font-bold   ">
            {/* {product?.title} */}
          </p>
          <div className=" flex flex-col gap-6 rounded-md border border-gray-400 px-2 py-4">
            <div>
              <h1 className=" to-black font-bold">Detail:</h1>
              <p className=" text-[12px] font-normal text-gray-500">
                {/* {product?.description} */}
              </p>
              <p className="flex flex-row items-center  gap-1">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <span className=" text-xs font-thin text-gray-900">4.3/5</span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-5">
              <button className=" h-8  w-[100px] rounded-md bg-lime-500 text-xs font-normal text-white">
                Best Seller
              </button>
              <button className=" h-8  w-[100px] rounded-md bg-red-500 text-xs font-normal text-white">
                RollBack
              </button>
              <button>
                <CiHeart
                  className={`text-2xl `}
                  // onClick={() => dispatch(likedProducts(product))}
                />
              </button>
            </div>
            <div className=" flex flex-col items-center gap-1 px-2 md:flex-row lg:flex-row lg:gap-3 ">
              <p className="font-base md:text-xxl  text-[10px] font-medium text-green lg:text-lg">
                werw {/* Now ${product?.price} */}
              </p>
              <p className=" text-[12px]  text-gray-500 line-through decoration-[1px] md:text-lg">
                e45 {/* ${product?.oldPrice} */}
              </p>
            </div>
            <div className="flex flex-row items-center justify-between text-2xl">
              {/* <CiCirclePlus onClick={() => dispatch(plusQuantity(product))} /> */}

              {/* <span>{product?.quantity}</span> */}
              {/* <CiCircleMinus onClick={() => dispatch(minusQuantity(product))} /> */}
              <button
                // onClick={() =>
                //   dispatch(addToCart(product)) &&
                //   toast.success(`${product?.title.substring(0, 20)} is added`)
                // }
                className=" h-8  w-[100px] rounded-xl bg-cyan-900 text-xs font-normal text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "8px",
            backgroundColor: "#333",
            color: "#FFFF",
          },
        }}
      /> */}
    </div>
  );
};

export default ProductsDetail;