/* eslint-disable @next/next/no-img-element */
import cnCommon from "../../../modules/classname";
import styles from "./comment.module.css";

const cn = cnCommon.bind(null, styles);

export default function Comment({ comment }) {
  return (
    <div className={cn("comment", comment["isChild"] ? "comment--child" : "")}>
      <img
        className={cn("comment__image")}
        src={comment["image"]}
        alt="Comment image"
      />
      <div className={cn("comment__text-container")}>
        <div className={cn("comment__name-container")}>
          <div className={cn("comment__name")}>{comment["name"]}</div>
          <div className={cn("comment__date")}>/ {comment["date"]}</div>
        </div>
        <div className={cn("comment__description")}>
          {comment["description"]}
        </div>
        <div className={cn("comment__reply")}>Reply</div>
        <div className={cn("comment__line-container")}>
          <div className={cn(comment["isChild"] ? "" : "comment__line")}></div>
        </div>
      </div>
    </div>
  );
}
