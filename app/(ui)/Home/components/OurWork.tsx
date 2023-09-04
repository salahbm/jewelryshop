import { diamond, fColl, fColl1, ourwork, ring } from "@/public/assets";
import classes from "./component.module.css";
import React from "react";
import Image from "next/image";

const ourWork = [
  {
    img: fColl,
  },
  {
    img: fColl1,
  },
  {
    img: ring,
  },
  {
    img: diamond,
  },
];

const OurWork = () => {
  return (
    <div>
      <div className="text-white  flex items-center justify-center  mb-6">
        <h5 className="italic font-extrabold lg:text-8xl tracking-[0.2em] md:text-8xl text-4xl  ">
          Our Work in Process
        </h5>

        <p className=" lg:text-xl italic text-yellow-500   text-xs ">
          Dive into luxury with our new jewelry collection, where timeless
          elegance meets modern allure. Elevate your style today!
        </p>
      </div>
      <div className={classes.gallery}>
        {ourWork.map((work, index) => (
          <div className={`${classes.galleryItem} cursor-move`} key={index}>
            <Image className={classes.galleryImg} src={work.img} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
