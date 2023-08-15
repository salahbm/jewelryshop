"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useRouter } from "next/navigation";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const HomeBanner = () => {
  const route = useRouter();
  return (
    <>
      <Slide {...properties} cssClass="w-full rounded-lg ">
        {slideImages.map((slideImage, index) => (
          <div key={index} className="  h-[250px] w-full  md:h-[500px]">
            <div
              className="bg-image relative flex h-full w-full  bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              {slideImage?.button.length > 1 && (
                <div className="">
                  <button
                    onClick={() => route.push(slideImage?.button)}
                    className="absolute bottom-7 h-10 rounded-2xl border-[1px] text-sm font-semibold text-lightText md:bottom-7 w-24  hover:bg-slate-50 transition duration-500 cursor-pointer left-10 hover:text-amber-900"
                  >
                    Order Now
                  </button>
                  <button
                    onClick={() => route.push(slideImage?.button)}
                    className="absolute bottom-7 h-10 rounded-2xl border-[1px] text-sm font-semibold text-lightText md:bottom-7 w-24  hover:bg-white transition duration-500 cursor-pointer left-[150px] hover:text-amber-900"
                  >
                    Details
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slide>
    </>
  );
};
const slideImages = [
  {
    url: "../../../assets/coll1.jpg",
    button: "/",
  },
  {
    url: "../../../assets/coll2.jpg",
    button: "/34234",
  },
  {
    url: "../../../assets/fColl.jpg",
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
