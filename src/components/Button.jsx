import React from "react";
import styles from "./Button.module.css";

export default function Botton({ children, onClick, type }) {
  return (
    // Have to use a string literal to refernce to more than one styles .. Since not global style uses as
    // styles[type]
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
