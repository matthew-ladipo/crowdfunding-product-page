import React from "react";
import cls from "classnames";
import styles from "./button.module.css";


const Button = ({ text, bg, svgBook }) => {
  return (
    <button className={cls(styles.button, styles[bg])}>
      <p>
         {svgBook ? (
          <>
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" >
              <g fill="none" fill-rule="evenodd">
                <circle fill="#2F2F2F" cx="28" cy="28" r="24" />
                <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
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
