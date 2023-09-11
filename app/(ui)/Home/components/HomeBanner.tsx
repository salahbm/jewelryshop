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
            <img
              src={slideImage.url}
              alt="image"
              className="h-[250px] w-full  md:h-[500px] lg:h-[600px] bg-no-repeat bg-cover pointer-events-none"
            />

            {slideImage?.button.length > 1 && (
              <div>
                <button
                  onClick={() => route.push(slideImage?.button)}
                  className="absolute bottom-7 h-5 md:h-10 rounded-2xl border-[1px] md:text-sm text-xs font-semibold text-Red md:bottom-7 md:w-24 w-20  hover:bg-Black transition duration-500 cursor-pointer md:left-10 left-4 hover:text-gYellow border-Red hover:border-gYellow"
                >
                  Order Now
                </button>
                <button
                  onClick={() => route.push(slideImage?.button)}
                  className="absolute bottom-7 h-5 md:h-10 rounded-2xl border-[1px] md:text-sm text-xs font-semibold text-Red md:bottom-7 md:w-24 w-20 hover:bg-Black transition duration-500 cursor-pointer md:left-36 left-28 hover:text-gYellow border-Red hover:border-gYellow"
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
    url: "https://theartofpandora.com/wp-content/uploads/2020/06/HK-summer-sale.jpg",

    button: "/",
  },
  {
    url: "https://i0.wp.com/davidcraigjewelers.com/wp-content/uploads/2014/08/soak-up-summer-jewelry-sale.jpg?fit=1000%2C400&ssl=1",
    button: "/34234",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/heidi-horten-jewelry-6422129ac1c2b.jpg",
    button: "/fsdfsdfsd",
  },
];
const properties = {
  prevArrow: (
    <button className="md:hidden">
      <BsChevronDoubleLeft className="text-Red" />
    </button>
  ),
  nextArrow: (
    <button className=" md:hidden ">
      <BsChevronDoubleRight className="text-Red" />
    </button>
  ),
};

export default HomeBanner;
