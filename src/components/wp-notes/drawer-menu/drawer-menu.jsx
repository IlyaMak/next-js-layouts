import Link from "next/link";
import PropTypes from "prop-types";
import cnCommon from "../../../modules/classname";
import styles from "./drawer-menu.module.css";

const cn = cnCommon.bind(null, styles);

DrawerMenu.propTypes = {
  isMenuShown: PropTypes.bool.isRequired,
  setIsMenuShown: PropTypes.func.isRequired,
  isBlogActive: PropTypes.bool,
  isPortfolioActive: PropTypes.bool,
  isContactActive: PropTypes.bool,
};

export default function DrawerMenu({
  isMenuShown,
  setIsMenuShown,
  isBlogActive,
  isPortfolioActive,
  isContactActive,
}) {
  return (
    <div className={cn("drawer-menu")}>
      <div
        className={cn(
          "drawer-menu__content",
          isMenuShown ? "" : "drawer-menu__content--close"
        )}>
        <button
          className={cn("menu-button")}
          onClick={() => setIsMenuShown(!isMenuShown)}>
          <img
            className={cn("close-logo")}
            src="/assets-wp-notes/images/close.svg"
            alt="Close icon"
          />
        </button>
        <div className={cn("menu-responsive")}>
          <Link
            className={cn("menu-item", isBlogActive ? "menu-item--active" : "")}
            href="/wp-notes">
            Blog
          </Link>
          <Link
            className={cn(
              "menu-item",
              isPortfolioActive ? "menu-item--active" : ""
            )}
            href="#">
            Portfolio
          </Link>
          <Link
            className={cn(
              "menu-item",
              isContactActive ? "menu-item--active" : ""
            )}
            href="/wp-notes/contacts">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
