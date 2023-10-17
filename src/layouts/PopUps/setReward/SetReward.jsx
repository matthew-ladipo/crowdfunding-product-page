import React from "react";
import svgCheck from "../../../image/icon-check.svg";
import style from "./SetReward.module.css";

const SetReward = (props) => {
  return (
    <div className={style.reward}>
      <img src={svgCheck} alt="svg" />

      <h3>Thanks For Your Support</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
        repudiandae dolorem accusantium laborum eveniet
      </p>
      <button onClick={props.onCancel}>Got it!</button>
    </div>
  );
};

export default SetReward;
