/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import cnCommon from "../../../modules/classname";
import Head from "next/head";
import globalStyles from "../../../app/style.global";
import Comments from "../../../components/wp-notes/comments/comments";
import PostCommentForm from "../../../components/wp-notes/post-comment-form/post-comment-form";

const cn = cnCommon.bind(null, styles);

const comments = [
  {
    image: "/assets-wp-notes/images/Img 03.png",
    name: "Jewel",
    date: "Feb 8, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui.",
    children: [],
  },
  {
    image: "/assets-wp-notes/images/Img 05.png",
    name: "Jewel",
    date: "Feb 8, 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui.",
    children: [
      {
        image: "/assets-wp-notes/images/Img 03.png",
        name: "Jewel",
        date: "Feb 8, 2021",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet.",
      },
    ],
  },
];

const Notes = () => {
  return (
    <>
      <Head>
        <title>Single Blog</title>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={styles.main}>
        <button className={cn("drawer-button")}>
          <img src="/assets-wp-notes/images/Button 01.svg" alt="Arrow icon" />
        </button>
        <div className={styles.header}>
          <div className={styles["header__content"]}>
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
        </div>
        <div className={styles["main-section"]}>
          <div className={styles["main-container"]}>
            <div className={styles.body}>
              <div className={cn("header-text")}>
                Business Partners Work at Modern Office
              </div>
              <div className={cn("article-metadata")}>
                Feb 8, 2021 / By Vitathemes / 3 Comments
              </div>
              <div className={cn("article-description")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                arcu dui. Lorem ipsum dolor sit amet, consectetur adipisce
                placerat mauris nisl. Proin vitae urna eu{" "}
                <span className={cn("article-description--special-text")}>
                  sem pellentesque
                </span>{" "}
                laoreet.
              </div>
              <div className={cn("main-image-container")}>
                <img
                  className={cn("main-image")}
                  src="/assets-wp-notes/images/Img 01.png"
                  alt="Orange image"
                />
              </div>
              <div className={cn("header-text", "header-text--secondary")}>
                Light & Bright in Brooklyn 🌤
              </div>
              <div
                className={cn(
                  "article-description",
                  "article-description--secondary"
                )}>
                Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aenean placerat mauris nisl:
              </div>
              <ul className={cn("unordered-list")}>
                <li className={cn("unordered-list__item")}>
                  Lorem ipsum dolor sit amet
                </li>
                <li className={cn("unordered-list__item")}>
                  consectetur adipiscing elit. Sed at arcu dui
                </li>
                <li className={cn("unordered-list__item")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li className={cn("unordered-list__item")}>Sed at arcu dui</li>
              </ul>
              <div
                className={cn(
                  "article-description",
                  "article-description--secondary"
                )}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                arcu dui. Lorem ipsum dolor sit amet:
              </div>
              <div className={cn("quote")}>
                <div className={cn("quote__line")}></div>
                <div className={cn("quote__content")}>
                  <div className={cn("quote__text")}>
                    “ Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Sed at arcu dui.
                    Aenean placerat. “
                  </div>
                  <div className={cn("quote__author")}>Walter Dave</div>
                </div>
              </div>
              <div className={cn("header-text", "header-text--secondary")}>
                Privacy & Sync{" "}
              </div>
              <ol className={cn("ordered-list")}>
                <li className={cn("ordered-list__item")}>
                  Lorem ipsum dolor sit amet
                </li>
                <li className={cn("ordered-list__item")}>
                  consectetur adipiscing elit. Sed at arcu dui
                </li>
                <li className={cn("ordered-list__item")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
              </ol>
              <div className={cn("tags-container")}>
                Tags:{" "}
                <span className={cn("tags")}>Pivacy, Business, Office</span>
              </div>
              <Comments comments={comments} />
              <PostCommentForm />
            </div>
            <div className={styles.footer}>
              <img src="/assets-wp-notes/images/Logo.png" alt="Logo icon" />
              <div className={styles["footer__main"]}>
                <div className={styles["footer__privacy"]}>
                  Holo theme by{" "}
                  <span className={styles["footer__author-link"]}>
                    VitaThemes
                  </span>{" "}
                  |{" "}
                  <span className={styles["footer__author-link"]}>Privacy</span>
                </div>
                <div className={styles["footer__social"]}>
                  <div className={styles["footer__social-item"]}>Instagram</div>
                  <div className={styles["footer__social-item"]}>Twitter</div>
                  <div className={styles["footer__social-item"]}>Facebook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
