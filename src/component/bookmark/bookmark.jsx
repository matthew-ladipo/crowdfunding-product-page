import React, { useState } from "react";
import Button from "../button/button";
import styles from "./bookmark.module.css";
import svg from "../../image/logo-mastercraft.svg";
import BcakDrop from "../../layouts/BcakDrop";
import BackProject from "../../layouts/PopUps/backproject/BackProject";
import { BsBookmarkFill } from "react-icons/bs";

const Bookmark = ({ svgBook }) => {
  const [showPopup, setShowpopup] = useState(false);

  function show() {
    setShowpopup(true);
  }
  function close() {
    setShowpopup(false);
  }

  const [Book, setBookmark] = useState("Bookmark");

  return (
    <>
      <div className={styles.bookmark}>
        <section className={styles.section}>
          <div href="#" className={styles.master}>
            <img src={svg} alt="svgs" />
          </div>
          <h1 className={styles.common}>Master Bamboo Monitor Riser</h1>
          <p className={styles.common2}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            commodi
          </p>
          <aside className={styles.aside}>
            <div onClick={show}>
              <Button text={"Back this project"} bg={"primary"} />
            </div>
            <div
              onClick={() => {
                setBookmark("Bookmarked");
              }}
            >
              <Button text={Book} bg={"secondary"} svgBook={"true"} />
              <div
              // style={{
              //   color: Book === "Bookmarked" ? "green" : Book === "Bookmark",
              //   color: Book === "Bookmarked" ? "white" : Book === "Bookmark",
              // }}
              ></div>
            </div>
          </aside>
        </section>
      </div>
      {showPopup && <BcakDrop onCancel={close} />}
      {showPopup && <BackProject onChange={close} />}
    </>
  );
};

export default Bookmark;
