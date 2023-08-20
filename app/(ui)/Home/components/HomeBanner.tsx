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
    url: "https://images-aka.zales.com/category/articles/vday-jewelry/767X365_Articles_2.jpg",

    button: "/",
  },
  {
    url: "https://cdn5.vectorstock.com/i/1000x1000/34/59/premium-jewelry-style-sale-banner-template-vector-19833459.jpg",
    button: "/34234",
  },
  {
    url: "https://www.familysavings.com/wp-content/uploads/2022/04/jcp-m-day-jewelry.png",
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
