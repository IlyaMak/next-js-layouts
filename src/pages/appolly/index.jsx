import Head from "next/head";
import styles from "./page.module.css";
import cnCommon from "../../modules/classname";
import globalStyles from "../../app/style.global";

const cn = cnCommon.bind(null, styles);

const Appolly = () => {
  return (
    <>
      <Head>
        <title>Appolly</title>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={cn("main")}>
        <div className={cn("logo-container")}>
          <img
            className={cn("logo")}
            src="/assets-appolly/images/Logo4 1.svg"
            alt="Appolly logo"
          />
        </div>
        <div className={cn("header")}>
          <div className={cn("contact-section")}>
            <div className={cn("contact-container")}>
              <div className={cn("email-container")}>
                <img
                  className={cn("contact-image")}
                  src="/assets-appolly/images/mail-fill.svg"
                  alt="Email icon"
                />
                <div className={cn("contact-text")}>info@youremail.com</div>
              </div>
              <div className={cn("phone-container")}>
                <img
                  className={cn("contact-image")}
                  src="/assets-appolly/images/phone-fill.svg"
                  alt="Phone icon"
                />
                <div className={cn("contact-text")}>(480) 555-0103</div>
              </div>
            </div>
            <div className={cn("social-container")}>
              <img
                className={cn("social-image")}
                src="/assets-appolly/images/facebook-fill.svg"
                alt="Facebook icon"
              />
              <img
                className={cn("social-image")}
                src="/assets-appolly/images/instagram-fill.svg"
                alt="Instagram icon"
              />
              <img
                className={cn("social-image")}
                src="/assets-appolly/images/twitter-fill.svg"
                alt="Twitter icon"
              />
              <img
                className={cn("social-image")}
                src="/assets-appolly/images/youtube-fill.svg"
                alt="Youtube icon"
              />
            </div>
          </div>
          <div className={cn("menu-container")}>
            <button className={cn("menu-button")}>
              <img src="/assets-appolly/images/menu-line.svg" alt="Menu icon" />
            </button>
            <div className={cn("main-menu-items-container")}>
              <div className={cn("menu-item")}>HOME</div>
              <div className={cn("menu-item")}>ABOUT</div>
              <div className={cn("menu-item")}>FEATURES</div>
            </div>
            <div className={cn("secondary-menu-items-container")}>
              <div className={cn("menu-item")}>SCREENSHOT</div>
              <div className={cn("menu-item")}>BLOG</div>
            </div>
            <button className={cn("download-button")}>DOWNLOAD</button>
          </div>
        </div>
        <div className={cn("home-section")}>
          <div className={cn("download-section")}>
            <div className={cn("decore-rectangle")}></div>
            <div className={cn("download-container")}>
              <div className={cn("download-container__header")}>
                A GREAT APP MAKES YOUR LIFE BETTER
              </div>
              <div className={cn("download-container__description")}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </div>
              <div
                className={cn(
                  "download-container__header",
                  "download-container__header--secondary"
                )}>
                DOWNLOAD APP NOW
              </div>
              <div className={cn("download-buttons-container")}>
                <img
                  className={cn("download-container__image")}
                  src="/assets-appolly/images/toppng 1.png"
                  alt="Google Play icon"
                />
                <img
                  className={cn("download-container__image")}
                  src="/assets-appolly/images/PngItem_1144050 2.png"
                  alt="Google Play icon"
                />
              </div>
            </div>
          </div>
          <div className={cn("home-image-container")}>
            <img
              className={cn("home-image")}
              src="/assets-appolly/images/Free Ui View Mobile App Mockup 1.png"
              alt="Appolly image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appolly;
