import React from "react";
import styles from "./BackProject.module.css";

const Edit = () => {
  return (
    <div className={styles.edit}>
      <p>Enter your Plegde</p>
      <div>
        <button className={styles.btns}>
          <div className={styles.clicks}>
            <span>$</span>
            <input type="number" className={styles.input} />
          </div>
          <p>close</p>
        </button>
      </div>
    </div>
  );
};

export default Edit;
