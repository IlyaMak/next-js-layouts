import PropTypes from "prop-types";
import cnCommon from "../../../modules/classname";
import styles from "./drawer-menu.module.css";

const cn = cnCommon.bind(null, styles);

DrawerMenu.propTypes = {
  isMenuShown: PropTypes.bool.isRequired,
  setIsMenuShown: PropTypes.func.isRequired,
};

export default function DrawerMenu({ isMenuShown, setIsMenuShown }) {
  return (
    <div
      className={cn("drawer-menu", isMenuShown ? "drawer-menu--is-open" : "")}>
      <button
        className={cn("close-button")}
        onClick={() => setIsMenuShown(false)}>
        <img src="/assets-appolly/images/close-fill.svg" alt="Close icon" />
      </button>
      <div className={cn("drawer-menu__content")}>
        <div className={cn("menu-item-container")}>
          <a className={cn("menu-item")} href="#home">
            HOME
          </a>
        </div>
        <div className={cn("menu-item-container")}>
          <a className={cn("menu-item")} href="#about">
            ABOUT
          </a>
        </div>
        <div className={cn("menu-item-container")}>
          <a className={cn("menu-item")} href="#features">
            FEATURES
          </a>
        </div>
        <div className={cn("menu-item-container")}>
          <a className={cn("menu-item")} href="#screenshot">
            SCREENSHOT
          </a>
        </div>
        <div className={cn("menu-item-container")}>
          <a className={cn("menu-item")} href="#blog">
            BLOG
          </a>
        </div>
      </div>
    </div>
  );
}
