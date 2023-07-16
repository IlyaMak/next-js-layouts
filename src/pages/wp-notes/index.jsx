/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "./page.module.css";
import cnCommon from "../../modules/classname";
import ShortArticle from "../../components/wp-notes/short-article/short-article";
import Head from "next/head";
import globalStyles from "../../app/style.global";
import DrawerMenu from "../../components/wp-notes/drawer-menu/drawer-menu";
import Header from "../../components/wp-notes/header/header";
import Footer from "../../components/wp-notes/footer/footer";

const cn = cnCommon.bind(null, styles);

const Notes = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const otherArticles = [
    {
      header: "Business Partners Work at Modern Office",
      tags: [],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. consectetur adipisce placerat Lorem ipsum dolor sit amet:",
      datetime: "Feb 8, 2021",
    },
    {
      header: "Light & Bright in Brooklyn",
      tags: [],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. consectetur adipisce placerat Lorem ipsum dolor sit amet:",
      datetime: "Feb 8, 2021",
    },
    {
      header: "Light & Bright in Brooklyn",
      tags: [],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. consectetur adipisce placerat Lorem ipsum dolor sit amet:",
      datetime: "Feb 8, 2021",
    },
    {
      header: "Business Partners Work at Modern Office",
      tags: ["office", "remote"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. consectetur adipisce placerat Lorem ipsum dolor sit amet:",
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
      <div className={cn("main-div")}>
        <DrawerMenu
          isMenuShown={isMenuShown}
          setIsMenuShown={setIsMenuShown}
          blogHref="wp-notes"
          contactsHref="wp-notes/contacts"
          isBlogActive={true}
        />
        <div className={styles.main}>
          <Header
            isMenuShown={isMenuShown}
            setIsMenuShown={setIsMenuShown}
            blogHref="wp-notes"
            contactsHref="wp-notes/contacts"
            isBlogActive={true}
          />
          <div className={styles["main-section"]}>
            <div className={styles["main-container"]}>
              <div className={styles.body}>
                <div className={styles["main-header"]}>Archive</div>
                <div className={cn("header-additional-info", "row")}>
                  PINNED
                </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    at arcu dui. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed at arcu dui. consectetur adipisce
                    placerat Lorem ipsum dolor sit amet:
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
                <div className={cn("button-all-posts-container")}>
                  <button className={cn("button-all-posts")}>All Posts</button>
                </div>
                <div className={cn("pagination")}>
                  <div className={cn("pagination__container")}>
                    <img
                      src="/assets-wp-notes/images/left-arrow.svg"
                      alt="Left icon"
                    />
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
              <div className={cn("footer-container")}>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
