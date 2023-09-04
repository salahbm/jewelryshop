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
    // <div>
    <div className={classes.gallery}>
      {ourWork.map((work, index) => (
        <div className={`${classes.galleryItem} cursor-move`} key={index}>
          <Image className={classes.galleryImg} src={work.img} alt="img" />
        </div>
      ))}
    </div>
  );
};

export default OurWork;
