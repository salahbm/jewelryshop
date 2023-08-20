"use client";
import React, { useState } from "react";
import {
  coll1,
  coll2,
  diamond,
  fColl,
  fColl1,
} from "../../../../public/assets/index";
import Image from "next/image";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
const Collection = () => {
  const collections = [fColl, diamond];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  return (
    <div className="">
      <div className="text-white relative grid place-content-center my-10">
        <h5 className="animate-pulse font-extrabold lg:text-9xl tracking-[0.3em] md:text-8xl text-4xl">
          New <br className="pl-10" />
          <span className="pl-20">Collection</span>
        </h5>
        <span className="absolute md:top-9 md:w-[450px] md:left-[50%] lg:text-xl italic text-yellow-500  top-1 right-[10%] w-[200px] text-xs overflow-hidden max-h-[2.8em] lg:max-h-max">
          Dive into luxury with our new jewelry collection, where timeless
          elegance meets modern allure. Elevate your style today!
        </span>
      </div>

      <div className="w-full h-[550px] items-center justify-center flex relative font-mono overflow-hidden">
        <Image
          src={collections[currentIndex]}
          alt={`collectionPhoto-${currentIndex}`}
          className="w-[95%] h-full object-cover  relative rounded-md  scale-100 duration-500 hover:scale-110 "
        />
        <div className="right-2 lg:right-8  text-center lg:text-left absolute w-4/12 bg-bgTransparent text-white h-full p-3 rounded-tr-md rounded-br-md">
          <h2 className=" lg:text-5xl text-center text-amber-800 font-bold text-2xl">
            Title of the Product
          </h2>
          <p className=" mt-1 lg:text-base text-xs overflow-hidden max-h-[25em] md:max-h-[20em] lg:max-h-[300px] italic ">
            <br /> 🔹 Diamond Embellishment: Adorning the chain are a stunning
            array of hand-set lab-created diamonds, expertly faceted to unleash
            an unparalleled play of light. The diamonds are carefully selected
            for their exceptional brilliance, ensuring a scintillating display
            that mesmerizes onlookers.
            <br /> 🔹 Total Carat Weight: A generous total carat weight of 4.75
            carats amplifies the opulence of this piece, giving it a lustrous
            and lavish appeal.
          </p>
        </div>
        <div className="absolute bottom-10 lg:right-20  flex items-center justify-between gap-3 right-5">
          <span className=" text-lightText text-xs lg:text-base">Next</span>
          <button
            onClick={handleNext}
            className="  rounded-2xl lg:w-14 lg:h-10  duration-300 hover:bg-yellow-50 outline outline-yellow-50 ease-in grid place-content-center hover:text-amber-900 text-lightText h-5 w-7"
          >
            <PiArrowFatLinesRightFill />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Collection;
