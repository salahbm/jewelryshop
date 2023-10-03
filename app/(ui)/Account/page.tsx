"use client";
import React from "react";
import styles from "./account.module.css";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";

const Account: React.FC = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <section className="flex flex-col gap-6">
      <p>{session?.user?.name}</p>
      <Image
        src={session?.user?.image}
        width={200}
        height={200}
        alt="user pic"
      />
    </section>
  );
};

export default Account;
