/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import styles from "./page.module.css";
import cnCommon from "../../../modules/classname";
import Head from "next/head";
import globalStyles from "../../../app/style.global";
import DrawerMenu from "../../../components/wp-notes/drawer-menu/drawer-menu";

const cn = cnCommon.bind(null, styles);

const Notes = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <Head>
        <title>Single Blog</title>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={cn("main-div")}>
        {
          <DrawerMenu
            isMenuShown={isMenuShown}
            setIsMenuShown={setIsMenuShown}
            blogHref="../wp-notes"
            contactsHref="contacts"
          />
        }
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles["header__content"]}>
              <button
                className={styles["menu-button"]}
                onClick={() => setIsMenuShown(!isMenuShown)}>
                <img
                  className={styles["menu-icon"]}
                  src="/assets-wp-notes/images/Menu.svg"
                  alt="Menu icon"
                />
              </button>
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
                <a className={styles["menu-item"]} href="../wp-notes">
                  Blog
                </a>
                <a className={styles["menu-item"]} href="#">
                  Portfolio
                </a>
                <a className={styles["menu-item"]} href="contacts">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className={styles["main-section"]}>
            <div className={styles["main-container"]}>
              <div className={styles.body}>
                <div className={cn("form")}>
                  <div className={cn("header-text")}>Contact Us</div>
                  <div className={cn("label")}>Name*</div>
                  <input className={cn("input")} type="text" />
                  <div className={cn("label")}>Email Address*</div>
                  <input className={cn("input")} type="text" />
                  <div className={cn("label")}>Your message*</div>
                  <textarea
                    className={cn("input", "input--comment")}
                    type="text"
                  />
                  <div className={cn("form__button-container")}>
                    <button className={cn("button")}>Send</button>
                  </div>
                </div>
                <div className={cn("contacts-container")}>
                  <div className={cn("contacts")}>
                    <div
                      className={cn(
                        "contacts__text",
                        "contacts__text--header"
                      )}>
                      Project Inquiries
                    </div>
                    <div
                      className={cn(
                        "contacts__text",
                        "contacts__text--content"
                      )}>
                      hello@ cvatina.com
                    </div>
                    <div
                      className={cn(
                        "contacts__text",
                        "contacts__text--content"
                      )}>
                      754.765.8373
                    </div>
                  </div>
                  <div className={cn("contacts")}>
                    <div
                      className={cn(
                        "contacts__text",
                        "contacts__text--header"
                      )}>
                      Office
                    </div>
                    <div
                      className={cn(
                        "contacts__text",
                        "contacts__text--content"
                      )}>
                      7653 sea Ave, Suite A
                    </div>
                    <div
                      className={cn(
                        "contacts__text",
                        "contacts__text--content"
                      )}>
                      North Charleston, Sc 87350
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <img src="/assets-wp-notes/images/Logo.png" alt="Logo icon" />
                <div className={styles["footer__main"]}>
                  <div className={styles["footer__privacy"]}>
                    Holo theme by{" "}
                    <a className={styles["footer__author-link"]} href="#">
                      VitaThemes
                    </a>{" "}
                    |{" "}
                    <a className={styles["footer__author-link"]} href="#">
                      Privacy
                    </a>
                  </div>
                  <div className={styles["footer__social"]}>
                    <a className={styles["footer__social-item"]} href="#">
                      Instagram
                    </a>
                    <a className={styles["footer__social-item"]} href="#">
                      Twitter
                    </a>
                    <a className={styles["footer__social-item"]} href="#">
                      Facebook
                    </a>
                  </div>
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
