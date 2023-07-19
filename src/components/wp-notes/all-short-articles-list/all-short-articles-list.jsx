import styles from "./all-short-articles-list.module.css";
import cnCommon from "../../../modules/classname";
import ShortArticle from "../short-article/short-article";

const cn = cnCommon.bind(null, styles);

export default function AllShortArticlesList({ otherArticles }) {
  return (
    <div className={cn("all-articles-section")}>
      <div className={cn("header-additional-info", "row")}>PINNED</div>
      <div className={cn("article")}>
        <a className={cn("link")} href="../wp-notes/single-blog">
          <div className={cn("article__content-container")}>
            <div className={cn("article__header")}>
              Light & Bright in Brooklyn
            </div>
            <div
              className={cn("article__description", "article__content-text")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed at arcu dui. consectetur adipisce placerat Lorem ipsum dolor
              sit amet:
            </div>
            <div className={cn("article__datetime", "article__content-text")}>
              Feb 8, 2021
            </div>
          </div>
        </a>
      </div>
      <div className={styles["other-header-section"]}>
        <div className={styles["horizontal-line"]}></div>
        <div
          className={cn(
            "header-additional-info",
            "header-additional-info--other",
            "row"
          )}>
          OTHER
        </div>
        <div className={styles["horizontal-line"]}></div>
      </div>
      {otherArticles.map((shortArticle, shortArticleIndex) => (
        <ShortArticle key={shortArticleIndex} shortArticle={shortArticle} />
      ))}
      <div className={cn("button-all-posts-container")}>
        <button className={cn("button-all-posts")}>All Posts</button>
      </div>
    </div>
  );
}
