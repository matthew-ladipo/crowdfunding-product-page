import React from "react";
import styles from "./stats.module.css";

const Stats = () => {
  const stats = [
    {
      amount: "$89,914",
      text: "of $100,00 backed",
    },
    {
      amount: "5,007",
      text: "total backers",
    },
    {
      amount: "56",
      text: "days left",
    },
  ];
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {stats.map((stat, index) => (
          <li className={styles.listItem}>
            <h3>{stat.amount}</h3>
            <p>{stat.text}</p>
          </li>
        ))}
      </ul>
      <p className={styles.progress}></p>
    </section>
  );
};

export default Stats;
