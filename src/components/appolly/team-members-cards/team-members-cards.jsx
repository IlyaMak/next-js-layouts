import styles from "./team-members-cards.module.css";
import cnCommon from "../../../modules/classname";
import PropType from "prop-types";
import MemberCard from "../member-card/member-card";

const cn = cnCommon.bind(null, styles);

TeamMembersCards.propTypes = {
  membersCards: PropType.arrayOf(
    PropType.shape({
      image: PropType.string.isRequired,
      name: PropType.string.isRequired,
      job: PropType.string.isRequired,
      facebookIcon: PropType.string.isRequired,
    })
  ).isRequired,
};

export default function TeamMembersCards({ membersCards }) {
  return (
    <div className={cn("team-members-container")}>
      {membersCards.map((membersCard, membersCardIndex) => (
        <MemberCard key={membersCardIndex} memberCard={membersCard} />
      ))}
    </div>
  );
}
