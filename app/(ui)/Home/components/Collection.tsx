"use client";
import React, { useState } from "react";
import { banner1, diamond } from "../../../../public/assets/index";
import Image from "next/image";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
const Collection = () => {
  const collections = [diamond,banner1 ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  return (
    <div>
      <div className="text-neutral-700  flex items-center justify-center relative mb-6 w-full flex-col md:flex-row">
        <h5 className="animate-pulse font-extrabold lg:text-9xl tracking-[0.3em] md:text-8xl text-4xl">
          New <br />
          <span>Collection</span>
        </h5>
        <span className="md:absolute md:top-9  lg:text-xl italic text-yellow-500  top-1 right-[5%]  md:w-[400px] text-xs  lg:max-h-max text-center">
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

        <div className="-right-0.5  text-center lg:text-left absolute w-5/12 md:w-4/12 bg-bgTransparent text-neutral-700 max-h-full p-3 rounded-tr-2xl rounded-br-2xl overflow-y-scroll h-full">
          <h2 className=" md:text-5xl text-center text-yellow-500 font-bold text-md">
            Gold Wiser
          </h2>

          <p className=" mt-1 lg:text-base text-xs  italic text-lightText ">
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
          <span className=" text-neutral-700 text-xs lg:text-base">Next</span>
          <button
            onClick={handleNext}
            className="  rounded-2xl lg:w-14 lg:h-10  duration-300 outline outline-black ease-in grid place-content-center hover:text-white text-lightText h-5 w-7 hover-bg-black"
          >
            <PiArrowFatLinesRightFill />
          </button>
        </div>
      </div>
  
    </div>
  );
};

export default Collection;
