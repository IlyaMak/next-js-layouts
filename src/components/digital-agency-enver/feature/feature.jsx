import PropTypes from "prop-types";
import styles from "./feature.module.css";

Feature.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Feature({ feature }) {
  return (
    <div className={styles["features-container"]}>
      <div className={styles["features-content-container"]}>
        <img
          className={styles["features-content-container__image"]}
          src={feature.icon}
          alt={feature.alt}
        />
        <div className={styles["features-content-container__header"]}>
          {feature.header}
        </div>
        <div className={styles["features-content-container__description"]}>
          {feature.description}
        </div>
      </div>
    </div>
  );
}
