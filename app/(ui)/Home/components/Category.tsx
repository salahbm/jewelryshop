import React from "react";
import styles from "./component.module.css";

const Category = () => {
  return (
    <div>
      <h5 className="text-white font-extrabold lg:text-9xl tracking-[0.3em] md:text-8xl text-4xl text-center my-10">
        Category Look
      </h5>
      <div className={styles.heroSection}>
        <div className={styles.cardGrid}>
          <a className={styles.card} href="#">
            <div
              className={styles.cardBackground}
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
              }}
            ></div>
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>Category</p>
              <h3 className={styles.cardHeading}>Example Card Heading</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div
              className={styles.cardBackground}
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
              }}
            ></div>
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>Category</p>
              <h3 className={styles.cardHeading}>Example Card Heading</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div
              className={styles.cardBackground}
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
              }}
            ></div>
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>Category</p>
              <h3 className={styles.cardHeading}>Example Card Heading</h3>
            </div>
          </a>
          <a className={styles.card} href="#">
            <div
              className={styles.cardBackground}
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
              }}
            ></div>
            <div className={styles.cardContent}>
              <p className={styles.cardCategory}>Category</p>
              <h3 className={styles.cardHeading}>Example Card Heading</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
