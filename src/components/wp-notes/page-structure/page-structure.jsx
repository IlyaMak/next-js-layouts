import PropTypes from "prop-types";
import { useState } from "react";
import cnCommon from "../../../modules/classname";
import styles from "./page-structure.module.css";
import Head from "next/head";
import DrawerMenu from "../drawer-menu/drawer-menu";
import Header from "../header/header";
import AllShortArticlesList from "../all-short-articles-list/all-short-articles-list";
import Footer from "../footer/footer";
import globalStyles from "../../../app/style.global";
import { otherArticles } from "../../../constants/wp-notes/other-articles";

const cn = cnCommon.bind(null, styles);

PageStructure.propTypes = {
  headTitle: PropTypes.string.isRequired,
  isBlogActive: PropTypes.bool,
  isContactActive: PropTypes.bool,
  blogHref: PropTypes.string.isRequired,
  contactsHref: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
};

export default function PageStructure({
  headTitle,
  isBlogActive,
  isContactActive,
  blogHref,
  contactsHref,
  body,
}) {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isSearchShown, setIsSearchShown] = useState(false);

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={cn("main-div")}>
        <DrawerMenu
          isMenuShown={isMenuShown}
          setIsMenuShown={setIsMenuShown}
          blogHref={blogHref}
          contactsHref={contactsHref}
          isBlogActive={true}
        />
        <div className={cn("main")}>
          <button
            className={cn(
              "drawer-button",
              isSearchShown ? "drawer-button--show-articles" : ""
            )}
            onClick={() => setIsSearchShown(!isSearchShown)}>
            <img src="/assets-wp-notes/images/Button 01.svg" alt="Arrow icon" />
          </button>
          <Header
            isMenuShown={isMenuShown}
            setIsMenuShown={setIsMenuShown}
            blogHref={blogHref}
            contactsHref={contactsHref}
            isBlogActive={isBlogActive}
            isContactActive={isContactActive}
            isSearchShown={isSearchShown}
            setIsSearchShown={setIsSearchShown}
          />
          <div className={cn("main-section")}>
            <div
              className={cn(
                "articles-list-section",
                isSearchShown ? "articles-list-section--shown" : ""
              )}>
              <AllShortArticlesList otherArticles={otherArticles} />
            </div>
            <div
              className={cn(
                "main-container",
                isSearchShown ? "main-container--show-articles" : ""
              )}>
              {body}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
