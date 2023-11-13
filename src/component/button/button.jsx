import React, { useState } from "react";
import cls from "classnames";
import styles from "./button.module.css";

const Button = ({ text, bg, svgBook }) => {
  const [colorSwitch, setColorSwitch] = useState(false);
  
  function switchPlans() {
    setColorSwitch(true);
  }
  // (prev) => !prev)
  return (
    <button className={cls(styles.button, styles[bg])} onClick={switchPlans}>
      <p>
        {svgBook ? (
          <>
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" className={styles.book}>
              <g fill="none" fill-rule="evenodd">
                <circle
                 style={{ fill: colorSwitch ===  true ? ' #04ac9e' : 'gray'  }}  
                cx="28" cy="28" r="24" />
                <path fill="black" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
            {text}
          </>
        ) : (
          text
        )}
      </p>
    </button>
  );
};

export default Button;
