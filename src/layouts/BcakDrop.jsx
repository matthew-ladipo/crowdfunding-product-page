import React from "react";
import style from  './BackDrop.module.css'

const BcakDrop = (props) => {
  return <div className={style.backdrop} onClick={props.onCancel}>  </div>;
};

export default BcakDrop;
