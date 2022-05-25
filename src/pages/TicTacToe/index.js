import React from "react";
import styles from "../TicTacToe/index.module.css";

const index = () => {
  return (
    <div className={styles.page}>
        <h1>Tic Tac Toenail</h1>
      <div className={styles.grid}>
        <div className={styles.box}>
          <p></p>
        </div>
        <div className={styles.box}>
          <p></p>
        </div>
        <div className={styles.box}>
          <p></p>
        </div>
        <div className={styles.box}>
          <p></p>
        </div>
        <div className={styles.box}>
          <p></p>
        </div>
        <div className={styles.box}>
          <p></p>
        </div>
        <div className={styles.box}>
          <p></p>
        </div>
        <div className={styles.box}>
          <p></p>
        </div>
        <div className={styles.box}>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default index;
