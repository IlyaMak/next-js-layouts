import styles from "./advantage-card.module.css";
import cnCommon from "../../../modules/classname";
import PropType from "prop-types";

const cn = cnCommon.bind(null, styles);

AdvantageCard.propTypes = {
  advantage: PropType.shape({
    header: PropType.string.isRequired,
    description: PropType.string.isRequired,
  }).isRequired,
};

export default function AdvantageCard({ advantage }) {
  return (
    <div className={cn("advantage-card")}>
      <img
        src="/assets-appolly/images/checkbox-circle-fill.svg"
        alt="Checkmark icon"
      />
      <div className={cn("advantage")}>
        <div className={cn("advantage-header")}>{advantage.header}</div>
        <div className={cn("advantage-text")}>{advantage.description}</div>
      </div>
    </div>
  );
}
