import React from "react";
import styles from "./component.module.css";
import Image from "next/image";
import { ring } from "@/public/assets";
const TAGS = [
  { text: "John Doe", imageUrl: "https://picsum.photos/id/34/200/300" },
  { text: "Jane Smith", imageUrl: "https://picsum.photos/id/67/200/300" },
  { text: "Alice Johnson", imageUrl: "https://picsum.photos/id/342/200/300" },
  { text: "Bob Williams", imageUrl: "https://picsum.photos/id/14/200/300" },
  { text: "Eva Davis", imageUrl: "https://picsum.photos/id/54/200/300" },
  { text: "Mike Brown", imageUrl: "https://picsum.photos/id/237/200/300" },
  { text: "Sara Wilson", imageUrl: "https://picsum.photos/id/2/200/300" },
  { text: "Tom Anderson", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "Emily Clark", imageUrl: "https://picsum.photos/id/212/200/300" },
  { text: "Daniel Lee", imageUrl: "https://picsum.photos/id/8/200/300" },
  { text: "Olivia White", imageUrl: "https://picsum.photos/id/56/200/300" },
  { text: "Mike Brown", imageUrl: "https://picsum.photos/id/237/200/300" },
  { text: "Sara Wilson", imageUrl: "https://picsum.photos/id/2/200/300" },
  { text: "Tom Anderson", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "Emily Clark", imageUrl: "https://picsum.photos/id/212/200/300" },
  { text: "Tom Anderson", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "Emily Clark", imageUrl: "https://picsum.photos/id/212/200/300" },
  { text: "Daniel Lee", imageUrl: "https://picsum.photos/id/8/200/300" },
  { text: "Olivia White", imageUrl: "https://picsum.photos/id/56/200/300" },
  { text: "Mike Brown", imageUrl: "https://picsum.photos/id/237/200/300" },
  { text: "Sara Wilson", imageUrl: "https://picsum.photos/id/2/200/300" },
  { text: "Tom Anderson", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "Emily Clark", imageUrl: "https://picsum.photos/id/212/200/300" },
  { text: "Tom Anderson", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "Emily Clark", imageUrl: "https://picsum.photos/id/212/200/300" },
  { text: "Tom Anderson", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "Emily Clark", imageUrl: "https://picsum.photos/id/212/200/300" },
  { text: "Daniel Lee", imageUrl: "https://picsum.photos/id/8/200/300" },
  { text: "Olivia White", imageUrl: "https://picsum.photos/id/56/200/300" },
  { text: "Mike Brown", imageUrl: "https://picsum.photos/id/237/200/300" },
  { text: "Sara Wilson", imageUrl: "https://picsum.photos/id/2/200/300" },
  { text: "Tom Anderson", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "Emily Clark", imageUrl: "https://picsum.photos/id/212/200/300" },
];

const DURATION = 60000;
const ROWS = 3;
const TAGS_PER_ROW = 30;

const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) =>
  [...arr].sort(() => 0.5 - Math.random());

const OnHand = () => (
  <div className={styles.app}>
    <header className="text-neutral-700">
      <h5 className="italic font-extrabold lg:text-7xl tracking-[0.2em] md:text-8xl text-4xl text-center mb-5 ">
        Our Work
        <p className="lg:text-5xl text-3xl">on Customers Hands</p>
      </h5>
    </header>
    <div className={styles["tag-list"]}>
      {[...new Array(ROWS)].map((_, i) => (
        <div
          className={styles["loop-slider"]}
          style={{
            "--duration": `${random(DURATION - 5000, DURATION + 5000)}ms`,
            "--direction": i % 2 ? "reverse" : "normal",
          }}
          key={i}
        >
          <div className={styles.inner}>
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((item, index) => (
                <div className={styles.tag} key={index}>
                  <Image
                    src={`${item?.imageUrl || ring}  `}
                    alt="image"
                    width={50}
                    height={50}
                    className=" rounded-full w-[60px] h-[60px]"
                  />
                  <span> {item.text}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
      <div className={styles.fade} />
    </div>
  </div>
);

export default OnHand;
