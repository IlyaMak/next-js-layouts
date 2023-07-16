/* eslint-disable @next/next/no-img-element */
import cnCommon from "../../../modules/classname";
import styles from "./drawer-menu.module.css";

const cn = cnCommon.bind(null, styles);

export default function DrawerMenu({
  isMenuShown,
  setIsMenuShown,
  blogHref,
  contactsHref,
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
