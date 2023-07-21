import PropTypes from "prop-types";
import cnCommon from "../../../modules/classname";
import Comment from "../comment/comment";
import CommentLine from "../comment-line/comment-line";
import styles from "./comments.module.css";

const cn = cnCommon.bind(null, styles);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      description: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          date: PropTypes.instanceOf(Date).isRequired,
          description: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  replyComment: PropTypes.func.isRequired,
};

export default function Comments({ comments, replyComment }) {
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
          <Comment
            comment={comment}
            commentIndex={commentIndex}
            replyComment={replyComment}
          />
          {(commentIndex + 1 < comments.length ||
            comments[commentIndex].children.length !== 0) && <CommentLine />}
          {comment.children.map((childComment, childCommentIndex) => (
            <div key={childCommentIndex}>
              <Comment
                comment={childComment}
                isChild
                commentIndex={commentIndex}
                replyComment={replyComment}
              />
              {(childCommentIndex + 1 < comment.children.length ||
                commentIndex + 1 < comments.length) && <CommentLine />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
