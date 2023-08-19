import React from "react";
import styles from "./component.module.css";
import Image from "next/image";
import {
  coll1,
  collectionItems,
  handmade,
  necklace,
  ring,
} from "@/public/assets";

const Category = () => {
  return (
    <div>
      <h5 className="text-white font-extrabold lg:text-9xl tracking-[0.3em] md:text-8xl text-4xl text-center my-10">
        Category Look
      </h5>
      <div className={styles.heroSection}>
        <div className={styles.cardGrid}>
          <a className={styles.card} href="#">
            <Image className={styles.cardBackground} src={ring} alt="ring " />
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>#4312</p>
              <h3 className={styles.cardHeading}>Shop Rings</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <Image
              src={coll1}
              alt="necklace"
              className={styles.cardBackground}
            />
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>#1234</p>
              <h3 className={styles.cardHeading}>Shop the Necklace</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <Image
              src={handmade}
              alt="handmade"
              className={styles.cardBackground}
            />
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>#422</p>
              <h3 className={styles.cardHeading}>Shop Handmade Items</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <Image
              src={collectionItems}
              alt="necklace"
              className={styles.cardBackground}
            />
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>#1223</p>
              <h3 className={styles.cardHeading}>Shop All Items</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
