import styles from "./page.module.css";
import cnCommon from "../../../modules/classname";
import Comments from "../../../components/wp-notes/comments/comments";
import PostCommentForm from "../../../components/wp-notes/post-comment-form/post-comment-form";
import PageStructure from "../../../components/wp-notes/page-structure/page-structure";
import { useState } from "react";

const cn = cnCommon.bind(null, styles);
const date = new Date();

const defaultComments = [
  {
    image: "/assets-wp-notes/images/Img 03.png",
    name: "Jewel",
    date: new Date("2021-02-02"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui.",
    children: [],
  },
  {
    image: "/assets-wp-notes/images/Img 05.png",
    name: "Jewel",
    date: new Date("2021-02-02"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui.",
    children: [
      {
        image: "/assets-wp-notes/images/Img 03.png",
        name: "Jewel",
        date: new Date("2021-02-02"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet.",
      },
    ],
  },
];

function Body() {
  const [comments, setComments] = useState(defaultComments);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [commentIndex, setCommentIndex] = useState(null);

  const postComment = (event) => {
    event.preventDefault();
    if (commentIndex === null) {
      setComments([
        ...comments,
        {
          image: "/assets-wp-notes/images/Img 03.png",
          name: name,
          date: date,
          description: description,
          children: [],
        },
      ]);
    } else {
      const commentReply = {
        ...comments[commentIndex],
        children: [
          ...comments[commentIndex].children,
          {
            image: "/assets-wp-notes/images/Img 03.png",
            name: name,
            date: date,
            description: description,
          },
        ],
      };
      const newComments = [...comments];
      newComments.splice(commentIndex, 1, commentReply);
      setComments(newComments);
    }
  };

  const replyComment = (commentIndex) => {
    setCommentIndex(commentIndex);
  };

  console.log(commentIndex);
  return (
    <div className={styles.body}>
      <div className={cn("header-text")}>
        Business Partners Work at Modern Office
      </div>
      <div className={cn("article-metadata")}>
        Feb 8, 2021 / By Vitathemes / 3 Comments
      </div>
      <div className={cn("article-description")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
        dui. Lorem ipsum dolor sit amet, consectetur adipisce placerat mauris
        nisl. Proin vitae urna eu{" "}
        <span className={cn("article-description--special-text")}>
          sem pellentesque
        </span>{" "}
        laoreet.
      </div>
      <div className={cn("main-image-container")}>
        <img
          className={cn("main-image")}
          src="/assets-wp-notes/images/Img 01.png"
          alt="Orange image"
        />
      </div>
      <div className={cn("header-text", "header-text--secondary")}>
        Light & Bright in Brooklyn 🌤
      </div>
      <div
        className={cn("article-description", "article-description--secondary")}>
        Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean placerat mauris nisl:
      </div>
      <ul className={cn("unordered-list")}>
        <li className={cn("unordered-list__item")}>
          Lorem ipsum dolor sit amet
        </li>
        <li className={cn("unordered-list__item")}>
          consectetur adipiscing elit. Sed at arcu dui
        </li>
        <li className={cn("unordered-list__item")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className={cn("unordered-list__item")}>Sed at arcu dui</li>
      </ul>
      <div
        className={cn("article-description", "article-description--secondary")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
        dui. Lorem ipsum dolor sit amet:
      </div>
      <div className={cn("quote")}>
        <div className={cn("quote__line")}></div>
        <div className={cn("quote__content")}>
          <div className={cn("quote__text")}>
            “ Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed at arcu dui. Aenean placerat.
            “
          </div>
          <div className={cn("quote__author")}>Walter Dave</div>
        </div>
      </div>
      <div className={cn("header-text", "header-text--secondary")}>
        Privacy & Sync{" "}
      </div>
      <ol className={cn("ordered-list")}>
        <li className={cn("ordered-list__item")}>Lorem ipsum dolor sit amet</li>
        <li className={cn("ordered-list__item")}>
          consectetur adipiscing elit. Sed at arcu dui
        </li>
        <li className={cn("ordered-list__item")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
      </ol>
      <div className={cn("tags-container")}>
        Tags: <span className={cn("tags")}>Pivacy, Business, Office</span>
      </div>
      <Comments comments={comments} replyComment={replyComment} />
      <PostCommentForm
        postComment={postComment}
        setName={setName}
        setDescription={setDescription}
      />
    </div>
  );
}

const Notes = () => {
  return <PageStructure headTitle="Single Blog" body={<Body />} />;
};

export default Notes;
