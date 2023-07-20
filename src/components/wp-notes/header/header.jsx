import PropTypes from "prop-types";
import cnCommon from "../../../modules/classname";
import styles from "./header.module.css";

const cn = cnCommon.bind(null, styles);

Header.propTypes = {
  isMenuShown: PropTypes.bool.isRequired,
  setIsMenuShown: PropTypes.func.isRequired,
  blogHref: PropTypes.string.isRequired,
  contactsHref: PropTypes.string.isRequired,
  isBlogActive: PropTypes.bool,
  isPortfolioActive: PropTypes.bool,
  isContactActive: PropTypes.bool,
  isSearchShown: PropTypes.bool.isRequired,
  setIsSearchShown: PropTypes.func.isRequired,
};

export default function Header({
  isMenuShown,
  setIsMenuShown,
  blogHref,
  contactsHref,
  isBlogActive,
  isPortfolioActive,
  isContactActive,
  isSearchShown,
  setIsSearchShown,
}) {
  return (
    <div className={cn("header", isSearchShown ? "header--mobile" : "")}>
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
        <img
          className={cn("main-row-margin")}
          src="/assets-wp-notes/images/Logo.png"
          alt="Logo icon"
        />
        <button
          className={cn("button-search")}
          onClick={() => setIsSearchShown(!isSearchShown)}>
          {isSearchShown ? (
            <img
              className={cn("close-icon-mobile")}
              src="/assets-wp-notes/images/close.svg"
              alt="Search icon"
            />
          ) : (
            <img
              className={cn("search-icon-mobile")}
              src="/assets-wp-notes/images/search-mobile.svg"
              alt="Search icon"
            />
          )}
        </button>
        <div className={cn("search-container", "main-row-margin")}>
          <input
            className={cn("input-search")}
            type="text"
            placeholder="Search"
            onFocus={() => setIsSearchShown(true)}
          />
          <img
            className={cn("search-icon")}
            src="/assets-wp-notes/images/search.svg"
            alt="Search icon"
          />
        </div>
        <div className={cn("menu")}>
          <a
            className={cn("menu-item", isBlogActive ? "menu-item--active" : "")}
            href={blogHref}>
            Blog
          </a>
          <a
            className={cn(
              "menu-item",
              isPortfolioActive ? "menu-item--active" : ""
            )}
            href="#">
            Portfolio
          </a>
          <a
            className={cn(
              "menu-item",
              isContactActive ? "menu-item--active" : ""
            )}
            href={contactsHref}>
            Contact
          </a>
        </div>
      </div>
      {isSearchShown && (
        <div className={cn("search-container", "search-container--mobile")}>
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
      )}
    </div>
  );
}
