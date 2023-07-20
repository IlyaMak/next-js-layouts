/* eslint-disable @next/next/no-img-element */
import PropTypes from "prop-types";
import cnCommon from "../../../modules/classname";
import styles from "./comment.module.css";

const cn = cnCommon.bind(null, styles);

Comment.propTypes = {
  comment: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  isChild: PropTypes.bool,
};

export default function Comment({ comment, isChild }) {
  return (
    <div className={cn("comment", isChild ? "comment--child" : "")}>
      <img
        className={cn("comment__image")}
        src={comment.image}
        alt="Comment image"
      />
      <div className={cn("comment__text-container")}>
        <div className={cn("comment__name-container")}>
          <div className={cn("comment__name")}>{comment.name}</div>
          <div className={cn("comment__date")}>/ {comment.date}</div>
        </div>
        <div className={cn("comment__description")}>{comment.description}</div>
        <div className={cn("comment__reply-container")}>
          <a className={cn("comment__reply")} href="#">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
}
