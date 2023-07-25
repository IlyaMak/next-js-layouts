import styles from "./member-card.module.css";
import cnCommon from "../../../modules/classname";
import PropType from "prop-types";

const cn = cnCommon.bind(null, styles);

MemberCard.propTypes = {
  memberCard: PropType.shape({
    image: PropType.string.isRequired,
    name: PropType.string.isRequired,
    job: PropType.string.isRequired,
    facebookIcon: PropType.string.isRequired,
  }).isRequired,
};

export default function MemberCard({ memberCard }) {
  return (
    <div className={cn("member-card")}>
      <img
        className={cn("member-card__image")}
        src={memberCard.image}
        alt="Member image"
      />
      <div className={cn("member-card__name")}>{memberCard.name}</div>
      <div className={cn("member-card__job")}>{memberCard.job}</div>
      <div className={cn("member-card__description")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae. Est tellus vitae.
      </div>
      <div className={cn("member-card__socials")}>
        <img src={memberCard.facebookIcon} alt="Facebook logo" />
        <div className={cn("line")}></div>
        <img
          src="/assets-appolly/images/instagram-fill-black.svg"
          alt="Instagram logo"
        />
        <div className={cn("line")}></div>
        <img
          src="/assets-appolly/images/twitter-fill-black.svg"
          alt="Twitter logo"
        />
        <div className={cn("line")}></div>
        <img
          src="/assets-appolly/images/youtube-fill-black.svg"
          alt="Youtube logo"
        />
      </div>
    </div>
  );
}
