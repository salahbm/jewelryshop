import React, { FC } from "react";
import styles from "./component.module.css";
import Image from "next/image";
import { bracelet2, coll1, earring2, ring } from "@/public/assets";
interface CardProps {
  imageSrc: any;
  altText: string;
  category: string;
  heading: string;
}
const Category: FC = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: ring,
      altText: "ring",
      category: "#4312",
      heading: "Rings",
    },
    {
      id: 2,
      imageSrc: coll1,
      altText: "necklace",
      category: "#1234",
      heading: "Necklace",
    },
    {
      id: 3,
      imageSrc: bracelet2,
      altText: "handmade",
      category: "#422",
      heading: "Bracelet",
    },
    {
      id: 4,
      imageSrc: earring2,
      altText: "earring",
      category: "#1223",
      heading: "Ear-Rings",
    },
  ];

  const Card: FC<CardProps> = ({ imageSrc, altText, category, heading }) => {
    return (
      <a className={styles.card} href="#">
        <Image src={imageSrc} alt={altText} className={styles.cardBackground} />
        <div className={styles.cardContent}>
          <p className={styles.cardCategory}>{category}</p>
          <h3 className={` text-sm md:text-2xl ${styles.cardHeading}`}>
            {heading}
          </h3>
        </div>
      </a>
    );
  };
  return (
    <div className="">
      <h1 className="text-neutral-700 font-extrabold lg:text-9xl tracking-[0.3em] md:text-8xl text-4xl text-center my-10">
        Category Look
      </h1>
        <p className="lg:text-xl italic text-yellow-500 text-sm text-center">
Select the category to see more items related to the desired category of your wish!

        </p>
      <div className={styles.heroSection}>
        <div className={styles.cardGrid}>
          {cardsData.map((card) => (
            <Card
              key={card.id}
              imageSrc={card.imageSrc}
              altText={card.altText}
              category={card.category}
              heading={card.heading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
