"use client";
import React, { useEffect, useState } from "react";
import { addUser, removeUser } from "@/app/redux/shopSlice";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import UserOrders from "./components/userOrders";
const Account: React.FC = () => {
  const [value, setValue] = useState<string>("Delivering");
  const dispatch = useDispatch();
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(removeUser());
    }
  }, [dispatch, session]);
  const userInfo = useSelector((state: any) => state.shop.userInfo);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMdScreen = useMediaQuery("(min-width:960px)");

  return (
    <div
      className="w-full flex 
     md:flex-row  flex-col
      my-5 gap-8 min-h-screen"
    >
      <div
        className={`md:w-1/5 bg-red-900 flex-col flex items-center rounded-2xl gap-2  py-3 relative  ${
          isCollapsed ? "h-[50px]" : "h-fit"
        }`}
      >
        <Typography variant="h5" color="white" fontWeight={"bold"}>
          Welcome {userInfo?.name ? userInfo?.name : "User"}
        </Typography>
        {isCollapsed ? null : (
          <>
            <div>
              {userInfo?.image ? (
                <Image
                  src={userInfo?.image}
                  width={100}
                  height={100}
                  alt="user pic"
                  className=" object-contain bg-inherit  my-3 rounded-full border-black border-[1px]"
                />
              ) : (
                <div className=" bg-gray-400 w-[100px] h-[100px] rounded-full" />
              )}
            </div>

            <div className=" border-b-[1px] my-2 border-gray-300 w-[90%]" />
            <Link href={"./Admin/Dashboard"}>
              <Typography variant="body1" color={"primary"} fontWeight={"bold"}>
                Admin Page
              </Typography>
            </Link>
            <Typography variant="body1" color="white" fontWeight={"bold"}>
              Profile Information
            </Typography>
            <Typography variant="body1" color="white" fontWeight={"bold"}>
              Card Information
            </Typography>
            <Typography variant="body1" color="white" fontWeight={"bold"}>
              Address Information
            </Typography>

            <div className=" border-b-[1px] my-2 border-gray-300 w-[90%]" />
            <Typography variant="body1" color="white" fontWeight={"bold"}>
              Privacy and Policy
            </Typography>
            <Typography variant="body1" color="white" fontWeight={"bold"}>
              Terms and Conditions
            </Typography>
            <div className=" border-b-[1px] my-2 border-gray-300 w-[90%]" />

            {userInfo?.name ? (
              <Button
                onClick={() => signOut()}
                variant="contained"
                color="warning"
              >
                Log Out
              </Button>
            ) : (
              <Button
                onClick={() => signIn()}
                variant="contained"
                color="success"
              >
                Log In
              </Button>
            )}
          </>
        )}
        {!isMdScreen && (
          <Button
            size="small"
            onClick={() => setIsCollapsed(!isCollapsed)}
            variant="contained"
            color={isCollapsed ? "warning" : "error"}
            className={`${isCollapsed ? "absolute -top-3" : "fixed"} `}
          >
            {isCollapsed ? "Open" : "Close"}
          </Button>
        )}
      </div>
      <div className="md:w-4/5 px-1 gap-2 flex-col flex">
        <div className="flex flex-row justify-between gap-3 items-center">
          <div
            className=" bg-lime-500 hover:bg-lime-600 h-14 w-full rounded-2xl flex items-center justify-center"
            onClick={() => setValue("Delivering")}
          >
            <p className="text-white  text-center">Delivering 2344234</p>
          </div>
          <div
            className=" bg-red-800 hover:bg-red-900 h-14 w-full rounded-2xl flex items-center justify-center"
            onClick={() => setValue("Delivered")}
          >
            <p className="text-white text-center">Delivered 2344234</p>
          </div>
          <div
            className=" bg-red-800 hover:bg-red-900 h-14 w-full rounded-2xl flex items-center justify-center"
            onClick={() => setValue("Total")}
          >
            <p className="text-white text-center">Total 2344234</p>
          </div>
          <div
            className=" bg-red-800 hover:bg-red-900 h-14 w-full rounded-2xl flex items-center justify-center"
            onClick={() => setValue("Canceled")}
          >
            <p className="text-white text-center">Canceled 2344234</p>
          </div>
          <div
            className=" bg-red-800 hover:bg-red-900 h-14 w-full rounded-2xl flex items-center justify-center"
            onClick={() => setValue("Return")}
          >
            <p className="text-white text-center">Return 2344234</p>
          </div>
        </div>
        <div className="w-full rounded-2xl flex items-center justify-center ">
          <UserOrders val={value} />
        </div>
      </div>
    </div>
  );
};

export default Account;
