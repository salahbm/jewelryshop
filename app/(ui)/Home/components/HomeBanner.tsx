"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useRouter } from "next/navigation";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { banner1, banner2, banner3 } from "@/public/assets/index";
import Image from "next/image";
import { url } from "inspector";
const HomeBanner = () => {
  const route = useRouter();

  return (
    <>
      <Slide {...properties} cssClass="w-full rounded-lg my-4 ">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="relative  ">
            <div
              className="h-[250px] w-full  md:h-[500px] lg:h-[600px] bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${slideImage.url})`,
              }}
            />

            {slideImage?.button.length > 1 && (
              <div className="">
                <button
                  onClick={() => route.push(slideImage?.button)}
                  className="absolute bottom-7 h-5 md:h-10 rounded-2xl border-[1px] md:text-sm text-xs font-semibold text-black md:bottom-7 md:w-24 w-20  hover:bg-slate-50 transition duration-500 cursor-pointer md:left-10 left-4 hover:text-amber-900 border-black"
                >
                  Order Now
                </button>
                <button
                  onClick={() => route.push(slideImage?.button)}
                  className="absolute bottom-7 h-5 md:h-10 rounded-2xl border-[1px] md:text-sm text-xs font-semibold text-black md:bottom-7 md:w-24 w-20 hover:bg-slate-50 transition duration-500 cursor-pointer md:left-36 left-28 hover:text-amber-900 border-black"
                >
                  Details
                </button>
              </div>
            )}
          </div>
        ))}
      </Slide>
    </>
  );
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",

    button: "/",
  },
  {
    url: "https://i.pinimg.com/originals/4f/d2/cd/4fd2cd196b6fcd75f124ea89a350cd57.jpg",
    button: "/34234",
  },
  {
    url: "https://zeevector.com/wp-content/uploads/Jewellery-Banner-Design-Background@zeevector.png",
    button: "/fsdfsdfsd",
  },
];
const properties = {
  prevArrow: (
    <button className="hidden">
      <BsChevronDoubleLeft />
    </button>
  ),
  nextArrow: (
    <button className=" hidden ">
      <BsChevronDoubleRight />
    </button>
  ),
};

export default HomeBanner;
