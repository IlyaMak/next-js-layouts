/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import styles from "./page.module.css";
import cnCommon from "../../../modules/classname";
import Head from "next/head";
import globalStyles from "../../../app/style.global";
import DrawerMenu from "../../../components/wp-notes/drawer-menu/drawer-menu";
import Header from "../../../components/wp-notes/header/header";
import Footer from "../../../components/wp-notes/footer/footer";

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
        <DrawerMenu
          isMenuShown={isMenuShown}
          setIsMenuShown={setIsMenuShown}
          blogHref="../wp-notes"
          contactsHref="contacts"
        />
        <div className={styles.main}>
          <Header
            isMenuShown={isMenuShown}
            setIsMenuShown={setIsMenuShown}
            blogHref="../wp-notes"
            contactsHref="contacts"
          />
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
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
