import PropTypes from "prop-types";
import cnCommon from "../../../modules/classname";
import styles from "./post-comment-form.module.css";

const cn = cnCommon.bind(null, styles);

const handleChange = (event, setState) => {
  setState(event.target.value);
};

PostCommentForm.propTypes = {
  postComment: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default function PostCommentForm({
  postComment,
  setName,
  setDescription,
}) {
  return (
    <form className={cn("form")} onSubmit={postComment}>
      <div className={cn("form__header")}>Post Comment</div>
      <div className={cn("required-inputs-container")}>
        <div
          className={cn(
            "form__input-container",
            "form__input-container--required"
          )}>
          <div className={cn("label")}>Name*</div>
          <input
            className={cn("input")}
            type="text"
            required
            onChange={(e) => handleChange(e, setName)}
          />
        </div>
        <div
          className={cn(
            "form__input-container",
            "form__input-container--required"
          )}>
          <div className={cn("label")}>Email*</div>
          <input className={cn("input")} required type="text" />
        </div>
      </div>
      <div className={cn("form__input-container")}>
        <div className={cn("label")}>Website</div>
        <input className={cn("input")} type="text" />
      </div>
      <div className={cn("form__input-container")}>
        <div className={cn("label")}>Your Comment</div>
        <textarea
          className={cn("input", "input--comment")}
          type="text"
          required
          onChange={(e) => handleChange(e, setDescription)}
        />
      </div>
      <div className={cn("form__button-container")}>
        <button className={cn("button")}>Post Comment</button>
      </div>
    </form>
  );
}
