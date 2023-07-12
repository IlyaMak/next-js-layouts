/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import cnCommon from "../../modules/classname";
import ShortArticle from "../../components/wp-notes/short-article/short-article";
import Head from "next/head";
import globalStyles from "../../app/style.global";

const cn = cnCommon.bind(null, styles);

const Notes = () => {
  const otherArticles = [
    {
      header: "Business Partners Work at Modern Office",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. ",
      datetime: "Feb 8, 2021",
    },
    {
      header: "Light & Bright in Brooklyn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. ",
      datetime: "Feb 8, 2021",
    },
    {
      header: "Light & Bright in Brooklyn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. ",
      datetime: "Feb 8, 2021",
    },
  ];

  return (
    <>
      <Head>
        <title>WP-Notes</title>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={styles.main}>
        <div className={styles.header}>
          <img
            className={styles["menu-icon"]}
            src="/assets-wp-notes/images/Menu.svg"
            alt="Menu icon"
          />
          <img src="/assets-wp-notes/images/Logo.png" alt="Logo icon" />
          <img
            className={styles["search-icon-mobile"]}
            src="/assets-wp-notes/images/search-mobile.svg"
            alt="Search icon"
          />
          <div className={styles["search-container"]}>
            <input
              className={styles["input-search"]}
              type="text"
              placeholder="Search"
            />
            <img
              className={styles["search-icon"]}
              src="/assets-wp-notes/images/search.svg"
              alt="Search icon"
            />
          </div>
          <div className={styles.menu}>
            <div className={styles["menu__item"]}>Blog</div>
            <div className={styles["menu__item"]}>Portfolio</div>
            <div className={styles["menu__item"]}>Contact</div>
          </div>
        </div>
        <div className={styles["main-section"]}>
          <div className={styles.body}>
            <div className={cn("header-additional-info", "row")}>PINNED</div>
            <div className={cn("article", "article--pinned")}>
              <div className={cn("article__header", "row")}>
                Light & Bright in Brooklyn
              </div>
              <div
                className={cn(
                  "article__description",
                  "article__content-text",
                  "row"
                )}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                arcu dui.
              </div>
              <div
                className={cn(
                  "article__datetime",
                  "article__content-text",
                  "row"
                )}>
                Feb 8, 2021
              </div>
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
              <ShortArticle
                key={shortArticleIndex}
                shortArticle={shortArticle}
              />
            ))}
            <button className={cn("button-all-posts", "row")}>All Posts</button>
          </div>
          <div className={styles.footer}>
            <img src="/assets-wp-notes/images/Logo.png" alt="Logo icon" />
            <div className={styles["footer__main"]}></div>
            <div className={styles["footer__privacy"]}>
              Holo theme by{" "}
              <span className={styles["footer__author-link"]}>VitaThemes</span>{" "}
              | <span className={styles["footer__author-link"]}>Privacy</span>
            </div>
            <div className={styles["footer__social"]}>
              <div className={styles["footer__social-item"]}>Instagram</div>
              <div className={styles["footer__social-item"]}>Twitter</div>
              <div className={styles["footer__social-item"]}>Facebook</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
