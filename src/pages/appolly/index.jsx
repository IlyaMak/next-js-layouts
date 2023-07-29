import Head from "next/head";
import styles from "./page.module.css";
import cnCommon from "../../modules/classname";
import globalStyles from "../../app/style.global";
import Advantages from "../../components/appolly/advantages/advantages";
import TeamMembersCards from "../../components/appolly/team-members-cards/team-members-cards";
import DrawerMenu from "../../components/appolly/drawer-menu/drawer-menu";
import { useState } from "react";

const cn = cnCommon.bind(null, styles);

const appAdvantages = [
  {
    header: "CREATIVE DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
  },
  {
    header: "EASY TO USE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
  },
  {
    header: "BEST USER EXPERIENCE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
  },
];

const membersCardData = [
  {
    image: "/assets-appolly/images/Profile.png",
    name: "CARLA PRESS",
    job: "APP DEVELOPER",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
    facebookIcon: "/assets-appolly/images/facebook-fill-purple.svg",
  },
  {
    image: "/assets-appolly/images/Profile (1).png",
    name: "CRAIGE GOUSE",
    job: "UI/UX DESIGNER",
    facebookIcon: "/assets-appolly/images/facebook-fill-black.svg",
  },
  {
    image: "/assets-appolly/images/Profile (2).png",
    name: "JOCELYN SEPTIMUS",
    job: "WEBSITE DEVELOPER",
    facebookIcon: "/assets-appolly/images/facebook-fill-black.svg",
  },
];

const Appolly = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <Head>
        <title>Appolly</title>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={cn("main")}>
        <DrawerMenu isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
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
            <button
              className={cn("menu-button")}
              onClick={() => setIsMenuShown(!isMenuShown)}>
              <img src="/assets-appolly/images/menu-line.svg" alt="Menu icon" />
            </button>
            <div className={cn("main-menu-items-container")}>
              <a href="#home" className={cn("menu-item")}>
                HOME
              </a>
              <a href="#about" className={cn("menu-item")}>
                ABOUT
              </a>
              <a href="#features" className={cn("menu-item")}>
                FEATURES
              </a>
            </div>
            <div className={cn("secondary-menu-items-container")}>
              <a href="#screenshot" className={cn("menu-item")}>
                SCREENSHOT
              </a>
              <a href="#blog" className={cn("menu-item")}>
                BLOG
              </a>
            </div>
            <button className={cn("download-button")}>DOWNLOAD</button>
          </div>
        </div>
        <div id="home" className={cn("home-section")}>
          <div className={cn("download-section")}>
            <div className={cn("decore-rectangle")}></div>
            <div className={cn("download-container")}>
              <div className={cn("download-container__header")}>
                A GREAT APP MAKES YOUR LIFE BETTER
              </div>
              <div className={cn("description-text")}>
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
                  alt="App Store icon"
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
        <div id="about" className={cn("about-section")}>
          <div className={cn("section-header")}>ABOUT OUR APP</div>
          <div className={cn("about-section__description-container")}>
            <div
              className={cn("description-text", "about-section__description")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </div>
          </div>
          <div className={cn("about-section__content-container")}>
            <img
              className={cn("about-section__image")}
              src="/assets-appolly/images/App Design.png"
              alt="App image"
            />
            <Advantages advantages={appAdvantages} />
          </div>
        </div>
        <div id="features" className={cn("features-section")}>
          <div className={cn("section-header", "section-header--features")}>
            APP FEATURES
          </div>
          <div
            className={cn("description-text", "features-section__description")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </div>
          <div className={cn("feature", "feature--edged", "feature--first")}>
            <img
              className={cn("feature__icon")}
              src="/assets-appolly/images/comment.svg"
              alt="Feature icon"
            />
            <div className={cn("feature__header")}>FULL FREE CHAT</div>
            <div className={cn("description-text", "feature__description")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className={cn("columns-content")}>
            <div className={cn("columns-content__first")}>
              <div className={cn("feature")}>
                <img
                  className={cn("feature__icon")}
                  src="/assets-appolly/images/browser.svg"
                  alt="Feature icon"
                />
                <div className={cn("feature__header")}>UNLIMITED FEATURES</div>
                <div className={cn("description-text", "feature__description")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div className={cn("feature", "feature--third")}>
                <img
                  className={cn("feature__icon")}
                  src="/assets-appolly/images/vector.svg"
                  alt="Feature icon"
                />
                <div className={cn("feature__header")}>AWESOME UI DESIGN</div>
                <div className={cn("description-text", "feature__description")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
            <img
              className={cn("columns-content__second")}
              src="/assets-appolly/images/App.png"
              alt="Features image"
            />
            <div className={cn("columns-content__third")}>
              <div className={cn("feature")}>
                <img
                  className={cn("feature__icon")}
                  src="/assets-appolly/images/cell-phone.svg"
                  alt="Feature icon"
                />
                <div className={cn("feature__header")}>
                  ISO & ANDROID VERSION
                </div>
                <div className={cn("description-text", "feature__description")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <div className={cn("feature", "feature--fifth")}>
                <img
                  className={cn("feature__icon")}
                  src="/assets-appolly/images/eye-scanner 1.svg"
                  alt="Feature icon"
                />
                <div className={cn("feature__header")}>
                  RETINA READY GRAPHICS
                </div>
                <div className={cn("description-text", "feature__description")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div className={cn("feature", "feature--edged")}>
            <img
              className={cn("feature__icon")}
              src="/assets-appolly/images/male-telemarketer.svg"
              alt="Feature icon"
            />
            <div className={cn("feature__header")}>
              24/7 SUPPORT BY REAL PEOPLE
            </div>
            <div className={cn("description-text", "feature__description")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
        <div id="screenshot" className={cn("screenshot-section")}>
          <div className={cn("section-header", "screenshot-section__header")}>
            CHECKOUT OUR APP INTERFACE LOOK
          </div>
          <div
            className={cn(
              "description-text",
              "screenshot-section__description"
            )}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </div>
          <div className={cn("slider-container")}>
            <button className={cn("slider-button", "slider-button--left")}>
              <img
                src="/assets-appolly/images/arrow-left-s-line.svg"
                alt="Left arrow icon"
              />
            </button>
            <div className={cn("images-container")}>
              <img
                className={cn(
                  "covered-image",
                  "covered-image--first",
                  "slider-container__secondary-image"
                )}
                src="/assets-appolly/images/000.png"
                alt="App image"
              />
              <img
                className={cn(
                  "covering-image",
                  "slider-container__secondary-image"
                )}
                src="/assets-appolly/images/003.png"
                alt="App image"
              />
              <img
                className={cn("slider-container__image")}
                src="/assets-appolly/images/iPhoneX-Mockup 1.png"
                alt="App image"
              />
              <img
                className={cn(
                  "covering-image",
                  "slider-container__secondary-image"
                )}
                src="/assets-appolly/images/001.png"
                alt="App image"
              />
              <img
                className={cn(
                  "covered-image",
                  "covered-image--fifth",
                  "slider-container__secondary-image"
                )}
                src="/assets-appolly/images/004.png"
                alt="App image"
              />
            </div>
            <button className={cn("slider-button")}>
              <img
                src="/assets-appolly/images/arrow-right-s-line.svg"
                alt="Left arrow icon"
              />
            </button>
          </div>
          <img
            className={cn("slider-image")}
            src="/assets-appolly/images/Slider.svg"
            alt="Slider image"
          />
          <div className={cn("download-section")}>
            <div className={cn("download-container")}>
              <div
                className={cn("section-header", "download-container__header")}>
                DOWNLOAD APP NOW
              </div>
              <div
                className={cn(
                  "description-text",
                  "download-container__description"
                )}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </div>
              <div className={cn("download-buttons-container")}>
                <img
                  className={cn("download-container__image")}
                  src="/assets-appolly/images/toppng 1.png"
                  alt="Google Play icon"
                />
                <img
                  src="/assets-appolly/images/PngItem_1144050 2.png"
                  alt="App Store icon"
                />
              </div>
              <div className={cn("facts-section")}>
                <div className={cn("fact-container")}>
                  <img
                    className={cn("fact-icon")}
                    src="/assets-appolly/images/download-2-fill.svg"
                    alt="Fact image"
                  />
                  <div className={cn("fact-value")}>59865</div>
                  <div className={cn("fact")}>Download</div>
                </div>
                <div className={cn("fact-container")}>
                  <img
                    className={cn("fact-icon")}
                    src="/assets-appolly/images/thumb-up-fill.svg"
                    alt="Fact image"
                  />
                  <div className={cn("fact-value")}>29852</div>
                  <div className={cn("fact")}>Like</div>
                </div>
                <div className={cn("fact-container")}>
                  <img
                    className={cn("fact-icon")}
                    src="/assets-appolly/images/star-fill.svg"
                    alt="Fact image"
                  />
                  <div className={cn("fact-value")}>1500</div>
                  <div className={cn("fact")}>5 star rating</div>
                </div>
              </div>
            </div>
            <div className={cn("download-section__image-container")}>
              <img
                className={cn("download-section__image")}
                src="/assets-appolly/images/App Design2.png"
                alt="App image"
              />
            </div>
          </div>
        </div>
        <div className={cn("guide-section")}>
          <div className={cn("section-header", "guide-section__header")}>
            HOW TO USE OUR APP PERFECTLY
          </div>
          <div className={cn("description-text", "guide-section__description")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante vitae. Est tellus vitae, nullam lobortis enim.
          </div>
          <div className={cn("guide-section__video-container")}>
            <div className={cn("guide-section__image-container")}>
              <img
                className={cn("guide-section__video-image")}
                src="/assets-appolly/images/Image.png"
                alt="Video image"
              />
              <img
                className={cn("guide-section__video-icon")}
                src="/assets-appolly/images/Video Icon.svg"
                alt="Video icon"
              />
            </div>
          </div>
        </div>
        <div className={cn("team-section")}>
          <div className={cn("section-header")}>OUR CREATIVE TEAM</div>
          <div className={cn("description-text", "team-section__description")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </div>
          <TeamMembersCards membersCards={membersCardData} />
        </div>
        <div className={cn("customers-section")}>
          <div className={cn("section-header", "customers-section__header")}>
            OUR HAPPY CUSTOMERS
          </div>
          <div
            className={cn(
              "description-text",
              "customers-section__description"
            )}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </div>
          <div className={cn("all-customers-container")}>
            <div
              className={cn(
                "customer-container",
                "customer-container--edged",
                "customer-container--first"
              )}>
              <img
                className={cn("customer-container__image")}
                src="/assets-appolly/images/Profile Image.png"
                alt="Customer image"
              />
              <div className={cn("customer-container__name")}>ANN LUBIN</div>
              <div className={cn("customer-container__job")}>CO-FOUNDER</div>
              <div className={cn("customer-container__description")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className={cn("customer-container")}>
              <img
                className={cn("customer-container__image")}
                src="/assets-appolly/images/Profile Image.png"
                alt="Customer image"
              />
              <div className={cn("customer-container__name")}>ANN LUBIN</div>
              <div className={cn("customer-container__job")}>CO-FOUNDER</div>
              <div className={cn("customer-container__description")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </div>
            </div>
            <div
              className={cn(
                "customer-container",
                "customer-container--edged",
                "customer-container--third"
              )}>
              <img
                className={cn("customer-container__image")}
                src="/assets-appolly/images/Profile Image.png"
                alt="Customer image"
              />
              <div className={cn("customer-container__name")}>ANN LUBIN</div>
              <div className={cn("customer-container__job")}>CO-FOUNDER</div>
              <div className={cn("customer-container__description")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
          <img
            className={cn("customers-slider-image")}
            src="/assets-appolly/images/Slider-white.svg"
            alt="Slider image"
          />
        </div>
        <div id="blog" className={cn("blog-section")}>
          <div className={cn("section-header")}>OUR RECENT BLOG</div>
          <div className={cn("description-text", "blog-section__description")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </div>
          <div className={cn("all-blogs-container")}>
            <div className={cn("blog-card")}>
              <div className={cn("blog-card__image-container")}>
                <img
                  className={cn("blog-card__image")}
                  src="/assets-appolly/images/Image (1).png"
                  alt="Blog image"
                />
              </div>
              <div className={cn("blog-card__name")}>
                THE SNAP PIXEL: HOW IT WORKS AND HOW TO INSTALL
              </div>
              <div className={cn("description-text", "blog-card__description")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </div>
              <div className={cn("blog-card__link-container")}>
                <a className={cn("blog-card__link")} href="#">
                  READ MORE
                </a>
              </div>
            </div>
            <div className={cn("blog-card")}>
              <div className={cn("blog-card__image-container")}>
                <img
                  className={cn("blog-card__image")}
                  src="/assets-appolly/images/Image (2).png"
                  alt="Blog image"
                />
              </div>
              <div className={cn("blog-card__name")}>
                GLOBAL PARTNER SOLUTIONS: A PARTNERSHIP OF INNOVA
              </div>
              <div className={cn("description-text", "blog-card__description")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </div>
              <div className={cn("blog-card__link-container")}>
                <a className={cn("blog-card__link")} href="#">
                  READ MORE
                </a>
              </div>
            </div>
            <div className={cn("blog-card")}>
              <div className={cn("blog-card__image-container")}>
                <img
                  className={cn("blog-card__image")}
                  src="/assets-appolly/images/Image (3).png"
                  alt="Blog image"
                />
              </div>
              <div className={cn("blog-card__name")}>
                AN OPPORTUNITY FOR SNAPCHATTERS TO START FRE
              </div>
              <div className={cn("description-text", "blog-card__description")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </div>
              <div className={cn("blog-card__link-container")}>
                <a className={cn("blog-card__link")} href="#">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div className={cn("contact-container")}>
            <div className={cn("contact-container__main-content")}>
              <div className={cn("content-container")}>
                <img
                  className={cn("content-image")}
                  src="/assets-appolly/images/Email Icon.svg"
                  alt="Email icon"
                />
                <div className={cn("content-text")}>info@youremail.com</div>
              </div>
              <div className={cn("line")}></div>
              <div className={cn("content-container")}>
                <img
                  className={cn("content-image")}
                  src="/assets-appolly/images/Call Icon.svg"
                  alt="Call icon"
                />
                <div className={cn("content-text")}>+880 321 655 9985</div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn("footer")}>
          <div className={cn("footer__content-columns")}>
            <div className={cn("footer__first-column")}>
              <div className={cn("logo-text")}>LOGO</div>
              <div className={cn("description-text", "footer__description")}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </div>
              <div className={cn("footer__socials")}>
                <img
                  className={cn("social-icon")}
                  src="/assets-appolly/images/facebook-fill-purple.svg"
                  alt="Facebook logo"
                />
                <div className={cn("line")}></div>
                <img
                  className={cn("social-icon")}
                  src="/assets-appolly/images/instagram-fill.svg"
                  alt="Instagram logo"
                />
                <div className={cn("line")}></div>
                <img
                  className={cn("social-icon")}
                  src="/assets-appolly/images/twitter-fill.svg"
                  alt="Twitter logo"
                />
                <div className={cn("line")}></div>
                <img
                  className={cn("social-icon")}
                  src="/assets-appolly/images/youtube-fill.svg"
                  alt="Youtube logo"
                />
              </div>
            </div>
            <div className={cn("footer__second-column")}>
              <div className={cn("footer__header", "footer__header--links")}>
                QUICK LINK
              </div>
              <div className={cn("menu-link-container")}>
                <a className={cn("menu-link")} href="#about">
                  About
                </a>
              </div>
              <div className={cn("menu-link-container")}>
                <a className={cn("menu-link")} href="#features">
                  Features
                </a>
              </div>
              <div className={cn("menu-link-container")}>
                <a className={cn("menu-link")} href="#screenshot">
                  Screenshot
                </a>
              </div>
              <div className={cn("menu-link-container")}>
                <a className={cn("menu-link")} href="#blog">
                  Blog
                </a>
              </div>
            </div>
            <div className={cn("footer__third-column")}>
              <div className={cn("footer__header")}>NEWS LETTER</div>
              <div
                className={cn("description-text", "footer__news-description")}>
                Subscribe our newsletter to get our latest update & news
              </div>
              <div className={cn("contact-input-container")}>
                <input
                  className={cn("contact-input")}
                  type="text"
                  placeholder="Your email address"
                />
                <button className={cn("send-button")}>
                  <img
                    src="/assets-appolly/images/send-plane-2-fill.svg"
                    alt="Send icon"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={cn("horizontal-line")}></div>
          <div className={cn("copyright-container")}>
            <img
              className={cn("copyright-image")}
              src="/assets-appolly/images/copyright-line.svg"
              alt="Copyright icon"
            />
            <div className={cn("copyright-text")}>
              Copyright 2021 .Ojjomedia. All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appolly;
