"use client";
import React, { useState } from "react";
import {
  coll1,
  coll2,
  collection,
  diamond,
  fColl,
  fColl1,
} from "../../../../public/assets/index";
import Image from "next/image";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
const Collection = () => {
  const collections = [collection, diamond];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  return (
    <div>
      <div className="text-white  flex items-center justify-center relative mb-6">
        <h5 className="animate-pulse font-extrabold lg:text-9xl tracking-[0.3em] md:text-8xl text-4xl">
          New <br className="pl-10" />
          <span className="pl-20">Collection</span>
        </h5>
        <span className="absolute md:top-9 md:w-[450px] md:left-[50%] lg:text-xl italic text-yellow-500  top-1 right-[10%] w-[200px] text-xs overflow-hidden max-h-[2.8em] lg:max-h-max">
          Dive into luxury with our new jewelry collection, where timeless
          elegance meets modern allure. Elevate your style today!
        </span>
      </div>

      <div className="w-full md:h-[550px]  flex items-center justify-center relative font-mono  h-[250px]">
        <Image
          src={collections[currentIndex]}
          alt={`collectionPhoto-${currentIndex}`}
          className="w-full h-full rounded-2xl bg-no-repeat duration-500 hover:scale-110  hover:z-[1]"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        />

        <div className="-right-0.5  text-center lg:text-left absolute w-5/12 md:w-4/12 bg-bgTransparent text-white max-h-full p-3 rounded-tr-2xl rounded-br-2xl overflow-y-scroll h-full">
          <h2 className=" md:text-5xl text-center text-yellow-500 font-bold text-md">
            Gold Wiser
          </h2>

          <p className=" mt-1 lg:text-base text-xs  italic ">
            <br />
            🔹 Diamond Embellishment: Adorning the chain are a stunning array of
            hand-set lab-created diamonds, expertly faceted to unleash an
            unparalleled play of light.
            <br /> <br /> 🔹 Total Carat Weight: A generous total carat weight
            of 4.75 carats amplifies the opulence of this piece, giving it a
            lustrous and lavish appeal.
          </p>
        </div>
        <div className="absolute bottom-5 left-5  flex items-center justify-between gap-3  z-[2]">
          <span className=" text-lightText text-xs lg:text-base">Next</span>
          <button
            onClick={handleNext}
            className="  rounded-2xl lg:w-14 lg:h-10  duration-300 hover:bg-Black outline outline-white ease-in grid place-content-center hover:text-gYellow text-lightText h-5 w-7"
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
