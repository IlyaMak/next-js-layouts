/* eslint-disable @next/next/no-img-element */
import cnCommon from "../../../modules/classname";
import styles from "./header.module.css";

const cn = cnCommon.bind(null, styles);

export default function Header({
  isMenuShown,
  setIsMenuShown,
  blogHref,
  contactsHref,
}) {
  return (
    <div className={cn("header")}>
      <div className={cn("header__content")}>
        <button
          className={cn("menu-button")}
          onClick={() => setIsMenuShown(!isMenuShown)}>
          <img
            className={cn("menu-icon")}
            src="/assets-wp-notes/images/Menu.svg"
            alt="Menu icon"
          />
        </button>
        <img src="/assets-wp-notes/images/Logo.png" alt="Logo icon" />
        <img
          className={cn("search-icon-mobile")}
          src="/assets-wp-notes/images/search-mobile.svg"
          alt="Search icon"
        />
        <div className={cn("search-container")}>
          <input
            className={cn("input-search")}
            type="text"
            placeholder="Search"
          />
          <img
            className={cn("search-icon")}
            src="/assets-wp-notes/images/search.svg"
            alt="Search icon"
          />
        </div>
        <div className={cn("menu")}>
          <a className={cn("menu-item")} href={blogHref}>
            Blog
          </a>
          <a className={cn("menu-item")} href="#">
            Portfolio
          </a>
          <a className={cn("menu-item")} href={contactsHref}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
