import styles from "./short-article.module.css";
import cnCommon from "../../../modules/classname";

const cn = cnCommon.bind(null, styles);

export default function ShortArticle({ shortArticle }) {
  return (
    <div className={cn("article", "row")}>
      <a className={cn("link")} href="../../wp-notes/single-blog">
        <div className={cn("article__content-container")}>
          <div className={cn("article__header")}>{shortArticle["header"]}</div>
          <div className={cn("article__content-text", "article__tags")}>
            {shortArticle["tags"].join(", ")}
          </div>
          <div className={cn("article__description", "article__content-text")}>
            {shortArticle["description"]}
          </div>
          <div className={cn("article__datetime", "article__content-text")}>
            {shortArticle["datetime"]}
          </div>
        </div>
      </a>
    </div>
  );
}
