/* eslint-disable @next/next/no-img-element */
import cnCommon from "../../../modules/classname";
import styles from "./footer.module.css";

const cn = cnCommon.bind(null, styles);

export default function Footer() {
  return (
    <div className={cn("footer")}>
      <img src="/assets-wp-notes/images/Logo.png" alt="Logo icon" />
      <div className={cn("footer__main")}>
        <div className={cn("footer__privacy")}>
          Holo theme by{" "}
          <a className={cn("footer__author-link")} href="#">
            VitaThemes
          </a>{" "}
          |{" "}
          <a className={cn("footer__author-link")} href="#">
            Privacy
          </a>
        </div>
        <div className={cn("footer__social")}>
          <a className={cn("footer__social-item")} href="#">
            Instagram
          </a>
          <a className={cn("footer__social-item")} href="#">
            Twitter
          </a>
          <a className={cn("footer__social-item")} href="#">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
