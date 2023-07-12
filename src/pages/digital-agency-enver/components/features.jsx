/* eslint-disable @next/next/no-img-element */
import styles from "./component.module.css";

export default function Feature({ feature }) {
  return (
    <div className={styles["features-container"]}>
      <div className={styles["features-content-container"]}>
        <img
          className={styles["features-content-container__image"]}
          src={feature["icon"]}
          alt={feature["alt"]}
        />
        <div className={styles["features-content-container__header"]}>
          {feature["header"]}
        </div>
        <div className={styles["features-content-container__description"]}>
          {feature["description"]}
        </div>
      </div>
    </div>
  );
}
