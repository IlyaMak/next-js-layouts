import styles from "./short-article.module.css";
import cnCommon from "../../modules/classname";

const cn = cnCommon.bind(null, styles);

export default function ShortArticle({ shortArticle }) {
  return (
    <div className={styles.article}>
      <div className={cn("article__header", "row")}>
        {shortArticle["header"]}
      </div>
      <div
        className={cn("article__description", "article__content-text", "row")}>
        {shortArticle["description"]}
      </div>
      <div className={cn("article__datetime", "article__content-text", "row")}>
        {shortArticle["datetime"]}
      </div>
    </div>
  );
}
