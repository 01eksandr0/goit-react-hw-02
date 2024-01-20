import React from "react";
import style from "./Options.module.css";

export default function Options({
  addGood,
  addNeutral,
  addBad,
  resetAll,
  total,
}) {
  return (
    <div className={style.container}>
      <button className={style.button} onClick={addGood} type="button">
        Good
      </button>
      <button className={style.button} onClick={addNeutral} type="button">
        Neutral
      </button>
      <button className={style.button} onClick={addBad} type="button">
        Bad
      </button>
      {total !== 0 && (
        <button className={style.button} onClick={resetAll} type="button">
          Reset
        </button>
      )}
    </div>
  );
}
