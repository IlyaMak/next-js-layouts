import cnCommon from "../../../modules/classname";
import Comment from "../comment/comment";
import CommentLine from "../comment-line/comment-line";
import styles from "./comments.module.css";

const cn = cnCommon.bind(null, styles);

export default function Comments({ comments }) {
  const commentsCount =
    comments.length +
    comments.reduce(
      (accumulator, comment) => accumulator + comment.children.length,
      0
    );

  return (
    <div className={cn("comments")}>
      <div className={cn("comments__header")}>{commentsCount} Comments</div>
      {comments.map((comment, commentIndex) => (
        <div key={commentIndex}>
          <Comment comment={comment} />
          {commentIndex + 1 < comments.length && <CommentLine />}
          {comment.children.map((childComment, childCommentIndex) => (
            <div key={childCommentIndex}>
              {childCommentIndex < comment.children.length && <CommentLine />}
              <Comment comment={childComment} isChild />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
