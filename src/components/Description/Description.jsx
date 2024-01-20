import React from "react";
import style from "./Description.module.css";

export const Description = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Sip Happens Café</h1>
      <p className={style.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
