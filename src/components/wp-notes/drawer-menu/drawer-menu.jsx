import Link from "next/link";
import PropTypes from "prop-types";
import cnCommon from "../../../modules/classname";
import styles from "./drawer-menu.module.css";
import { usePathname } from "next/navigation";

const cn = cnCommon.bind(null, styles);

DrawerMenu.propTypes = {
  isMenuShown: PropTypes.bool.isRequired,
  setIsMenuShown: PropTypes.func.isRequired,
};

export default function DrawerMenu({ isMenuShown, setIsMenuShown }) {
  const pathname = usePathname();

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
            className={cn(
              "menu-item",
              pathname === "/wp-notes" || pathname === "/wp-notes/single-blog"
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
    </div>
  );
}
