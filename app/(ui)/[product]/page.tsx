"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
// import { Item, StoreItem } from "@/type";
import { CiHeart, CiStar } from "react-icons/ci";
import {
  addToCart,
  likedProducts,
  plusQuantity,
  minusQuantity,
} from "@/app/redux/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { StoreItem } from "@/app/type";
import { ProductData } from "@/app/constant/productData";
import Image from "next/image";
const ProductsDetail = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    const receivedItemId = searchParams.get("id");

    if (receivedItemId) {
      try {
        const foundItem = ProductData.find(
          (item) => item._id === receivedItemId
        );
        console.log(foundItem);

        setProduct(foundItem);
      } catch (error) {
        console.error("Error parsing product:", error);
      }
    }
  }, [searchParams]);

  const productData = useSelector((state: any) => state.shop.productData);
  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto flex flex-col items-center py-2 md:flex-row h-1/2 ">
        <div className="   m-2   w-full rounded-md border border-gray-500 lg:w-2/4 md:w-2/4  ">
          <Image
            width={1000}
            height={1000}
            src={product?.image}
            alt="productIMage"
            className="   object-contain rounded-md"
            loading="lazy"
          />
        </div>
        <div className="   m-2   w-1/3 rounded-md border border-gray-500 lg:w-1/12  h-full  ">
          <p>gsdgsdfg</p>
        </div>
        <div className="flex h-2/3 w-full flex-col gap-1 px-4 lg:w-2/4 md:w-2/4">
          <p className=" flex flex-col gap-6 rounded-md border border-gray-400 px-2 py-4 font-bold   ">
            {product?.title}
          </p>
          <div className=" flex flex-col gap-6 rounded-md border border-gray-400 px-2 py-4">
            <div>
              <h1 className=" to-black font-bold">Detail:</h1>
              <p className=" text-[12px] font-normal text-gray-500">
                {product?.description}
              </p>
            </div>
            <div className="flex items-center justify-center gap-5">
              <button>
                <CiHeart
                  className={`text-2xl `}
                  onClick={() => dispatch(likedProducts(product))}
                />
              </button>
            </div>
            <div className=" flex flex-col items-center gap-1 px-2 md:flex-row lg:flex-row lg:gap-3 ">
              <p className="font-base md:text-xxl  text-[10px] font-medium text-green lg:text-lg">
                Now ${product?.price}
              </p>
              <p className=" text-[12px]  text-gray-500 line-through decoration-[1px] md:text-lg">
                ${product?.oldPrice}
              </p>
            </div>
            <div className="flex flex-row items-center justify-between text-2xl text-white">
              <CiCirclePlus
                onClick={() =>
                  dispatch(plusQuantity(product)) &&
                  toast.success(`${product?.title.substring(0, 20)} is added`)
                }
              />

              <span>
                {
                  productData.find(
                    (item: StoreItem) => item._id === product?._id
                  )?.quantity
                }
              </span>

              <CiCircleMinus onClick={() => dispatch(minusQuantity(product))} />
              <button
                onClick={() =>
                  dispatch(addToCart(product)) &&
                  toast.success(`${product?.title.substring(0, 20)} is added`)
                }
                className=" h-8  w-[100px] rounded-xl bg-cyan-900 text-xs font-normal text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
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

export default ProductsDetail;
