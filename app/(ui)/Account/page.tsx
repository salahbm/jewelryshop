"use client";
import React, { useEffect } from "react";
import styles from "./account.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "@/app/redux/shopSlice";
import Link from "next/link";
import AddJewelryItem from "../AddItem/page";
const Account: React.FC = () => {
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
  return (
    <section className="flex flex-col gap-6 text-white text-3xl items-center justify-center">
      <p>{userInfo?.name}</p>
      <Image src={userInfo?.image} width={200} height={200} alt="user pic" />
      <button onClick={signIn}>
        <h1 className="text-white">LogIn</h1>
      </button>
      <h1 className="text-white" onClick={signOut}>
        Logout
      </h1>
      <Link href={`../AddItem`}>
        <h1>Add Item</h1>
      </Link>
    </section>
  );
};

export default Account;
