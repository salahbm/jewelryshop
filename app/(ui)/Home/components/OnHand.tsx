import React from "react";
import styles from "./component.module.css";
import Image from "next/image";
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
  { text: "Daniel Lee", imageUrl: "https://picsum.photos/id/8/200/300" },
  { text: "Olivia White", imageUrl: "https://picsum.photos/id/56/200/300" },
  { text: "Olivia White", imageUrl: "https://picsum.photos/id/56/200/300" },
  { text: "Mike Brown", imageUrl: "https://picsum.photos/id/237/200/300" },
  { text: "Sara Wilson", imageUrl: "https://picsum.photos/id/2/200/300" },
  { text: "Tom Anderson", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "Emily Clark", imageUrl: "https://picsum.photos/id/212/200/300" },
  { text: "Daniel Lee", imageUrl: "https://picsum.photos/id/8/200/300" },
  { text: "Olivia White", imageUrl: "https://picsum.photos/id/56/200/300" },
  { text: "Olivia White", imageUrl: "https://picsum.photos/id/56/200/300" },
  { text: "Mike Brown", imageUrl: "https://picsum.photos/id/237/200/300" },
  { text: "Sara Wilson", imageUrl: "https://picsum.photos/id/2/200/300" },
  { text: "Tom Anderson", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "Emily Clark", imageUrl: "https://picsum.photos/id/212/200/300" },
  { text: "Daniel Lee", imageUrl: "https://picsum.photos/id/8/200/300" },
  { text: "Olivia White", imageUrl: "https://picsum.photos/id/56/200/300" },
];

const DURATION: number = 60000;
const ROWS: number = 3;
const TAGS_PER_ROW: number = 30;

const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: string[]): string[] =>
  [...arr].sort(() => 0.5 - Math.random());

const OnHand: React.FC = () => (
  <div className={styles.app}>
    <header className="text-white">
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
            "--duration": `${random(
              DURATION - 5000,
              DURATION + 5000
            )}ms` as any,
            "--direction": i % 2 ? "reverse" : "normal",
          }}
          key={i}
        >
          <div className={styles.inner}>
            {shuffle(TAGS as any)
              .slice(0, TAGS_PER_ROW)
              .map((item: any, index: number) => (
                <div className={styles.tag} key={index}>
                  <img
                    src={item.imageUrl}
                    alt="image"
                    className=" rounded-full w-[70px] h-[70px]"
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
