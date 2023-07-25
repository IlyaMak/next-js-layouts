import Head from "next/head";
import styles from "./page.module.css";
import cnCommon from "../../modules/classname";
import globalStyles from "../../app/style.global";
import Advantages from "../../components/appolly/advantages/advantages";
import TeamMembersCards from "../../components/appolly/team-members-cards/team-members-cards";

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
        <div className={cn("about-section")}>
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
        <div className={cn("features-section")}>
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
              src="/assets-appolly/images/003.png"
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
        <div className={cn("screenshot-section")}>
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
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus.
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
      </div>
    </>
  );
};

export default Appolly;
