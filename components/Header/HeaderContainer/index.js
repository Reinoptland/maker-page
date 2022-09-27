import React from "react";
import styles from "./HeaderContainer.module.css";

export default function HeaderContainer(props) {
  let className = `${styles.header} ${props.className}`;

  return (
    <header {...props} className={className}>
      {props.children}
    </header>
  );
}
