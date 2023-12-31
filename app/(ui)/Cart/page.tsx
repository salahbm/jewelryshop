"use client";
import { useEffect, useState } from "react";

import {
  deleteItem,
  minusQuantity,
  plusQuantity,
  resetCart,
} from "@/app/redux/shopSlice";
import { Button, Grid, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
const CartPage = () => {
  const [totalAMT, setTotalAMT] = useState("");
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.shop.productData);
  const userInfo = useSelector((state: any) => state.shop.userInfo);

  function eachTotalPrice(item: any) {
    return (item.price * item.quantity).toFixed(2);
  }
  let price = 0;
  useEffect(() => {
    productData.map((item: any) => {
      price += item?.price * item?.quantity;

      return price;
    });
    setTotalAMT(price.toFixed(2));
  }, []);

  return (
    <div className=" w-full p-3 min-h-screen">
      {productData.length > 0 ? (
        <div>
          <div className=" my-5 flex flex-row items-center gap-4 w-1/2 whitespace-nowrap">
            <p className="rounded-md border border-gray-500 text-yellow-500  px-2 ">
              Total: {productData.length}
            </p>
            <button
              onClick={() => dispatch(resetCart())}
              className="flex flex-row items-center  justify-center rounded-md border border-gray-500 text-red-700 px-2"
            >
              <h1>Clear</h1>
              <IoMdClose size={20} />
            </button>
          </div>

          <div className="relative">
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 4,  md: 9,  }}
            >
              {productData.map((item: any, index: number) => (
                <Grid
                  item
                  xs={2}
      
                  md={3}
 
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
                          <p className=" line-clamp-2  text-[10px] font-bold text-neutral-700 lg:w-full lg:text-lg whitespace-nowrap">
                            {item.title}
                          </p>
                        </div>
                      </Link>

                      <div className="flex  justify-between items-center flex-row px-1">
                        <p className="font-base text-[8px]  font-medium text-lime-500 lg:text-[14px]">
                          Each: ${item.price}
                        </p>

                        <div className="flex  justify-between  p-1  items-center flex-row">
                          <button
                            onClick={() => dispatch(plusQuantity(item))}
                            className="text-lime-500 "
                          >
                            <CiCirclePlus />
                          </button>

                          <span className="mx-2 text-neutral-700">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(minusQuantity(item))}
                            className=" text-orange-700"
                          >
                            <CiCircleMinus />
                          </button>

                          <button
                            onClick={() => dispatch(deleteItem(item._id))}
                            className=" text-orange-800 absolute top-5 right-1 rounded-full border-[1px] border-orange-700 hover:bg-white hover:text-black text-lg md:text-xl"
                          >
                            <IoMdClose />
                          </button>
                        </div>
                        <p className=" text-[8px]  text-lime-700  lg:text-[14px]">
                          Total: ${eachTotalPrice(item)}
                        </p>
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
          </div>

          <div className="flex justify-center">
            <div className=" my-2 w-2/4 ">
              <div className=" p-4  border border-zinc-400 rounded-md flex flex-col gap-4 bg-yellow-50    ">
                <div className="w-full flex flex-col gap-4 border-b border-b-zinc-200 pb-4">
                  {!userInfo?.name && (
                    <p className="text-lg text-center text-red-500 -mt-4 font-semibold">
                      Please sign in for checkout
                    </p>
                  )}
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
                <Link href={"./Checkout"}>
                  <button
                    className={`${
                      userInfo?.name
                        ? "text-lime-600 hover:text-lime-500"
                        : " text-gray-500 cursor-not-allowed"
                    } cursor-pointer w-full h-10 rounded-full font-semibold duration-300  text-2xl`}
                  >
                    Continue to checkout
                  </button>
                </Link>
              </div>
              {/* <CreditCardForm /> */}
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <div className="flex flex-row items-center gap-2 my-2">
            <p className="text-neutral-700">It is empty</p>
            <HiOutlineShoppingCart size={30} style={{ color: "white" }} />
          </div>

          <Link href="/Shop">
            <Button variant="contained" color="warning">
              Shop
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
