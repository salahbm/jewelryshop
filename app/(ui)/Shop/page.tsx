"use client";
import React, { useEffect, useState } from "react";
import { ProductData } from "@/app/constant/productData";

import Image from "next/image";
import { IoIosCart, IoIosEye } from "react-icons/io";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { likedProducts, unlikeItem } from "../../redux/shopSlice";
import { AiFillHeart } from "react-icons/ai";
import { addToCart } from "@/app/redux/shopSlice";
import { Card, Typography } from "@mui/material";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import MainListItems from "../Admin/Dashboard/components/listItems";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import SearchView from "@/app/components/Search";

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop: string) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",

    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#900000",
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
    borderRadius: 10,
  },
}));
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
  const [itemsPerPage, setItemsPerPage] = useState(12); // Initial number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Define your media query function to detect screen size
  const checkScreenSize = () => {
    if (window.innerHeight >= 1000) {
      setItemsPerPage(16); // Adjust the items per page for smaller screens
    } else {
      setItemsPerPage(12); // Reset to the default value for larger screens
    }
  };

  useEffect(() => {
    // Initially check screen size and set itemsPerPage
    checkScreenSize();

    // Add event listener for window resize to adjust itemsPerPage
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Rest of your component logic (pagination, filtering, etc.)

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
    <div>
      <SearchView />
      <div className="flex flex-row  p-2 justify-between gap-2 min-h-screen ">
        {/* drawer */}

        <Drawer variant="permanent" open={open} style={{}}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              ml: 3,
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {open ? (
                <KeyboardDoubleArrowLeft htmlColor="#FFFF" />
              ) : (
                <KeyboardDoubleArrowRight htmlColor="#FFFF" />
              )}
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems getDrawerName={getDrawerName} />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>

        {/* Products */}
        <div>
          <Grid
            container
            spacing={{ xs: 0.5, md: 2 }}
            columns={{ xs: 4, sm: 9, md: 9, lg: 12 }}
          >
            {displayedProducts.map((item: any, index: number) => (
              <Grid
                item
                xs={2}
                sm={3}
                md={3}
                lg={3}
                key={index}
                className="group relative  "
              >
                <Paper
                  elevation={2}
                  style={{
                    padding: 1,
                    borderRadius: 10,
                    backgroundColor: "#FFFFF8",
                  }}
                >
                  <div className=" w-full overflow-hidden  ">
                    <Image
                      width={300}
                      height={300}
                      src={item.image}
                      alt="itemImage"
                      className="h-full w-full scale-100 object-contain duration-300 group-hover:scale-105 rounded-lg"
                    />
                  </div>
                  <div className="">
                    <Link
                      href={{
                        pathname: `product${item._id}`,
                        query: { product: JSON.stringify(item) },
                      }}
                    >
                      <div className="flex flex-col p-1  ">
                        <p className=" line-clamp-2  text-[10px] font-bold text-black lg:w-full lg:text-lg whitespace-nowrap">
                          {item.title}
                        </p>
                        <p className="line-clamp-2  text-[10px] font-thin  text-gray-600 lg:w-full   lg:text-[12px] italic font-mono whitespace-nowrap">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                    <button
                      onClick={() =>
                        likedItems.some(
                          (product: any) => product._id === item._id
                        )
                          ? dispatch(unlikeItem(item._id))
                          : dispatch(likedProducts(item))
                      }
                      className={`absolute right-2 md:top-6 top-3 lg:text-3xl text-lg ${
                        likedItems.some(
                          (product: any) => product._id === item._id
                        )
                          ? "text-yellow-500"
                          : "text-white"
                      }`}
                    >
                      <AiFillHeart />
                    </button>
                    <CssBaseline />
                    <div className="flex  justify-between items-center flex-row">
                      <div className=" flex  items-center gap-1 px-2 flex-row  ">
                        <p className="font-base text-[10px]  font-medium text-lime-500 lg:text-[16px]">
                          Now ${item.price}
                        </p>
                        <p className=" text-[8px]  text-gray-400 line-through decoration-[1px] lg:text-[14px]">
                          ${item?.oldPrice}
                        </p>
                      </div>
                      <div className="flex  justify-between gap-3 p-1  items-center flex-row">
                        <button
                          onClick={() =>
                            dispatch(addToCart(item)) &&
                            toast.success(
                              `${item.title.substring(0, 15)}... added`
                            )
                          }
                          className="grid place-items-center max-h-10 md:w-24 w-10   rounded-full bg-lime-500 text-xl p-1 text-Red duration-300 hover:bg-yellow-200 "
                        >
                          <IoIosCart />
                        </button>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
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
          </Grid>
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
    </div>
  );
};

export default Products;
