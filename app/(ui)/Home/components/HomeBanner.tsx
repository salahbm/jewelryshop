"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useRouter } from "next/navigation";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { banner1,  banner2,  banner3 } from "@/public/assets/index";
import Image from "next/image";

const HomeBanner = () => {
  const route = useRouter();

  return (
    <>
      <Slide {...properties} cssClass="w-full rounded-lg my-4 ">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="relative  ">
            <Image
              src={slideImage.url}
              alt="image"
              width={1000}
              height={250}
              loading="lazy"
              className="h-[250px] w-full  md:h-[500px] lg:h-[600px] bg-no-repeat bg-cover pointer-events-none"
            />

            {slideImage?.button.length > 1 && (
              <div>
                <button
                  onClick={() => route.push(slideImage?.button)}
                  className="absolute bottom-7 h-5 md:h-10 rounded-2xl border-[1px] md:text-sm text-xs font-semibold text-black md:bottom-7 md:w-24 w-20  hover:bg-Black transition duration-500 cursor-pointer md:left-10 left-4 hover:text-gYellow border-black hover:border-gYellow"
                >
                  Order Now
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
    url: banner3,

    button: "/Shop",
  },
  {
    url: banner1,
    button: "/Shop",
  },
  {
    url: banner2,
    button: "/Shop",
  },
];
const properties = {
  prevArrow: (
    <button className="md:hidden">
      <BsChevronDoubleLeft className="text-black" />
    </button>
  ),
  nextArrow: (
    <button className=" md:hidden ">
      <BsChevronDoubleRight className="text-black" />
    </button>
  ),
};

export default HomeBanner;
