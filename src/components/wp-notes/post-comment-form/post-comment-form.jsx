import cnCommon from "../../../modules/classname";
import styles from "./post-comment-form.module.css";

const cn = cnCommon.bind(null, styles);

export default function PostCommentForm() {
  return (
    <div className={cn("form")}>
      <div className={cn("form__header")}>Post Comment</div>
      <div className={cn("required-inputs-container")}>
        <div className={cn("form__input-container")}>
          <div className={cn("label")}>Name*</div>
          <input className={cn("input", "input--required")} type="text" />
        </div>
        <div className={cn("form__input-container")}>
          <div className={cn("label")}>Email*</div>
          <input className={cn("input", "input--required")} type="text" />
        </div>
      </div>
      <div className={cn("form__input-container")}>
        <div className={cn("label")}>Website</div>
        <input className={cn("input")} type="text" />
      </div>
      <div className={cn("form__input-container")}>
        <div className={cn("label")}>Your Comment</div>
        <textarea className={cn("input", "input--comment")} type="text" />
      </div>
      <div className={cn("form__button-container")}>
        <button className={cn("button")}>Post Comment</button>
      </div>
    </div>
  );
}
