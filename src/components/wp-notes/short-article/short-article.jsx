import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./short-article.module.css";
import cnCommon from "../../../modules/classname";

const cn = cnCommon.bind(null, styles);

ShortArticle.propTypes = {
  shortArticle: PropTypes.shape({
    header: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
  }).isRequired,
};

export default function ShortArticle({ shortArticle }) {
  return (
    <div className={cn("article")}>
      <Link className={cn("link")} href="../../wp-notes/single-blog">
        <div className={cn("article__content-container")}>
          <div className={cn("article__header")}>{shortArticle.header}</div>
          <div className={cn("article__content-text", "article__tags")}>
            {shortArticle.tags.join(", ")}
          </div>
          <div className={cn("article__description", "article__content-text")}>
            {shortArticle.description}
          </div>
          <div className={cn("article__datetime", "article__content-text")}>
            {shortArticle.datetime}
          </div>
        </div>
      </Link>
    </div>
  );
}
