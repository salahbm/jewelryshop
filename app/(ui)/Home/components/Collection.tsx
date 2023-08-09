import React from "react";
import { coll1, coll2, diamond, fColl, fColl1 } from "../../../assets/index";
import Image from "next/image";
const Collection = () => {
  const collections = [fColl, diamond];
  return (
    <div className="">
      <div>New Collection</div>
      <div className="">
        {collections.map((img, index) => (
          <div
            key={index}
            className="w-full h-[550px] items-center justify-center flex"
          >
            <Image
              src={img}
              alt={`collectionPhoto-${index}`}
              className="w-[95%] h-full object-cover relative rounded-md"
            ></Image>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Collection;
