import React from "react";
import styles from "./component.module.css";
import Image from "next/image";
const TAGS = [
  { text: "HTML", imageUrl: "https://picsum.photos/id/34/200/300" },
  { text: "CSS", imageUrl: "https://picsum.photos/id/67/200/300" },
  { text: "JavaScript", imageUrl: "https://picsum.photos/id/342/200/300" },
  { text: "Typescript", imageUrl: "https://picsum.photos/id/14/200/300" },
  { text: "Tailwind", imageUrl: "https://picsum.photos/id/54/200/300" },
  { text: "React", imageUrl: "https://picsum.photos/id/237/200/300" },
  { text: "543534", imageUrl: "https://picsum.photos/id/2/200/300" },
  { text: "fsdfs", imageUrl: "https://picsum.photos/id/6/200/300" },
  { text: "fdsfsd", imageUrl: "https://picsum.photos/id/212/200/300" },
  { text: "fsdf", imageUrl: "https://picsum.photos/id/8/200/300" },
  { text: "fsdf", imageUrl: "https://picsum.photos/id/56/200/300" },
];

const DURATION: number = 30000;
const ROWS: number = 3;
const TAGS_PER_ROW: number = 100;

const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: string[]): string[] =>
  [...arr].sort(() => 0.5 - Math.random());

const OnHand: React.FC = () => (
  <div className={styles.app}>
    <header className="text-white">
      <h1>Infinite Scroll Animation</h1>
      <p>CSS only, content independent, bi-directional, customizable</p>
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
              .map((item: any, index: number) => (
                <div className={styles.tag} key={index}>
                  <Image
                    src={item.imageUrl}
                    alt="image"
                    width={50}
                    height={500}
                    className=" rounded-b-md"
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
