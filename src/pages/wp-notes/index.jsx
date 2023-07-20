import Link from "next/link";
import styles from "./page.module.css";
import cnCommon from "../../modules/classname";
import ShortArticle from "../../components/wp-notes/short-article/short-article";
import { otherArticles } from "../../constants/wp-notes/other-articles";
import PageStructure from "../../components/wp-notes/page-structure/page-structure";

const cn = cnCommon.bind(null, styles);

const Notes = () => {
  function Body() {
    return (
      <div className={styles.body}>
        <div className={styles["main-header"]}>Archive</div>
        <div className={cn("header-additional-info", "row")}>PINNED</div>
        <div className={cn("article")}>
          <Link className={cn("link")} href="wp-notes/single-blog">
            <div className={cn("article__content-container")}>
              <div className={cn("article__header")}>
                Light & Bright in Brooklyn
              </div>
              <div
                className={cn("article__description", "article__content-text")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed at arcu dui. consectetur adipisce placerat Lorem ipsum
                dolor sit amet:
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
        <div className={cn("pagination")}>
          <div className={cn("pagination__container")}>
            <img src="/assets-wp-notes/images/left-arrow.svg" alt="Left icon" />
            <div className={cn("pagination__button-container")}>
              <button className={cn("pagination__button")}>1</button>
              <button className={cn("pagination__button")}>2</button>
              <button className={cn("pagination__button")}>3</button>
              <button className={cn("pagination__button")}>...</button>
            </div>
            <img
              src="/assets-wp-notes/images/right-arrow.svg"
              alt="Right icon"
            />
          </div>
        </div>
      </div>
    );
  }

  return <PageStructure headTitle="WP-Notes" body={<Body />} />;
};

export default Notes;
