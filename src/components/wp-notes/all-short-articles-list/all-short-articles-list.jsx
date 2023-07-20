import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./all-short-articles-list.module.css";
import cnCommon from "../../../modules/classname";
import ShortArticle from "../short-article/short-article";

const cn = cnCommon.bind(null, styles);

AllShortArticlesList.propTypes = {
  otherArticles: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      datetime: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function AllShortArticlesList({ otherArticles }) {
  return (
    <div className={cn("all-articles-section")}>
      <div className={cn("header-additional-info", "row")}>PINNED</div>
      <div className={cn("article")}>
        <Link className={cn("link")} href="/wp-notes/single-blog">
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
        </Link>
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
        <div
          key={shortArticleIndex}
          className={cn("other-articles-list-section")}>
          <ShortArticle shortArticle={shortArticle} />
        </div>
      ))}
      <div className={cn("button-all-posts-container")}>
        <button className={cn("button-all-posts")}>All Posts</button>
      </div>
    </div>
  );
}
