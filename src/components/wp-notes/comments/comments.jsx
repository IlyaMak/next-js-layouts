import cnCommon from "../../../modules/classname";
import Comment from "../comment/comment";
import styles from "./comments.module.css";

const cn = cnCommon.bind(null, styles);

export default function Comments({ comments }) {
  return (
    <div className={cn("comments")}>
      <div className={cn("comments__header")}>{comments.length} Comments</div>
      {comments.map((comment, commentIndex) => (
        <Comment key={commentIndex} comment={comment} />
      ))}
    </div>
  );
}
