"use client";
import React, { useState } from "react";
import { ProductData } from "@/app/constant/productData";

import Image from "next/image";
import { IoIosCart, IoIosEye } from "react-icons/io";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { likedProducts, unlikeItem } from "../../redux/shopSlice";
import { AiFillHeart } from "react-icons/ai";
import { addToCart } from "@/app/redux/shopSlice";
import {
  Card,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import MainListItems from "../Admin/Dashboard/components/listItems";
const Products = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [drawerValue, setDrawerValue] = useState<string>("dashboard");
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const getDrawerName = (value: string) => {
    setDrawerValue(value);
  };
  const likedItems = useSelector((state: any) => state.shop.likedItem);
  // Define pagination state
  const itemsPerPage = 12; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the range of items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter and display products based on the current page
  const displayedProducts = ProductData.slice(startIndex, endIndex);
  const allPages = Math.ceil(ProductData.length / itemsPerPage);

  // Handle page navigation
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex flex-row ml-2 p-2 justify-between gap-2 min-h-screen">
      {/* drawer */}

      <div
        className={`${
          open ? "w-2/6" : "xl:w-100px w-[40px]"
        }  bg-yellow-500 rounded-lg p-1 z-[1] `}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={toggleDrawer}>
            {open ? (
              <KeyboardDoubleArrowLeft htmlColor="#333" />
            ) : (
              <KeyboardDoubleArrowRight htmlColor="#333" />
            )}
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <Typography>some value</Typography>
          <Divider sx={{ my: 1 }} />
        </List>
      </div>

      {/* Products */}
      <div className={open ? "w-5/6 " : "w-full "}>
        <div className="grid  xl:grid-cols-3  md:grid-cols-3 grid-cols-2 place-items-center ">
          {displayedProducts.map((item: any, index: number) => (
            <div
              key={index}
              className=" group relative rounded-lg p-0.5 bg-yellow-50 m-1  xl:max-w-[350px] md:max-w-[180px] max-w-[130px]"
            >
              <div className="h-4/6 w-full overflow-hidden  ">
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt="itemImage"
                  className="h-full w-full scale-100 object-contain duration-300 group-hover:scale-105 rounded-lg"
                />
              </div>
              <div className="h-2/6">
                <div className="flex flex-col px-2 gap-1 mb-1">
                  <p className=" line-clamp-2 w-[100px] text-[10px] font-bold text-black lg:w-full lg:text-lg whitespace-nowrap">
                    {item.title}
                  </p>
                  <p className="line-clamp-2 w-[100px] text-[10px] font-thin  text-gray-600 lg:w-full   lg:text-[12px] italic font-mono whitespace-nowrap">
                    {item.description}
                  </p>
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
                <CssBaseline />
                <div className="flex  justify-between flex-col items-center md:flex-row">
                  <div className=" flex flex-col items-center gap-1 px-2 md:flex-row lg:flex-row lg:gap-3 ">
                    <p className="font-base text-[10px]  font-medium text-lime-300 lg:text-[16px]">
                      Now ${item.price}
                    </p>
                    <p className=" text-[8px]  text-gray-40 line-through decoration-[1px] lg:text-[14px]">
                      ${item?.oldPrice}
                    </p>
                  </div>
                  <div className="flex  justify-between gap-3 py-2 flex-col items-center md:flex-row">
                    <button
                      onClick={() =>
                        dispatch(addToCart(item)) &&
                        toast.success(`${item.title.substring(0, 15)}... added`)
                      }
                      className=" text-20 flex h-5 w-5 items-center justify-center rounded-full bg-lime-500 text-[10px]  text-white duration-300 hover:bg-slate-400 md:h-7  md:w-20 md:text-[15px] lg:h-9 lg:w-18"
                    >
                      <IoIosEye />
                    </button>

                    <Link
                      href={{
                        pathname: `product${item._id}`,
                        query: { product: JSON.stringify(item) },
                      }}
                    >
                      <button className="flex h-5 w-11 items-center justify-center  rounded-full bg-gray-50 text-[10px] text-Red duration-300 hover:bg-yellow-50 md:h-7 md:w-20 md:text-[15px] lg:h-9 lg:w-16">
                        <IoIosCart />
                      </button>
                    </Link>
                  </div>
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
        <div className="  items-center flex justify-center">
          <div className="flex justify-between items-center mt-4 text-white ">
            {currentPage > 1 && (
              <button
                onClick={prevPage}
                className="xt-20 flex h-5 w-10 items-center justify-center rounded-full bg-yellow-500 text-[10px]  text-white duration-300 hover:bg-slate-400 md:h-7  md:w-20 md:text-[10px] lg:h-9 lg:w-24 "
              >
                Back
              </button>
            )}
            <span className=" text-[10px] font-bold text-white  lg:text-lg mx-5">
              {` ${currentPage}/${allPages} `}
            </span>

            {endIndex < ProductData.length && (
              <button
                onClick={nextPage}
                className="xt-20 flex h-5 w-10 items-center justify-center rounded-full bg-yellow-500 text-[10px]  text-white duration-300 hover:bg-slate-400 md:h-7  md:w-20 md:text-[15px] lg:h-9 lg:w-18"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
