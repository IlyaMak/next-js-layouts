import styles from "./advantages.module.css";
import cnCommon from "../../../modules/classname";
import PropType from "prop-types";
import AdvantageCard from "../advantage-card/advantage-card";

const cn = cnCommon.bind(null, styles);

Advantages.propTypes = {
  advantages: PropType.arrayOf(
    PropType.shape({
      header: PropType.string.isRequired,
      description: PropType.string.isRequired,
    })
  ).isRequired,
};

export default function Advantages({ advantages }) {
  return (
    <div className={cn("advantages-container")}>
      {advantages.map((advantage, advantageIndex) => (
        <AdvantageCard advantage={advantage} key={advantageIndex} />
      ))}
    </div>
  );
}
