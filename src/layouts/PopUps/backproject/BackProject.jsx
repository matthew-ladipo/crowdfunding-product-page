import React from "react";
import style from "./BackProject.module.css";
import { FaTimes } from "react-icons/fa";

const BackProject = (props) => {
  const radio = [
    {
      headLeft: "Pledge with no reward",
      // price: "plegde $25 or more",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet atque natus inventore molestiae eos delectus .",
    },
    {
      headLeft: "Black Edition Stand",

      price: "plegde $25 or more",
      time: "101",
      left: "left",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet atque natus inventore molestiae.",
    },
    {
      headLeft: "Mahogany Special Edition",

      price: "plegde $25 or more",
      time: "64",
      left: "left",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet atque natus inventore molestiae.",
    },

    {
      headLeft: "Mahogany Special Edition",
      price: "plegde $25 or more",
      time: "0",
      left: "left",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet atque natus inventore molestiae.",
    },
  ];

  return (
    <div>
      <ul className={style.final}>
        <div className={style.times}>
          <h3>Back This PROJECT</h3>
          <div onClick={props.onChange} className={style.fatimes}>
            <FaTimes style={{ color: "black" }} />
          </div>
        </div>

        <p style={{ color: "gray", fontSize: 13, marginBottom: 9 }}>
          Lorem ipsum dolor amet consectetur adipisicing .
        </p>
        {radio.map((stat, index) => (
          <div className={style.radiobuttonscontainer}>
            <div className={style.lis}>
              <input
                name="radio-group"
                id="radio2"
                type="radio"
                className={style.cyberpunk}
              />
              <label className={style.contents}>
                <br />
                <div className={style.heads}>
                  <p className={style.head}>
                    {stat.headLeft} <span>{stat.price}</span>
                  </p>
                  <div>
                    {stat.time} <small>{stat.left}</small>
                  </div>
                </div>
                <h6 className={style.paragraph}>{stat.paragraph}</h6>
              </label>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BackProject;

