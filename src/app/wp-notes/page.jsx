import styles from "./page.module.css";

export const metadata = {
  title: "WP Notes",
};

const Notes = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}></div>
      <div className={styles["main-section"]}>
        <div className={styles.body}></div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default Notes;
