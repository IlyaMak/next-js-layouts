import Link from "next/link";
import PropTypes from "prop-types";
import cnCommon from "../../../modules/classname";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

const cn = cnCommon.bind(null, styles);

Header.propTypes = {
  isMenuShown: PropTypes.bool.isRequired,
  setIsMenuShown: PropTypes.func.isRequired,
  isSearchShown: PropTypes.bool.isRequired,
  setIsSearchShown: PropTypes.func.isRequired,
};

export default function Header({
  isMenuShown,
  setIsMenuShown,
  isSearchShown,
  setIsSearchShown,
}) {
  const pathname = usePathname();

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
          <Link
            className={cn(
              "menu-item",
              pathname === "/wp-notes" || pathname === "/wp-notes/1"
                ? "menu-item--active"
                : ""
            )}
            href="/wp-notes">
            Blog
          </Link>
          <Link className={cn("menu-item")} href="#">
            Portfolio
          </Link>
          <Link
            className={cn(
              "menu-item",
              pathname === "/wp-notes/contacts" ? "menu-item--active" : ""
            )}
            href="/wp-notes/contacts">
            Contact
          </Link>
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
