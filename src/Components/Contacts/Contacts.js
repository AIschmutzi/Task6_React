import React from "react";
import styles from "./Contacts.module.css";
import { getImageUrl } from "../../utils";
export const Contacts= () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:Arabrow.V@gmail.com">Arabrow.V@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com">linkedin.com/Aradhya Varma</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com">github.com/Aradhya Varma</a>
        </li>
      </ul>
    </footer>
  );
};