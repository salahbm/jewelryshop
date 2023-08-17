"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useRouter } from "next/navigation";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { banner1, banner2, banner3 } from "@/public/assets/index";
import Image from "next/image";
const HomeBanner = () => {
  const route = useRouter();

  return (
    <>
      <Slide {...properties} cssClass="w-full rounded-lg my-4 ">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="relative h-[250px] w-full  md:h-[500px]">
            <Image
              className=" bg-no-repeat object-cover cursor-auto w-full h-full "
              src={slideImage.url}
              alt="img"
            />
            {slideImage?.button.length > 1 && (
              <div className="z-1">
                <button
                  onClick={() => route.push(slideImage?.button)}
                  className="absolute bottom-7 h-10 rounded-2xl border-[1px] text-sm font-semibold text-black md:bottom-7 w-24  hover:bg-slate-50 transition duration-500 cursor-pointer left-10 hover:text-amber-900 border-black"
                >
                  Order Now
                </button>
                <button
                  onClick={() => route.push(slideImage?.button)}
                  className="absolute bottom-7 h-10 rounded-2xl border-[1px] text-sm border-black font-semibold text-black md:bottom-7 w-24  hover:bg-white transition duration-500 cursor-pointer left-[150px] hover:text-amber-900"
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
    url: banner1,
    button: "/",
  },
  {
    url: banner2,
    button: "/34234",
  },
  {
    url: banner3,
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
