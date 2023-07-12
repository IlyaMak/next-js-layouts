/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "./page.module.css";
import cnCommon from "../../modules/classname";
import Feature from "../../components/digital-agency-enver/feature/features";
import Head from "next/head";
import globalStyles from "../../app/style.global";

const cn = cnCommon.bind(null, styles);

const Enver = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [imageSourceIndex, setImageSourceIndex] = useState(0);

  const imageSources = [
    "/assets-digital-agency-enver/images/portfolio-image1.svg",
    "/assets-digital-agency-enver/images/portfolio-image2.svg",
    "/assets-digital-agency-enver/images/portfolio-image3.svg",
  ];
  const features = [
    {
      icon: "/assets-digital-agency-enver/images/development-icon.svg",
      alt: "Development icon",
      header: "Development",
      description:
        "Create a platform with the best and coolest quality from us.",
    },
    {
      icon: "/assets-digital-agency-enver/images/ui-ux-icon.svg",
      alt: "UI/UX icon",
      header: "UI/UX Designer",
      description:
        "We provide UI/UX Design services, and of course with the best quality",
    },
    {
      icon: "/assets-digital-agency-enver/images/graphik-designer-icon.svg",
      alt: "Graphik designer icon",
      header: "Graphik Designer",
      description:
        "We provide Graphic Design services, with the best designers",
    },
    {
      icon: "/assets-digital-agency-enver/images/motion-graphik-icon.svg",
      alt: "Motion graphik icon",
      header: "Motion Graphik",
      description:
        "Create a platform with the best and coolest quality from us.",
    },
    {
      icon: "/assets-digital-agency-enver/images/photography-icon.svg",
      alt: "Photography icon",
      header: "Photography",
      description:
        "We provide Photography services, and of course with the best quality",
    },
    {
      icon: "/assets-digital-agency-enver/images/videography-icon.svg",
      alt: "Videography icon",
      header: "Videography",
      description:
        "Create a platform with the best and coolest quality from us.",
    },
  ];

  const handleImageSource = (newImageSourceIndex) => {
    if (newImageSourceIndex < imageSources.length && newImageSourceIndex >= 0) {
      setImageSourceIndex(newImageSourceIndex);
    }
  };

  return (
    <>
      <Head>
        <title>PNFT Market</title>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={styles.main}>
        <div className={cn("gradient", "gradient--first")}></div>
        <div className={cn("gradient", "gradient--second")}></div>
        <div className={cn("gradient", "gradient--third")}></div>
        <div className={cn("gradient", "gradient--fourth")}></div>
        <div className={cn("menu-section", "row")}>
          <img
            className={styles.logo}
            src="/assets-digital-agency-enver/images/logo.svg"
            alt="Enver logo"
          />
          <div className={styles["menu-section__container"]}>
            <a href="#main" className={styles.link}>
              Home
            </a>
            <a href="#features" className={styles.link}>
              Services
            </a>
            <a href="#portfolio" className={styles.link}>
              Our Project
            </a>
            <a href="#about" className={styles.link}>
              Abous us
            </a>
          </div>
          <button
            className={styles["menu-button"]}
            onClick={() => setIsMenuShown(!isMenuShown)}>
            {isMenuShown ? (
              <div className={cn("close-logo")}>X</div>
            ) : (
              <img
                className={styles["menu-logo"]}
                src="/assets-digital-agency-enver/images/Sort.svg"
                alt="Menu logo"
              />
            )}
          </button>
          <button className={cn("button", "button--menu-contacts")}>
            Contact us
          </button>
        </div>
        <div
          className={cn(
            "menu-section",
            "menu-section--phone",
            isMenuShown ? "menu-section--is-open" : ""
          )}>
          <a href="#main" className={cn("link", "link--menu")}>
            Home
          </a>
          <a href="#features" className={cn("link", "link--menu")}>
            Services
          </a>
          <a href="#portfolio" className={cn("link", "link--menu")}>
            Our Project
          </a>
          <a href="#about" className={cn("link", "link--menu")}>
            Abous us
          </a>
        </div>
        <div id="main" className={cn("greeting-section", "row")}>
          <div className={styles["main__section"]}>
            <div className={styles["main-header"]}>
              Build Your Awesome Platform
            </div>
            <div className={styles["section-description"]}>
              Enver studio is a digital studio that offers several services such
              as UI/UX Design to developers, we will provide the best service
              for those of you who use our services.
            </div>
            <button className={cn("button", "button--rectangle")}>
              Our Services
              <img
                className={styles["click-button-logo"]}
                src="/assets-digital-agency-enver/images/arrow-right-up.svg"
                alt="Click button logo"
              />
            </button>
          </div>
          <div className={styles["man-section"]}>
            <img
              className={cn("vector-icon", "vector-icon--man-section")}
              src="/assets-digital-agency-enver/images/Vector 13.svg"
              alt="Vector icon"
            />
            <img
              className={cn(
                "group-circle-icon",
                "group-circle-icon--man-section"
              )}
              src="/assets-digital-agency-enver/images/Group 162526.svg"
              alt="Group cirle icon"
            />
            <img
              className={cn("group-play-icon", "group-play-icon--man-section")}
              src="/assets-digital-agency-enver/images/Group 162527.svg"
              alt="Group play icon"
            />
            <img
              className={cn("plus-icon", "plus-icon--man-section")}
              src="/assets-digital-agency-enver/images/add.svg"
              alt="Plus icon"
            />
            <img
              className={styles["man-section__image"]}
              src="/assets-digital-agency-enver/images/man.png"
              alt="Man"
            />
          </div>
        </div>
        <div className={cn("man-section", "man-section--phone")}>
          <img
            className={cn("vector-icon", "vector-icon--man-section")}
            src="/assets-digital-agency-enver/images/Vector 13.svg"
            alt="Vector icon"
          />
          <img
            className={cn(
              "group-circle-icon",
              "group-circle-icon--man-section"
            )}
            src="/assets-digital-agency-enver/images/Group 162526.svg"
            alt="Group cirle icon"
          />
          <img
            className={cn("group-play-icon", "group-play-icon--man-section")}
            src="/assets-digital-agency-enver/images/Group 162527.svg"
            alt="Group play icon"
          />
          <img
            className={cn("plus-icon", "plus-icon--man-section")}
            src="/assets-digital-agency-enver/images/add.svg"
            alt="Plus icon"
          />
          <img
            className={styles["man-section__image"]}
            src="/assets-digital-agency-enver/images/man.png"
            alt="Man"
          />
        </div>
        <div id="about" className={cn("video-section", "row")}>
          <div className={styles["video-section__description-container"]}>
            <div className={styles["video-section__header"]}>
              Why Enver Is The Best Choice?
            </div>
            <div
              className={cn(
                "section-description",
                "section-description--video"
              )}>
              Watch this one minute video so you understand why you should use
              our services!
            </div>
          </div>
          <div className={styles["video-section__container"]}>
            <img
              className={styles["video-section__image"]}
              src="/assets-digital-agency-enver/images/image 4.png"
              alt="Video image"
            />
            <button className={cn("button", "ellipse-button", "play-button")}>
              <img
                className={styles["play-icon"]}
                src="/assets-digital-agency-enver/images/Play.svg"
                alt="Play icon"
              />
            </button>
          </div>
        </div>
        <div id="features" className={styles["features-section"]}>
          <div className={styles["features-section__header-container"]}>
            <img
              className={cn(
                "group-play-icon",
                "group-play-icon--features-section"
              )}
              src="/assets-digital-agency-enver/images/Group 162527.svg"
              alt="Group play icon"
            />
            <img
              className={cn(
                "plus-icon",
                "plus-icon--small",
                "plus-icon--features-section"
              )}
              src="/assets-digital-agency-enver/images/add.svg"
              alt="Plus icon"
            />
            <div
              className={cn(
                "secondary-header",
                "secondary-header--features",
                "row"
              )}>
              The Service We Provide For You
            </div>
          </div>
          <div className={styles["features-section__containers"]}>
            {features.map((feature, featureIndex) => (
              <Feature key={featureIndex} feature={feature} />
            ))}
          </div>
        </div>
        <div id="portfolio" className={styles["portfolio-section"]}>
          <div className={styles["portfolio-section__header-container"]}>
            <img
              className={cn(
                "group-circle-icon",
                "group-circle-icon--portfolio-section"
              )}
              src="/assets-digital-agency-enver/images/Group 162526.svg"
              alt="Group cirle icon"
            />
            <img
              className={cn(
                "plus-icon",
                "plus-icon--small",
                "plus-icon--portfolio-section"
              )}
              src="/assets-digital-agency-enver/images/add.svg"
              alt="Plus icon"
            />
            <div className={cn("row", "secondary-header", "portfolio-header")}>
              Our Awesome Portfolio
            </div>
          </div>
          <div
            className={styles["portfolio-section__rendered-image-container"]}>
            <img
              className={cn(
                "portfolio-section__image",
                "portfolio-section__image--placeholder"
              )}
              src={imageSources[0]}
              alt="Portfolio image"
            />
            {imageSources.map((imageSource, index) => (
              <img
                key={imageSource}
                className={cn(
                  "portfolio-section__image",
                  "portfolio-section__image--absolute",
                  imageSourceIndex === index
                    ? "portfolio-section__image--is-shown"
                    : ""
                )}
                src={imageSource}
                alt="Portfolio image"
              />
            ))}
          </div>
          <img
            className={styles["portfolio-section__image--responsive"]}
            src="/assets-digital-agency-enver/images/Group 162511.png"
            alt="Portfolio image"
          />
          <div className={styles["portfolio-section__footer"]}>
            <div className={styles["portfolio-section__arrows-container"]}>
              <button
                className={cn("button", "ellipse-button")}
                onClick={() => handleImageSource(imageSourceIndex - 1)}
                disabled={!imageSources[imageSourceIndex - 1]}>
                <img
                  src="/assets-digital-agency-enver/images/chevron-left.png"
                  alt="Left arrow icon"
                />
              </button>
              <button
                className={cn("button", "ellipse-button")}
                onClick={() => handleImageSource(imageSourceIndex + 1)}
                disabled={!imageSources[imageSourceIndex + 1]}>
                <img
                  src="/assets-digital-agency-enver/images/chevron-right.png"
                  alt="Right arrow icon"
                />
              </button>
            </div>
            <div className={styles["portfolio-section__pagination"]}>
              <img
                src="/assets-digital-agency-enver/images/Group 162512.svg"
                alt="Pagination icon"
              />
            </div>
            <img
              className={cn("vector-icon", "vector-icon--portfolio-section")}
              src="/assets-digital-agency-enver/images/Vector 13.svg"
              alt="Vector icon"
            />
          </div>
        </div>
        <div className={styles["contacts-section"]}>
          <div className={cn("contacts-container", "row")}>
            <div className={cn("secondary-header", "contacts-header")}>
              Contact us for the service you want to use
            </div>
            <div className={styles["contacts-button-container"]}>
              <button
                className={cn(
                  "button",
                  "button--rectangle",
                  "button--contacts"
                )}>
                Contact us
              </button>
            </div>
          </div>
          <img
            className={cn(
              "plus-icon",
              "plus-icon--small",
              "plus-icon--contacts-section"
            )}
            src="/assets-digital-agency-enver/images/add.svg"
            alt="Plus icon"
          />
          <img
            className={cn(
              "group-circle-icon",
              "group-circle-icon--contacts-section"
            )}
            src="/assets-digital-agency-enver/images/Group 162526.svg"
            alt="Group cirle icon"
          />
        </div>
        <div className={styles.footer}>
          <img
            className={styles.logo}
            src="/assets-digital-agency-enver/images/logo.svg"
            alt="Enver logo"
          />
          <div className={styles["footer__menu-items"]}>
            <div className={cn("link", "link--footer")}>Support</div>
            <div className={cn("link", "link--footer")}>Privacy Policy</div>
            <div className={cn("link", "link--footer")}>
              Terms And Conditions
            </div>
          </div>
          <div className={styles.copyright}>
            © 2020 Enver, All right reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Enver;
