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
              <span className=" px-5 py-2 text-left  font-bold text-white text-3xl w-[600px] bottom-[150px] absolute left-3">
                {slideImage?.caption}
              </span>
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
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption:
      "emaining essentially unchanged. It was popularisining Lorem Ipsum passages, and more recen",
    button: "/",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "",
    button: "/34234",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption:
      "There are many variations of passages of Lorem Ipsum available, but the majority ha",
    button: "/fsdfsdfsd",
  },
];
const properties = {
  prevArrow: (
    <button className=" w-14 border-[1px] border-cyan-50 text-lightText rounded-2xl md:flex items-center justify-center    hover:bg-white hover:text-amber-900  hover:w-16 duration-500 h-10 absolute hidden">
      <BsChevronDoubleLeft />
    </button>
  ),
  nextArrow: (
    <button className=" w-14 border-[1px] border-cyan-50 text-lightText rounded-2xl md:flex items-center justify-center   hover:bg-white hover:text-amber-900  hover:w-16 duration-500 h-10 mr-10 hidden ">
      <BsChevronDoubleRight />
    </button>
  ),
};

export default HomeBanner;
