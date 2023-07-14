import cnCommon from "../../../modules/classname";
import styles from "./comment-line.module.css";

const cn = cnCommon.bind(null, styles);

export default function CommentLine() {
  return (
    <div className={cn("line-container")}>
      <div className={cn("line")}></div>
    </div>
  );
}
