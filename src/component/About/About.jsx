import React, { useState } from "react";
import style from "./About.module.css";
import BackDropTwo from "../../layouts/BackDropTwo";
import SetReward from "../../layouts/PopUps/setReward/SetReward";
import Button from "../button/button";


const About = ({ text, bg }) => {
  const stats = [
    {
      headLeft: "Bambol Stand",
      price: "plegde $25 or more",
      time: "101",
      button: <Button text={"Select Reward"} bg={"primary"} />,
      left: "left",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet atque natus inventore molestiae eos delectus provident, corporis eius aperiam est dolorum nisi iure tenetur quidem.",
    },
    {
      headLeft: "Black Edition Stand ",

      price: "plegde $25 or more",
      time: "64",
      button: <Button text={"Select Reward"} bg={"primary"} />,
      left: "left",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet atque natus inventore molestiae eos delectus provident, corporis eius aperiam est dolorum nisi iure tenetur quidem.",
    },
    {
      headLeft: "Mahogany Special Edition",

      price: "plegde $25 or more",
      time: "0",
      button: <Button text={"Out Of Stock"} bg={"nursery"} action='DisabledByDefault' />,
      left: "left",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet atque natus inventore molestiae eos delectus provident, corporis eius aperiam est dolorum nisi iure tenetur quidem.",
    },
  ];

  const [showReward, setShowreward] = useState(false);

  function openReward() {
    setShowreward(true);
  }

  function closeReward() {
    setShowreward(false);
  }

  return (
    <>
      <div className={style.contain}>
        <h3>About This Project</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a, esse
          velit nobis ipsam soluta, dolore id quae, quam maiores nihil! Impedit,
          excepturi error ad voluptas magnam hic sint non! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas, facilis ipsum repudiandae ex
          sed, consectetur porro voluptates amet iste repellat ad sint
          voluptatem voluptate deserunt impedit aspernatur iure incidunt nisi?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet
          atque natus inventore molestiae eos delectus provident, corporis eius
          aperiam est dolorum nisi iure tenetur quidem.
        </p>
        <br />
        <ul className={style.ul}>
          {stats.map((stat, index) => (
            <li className={style.lis} key={index}>
              <div className={style.contents}>
                <div className={style.heads}>
                  <h3>{stat.headLeft}</h3>
                  <h4 style={{ color: "aqua" }}>{stat.price}</h4>
                </div>
                <p style={{ color: "gray" }}>{stat.paragraph}</p>
                <div className={style.tail}>
                  <h2>
                    {stat.time}
                    <span>left</span>
                  </h2>
                  <p onClick={openReward} style={{ fontSize: '10px', fontWeight: 500 }}>{stat.button}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showReward && <BackDropTwo />}
      {showReward && <SetReward onCancel={closeReward} />}
    </>
  );
};

export default About;
