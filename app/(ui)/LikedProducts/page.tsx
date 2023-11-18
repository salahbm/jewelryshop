"use client";

import {
  resetCart, unlikeItem
} from "@/app/redux/shopSlice";
import { Grid, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { HiHeart } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const LikedItems=()=>{
const dispatch = useDispatch();
const likedItem = useSelector((state: any) => state.shop.likedItem);


  return (
    <div className=" w-full p-3 min-h-screen">
      {likedItem.length > 0 ? (
        <div>
          <div className=" my-5 flex flex-row items-center gap-4 w-1/2 whitespace-nowrap">
            <p className="rounded-md border border-gray-500 text-yellow-500  px-2 ">
              Total: {likedItem.length}
            </p>
            <button
              onClick={() => dispatch(resetCart())}
              className="flex flex-row items-center  justify-center rounded-md border border-gray-500 text-red-700 px-2"
            >
              <h1>Clear</h1>
              <IoMdClose size={20} />
            </button>
          </div>

         
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 4,  md: 9,  }}
            >
              {likedItem.map((item: any, index: number) => (
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
                      borderRadius: 10,
                      backgroundColor: "#FFFFF8",
                    }}
                  >
                                 <Image
                        width={300}
                        height={500}
                        src={item.image}
                        alt="itemImage"
                        className="h-full w-full scale-100 object-contain duration-300 group-hover:scale-105 rounded-lg"
                      />
                          <p className=" line-clamp-2  text-[10px] font-bold text-neutral-700 lg:w-full lg:text-lg whitespace-nowrap p-1">
                            {item.title}
                          </p>
                  </Paper>
                  <button onClick={() => dispatch(unlikeItem(item?._id))}>
                  <HiHeart
                    className={`text-2x  absolute right-1 top-5 text-xl md:text-3xl text-yellow-500 `}
                  />
                </button>
                </Grid>
                
              ))}
            </Grid>
         </div>    
      ): (
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
            <HiHeart size={30} style={{ color: "yellow" }} />
          </div>

          <Link href="/Shop">
            <button >Shop </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default LikedItems



