import styles from "./page.module.css";
import Head from "next/head";
import globalStyles from "../app/style.global";
import cnCommon from "../modules/classname";
import Link from "next/link";

const cn = cnCommon.bind(null, styles);

export default function Home() {
  return (
    <>
      <Head>
        <title>Layouts</title>
        <meta property="og:title" content="Figma To React Examples"></meta>
        <meta
          property="og:image"
          content="https://next-js-layouts-five.vercel.app/main-layout-screen.png"></meta>
        <meta property="og:image:width" content="968"></meta>
        <meta property="og:image:height" content="504"></meta>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={styles.main}>
        <div className={cn("github-container")}>
          <Link
            className={cn("github-container__link")}
            href="https://github.com/IlyaMak/next-js-layouts">
            <img
              className={cn("github-container__logo")}
              src="github-mark-white.svg"
              alt="Github icon"
            />
            Github Repository
          </Link>
        </div>
        <div className={cn("cards-section")}>
          <div className={cn("landing-card")}>
            <div className={cn("image-container")}>
              <Link className={cn("image-link")} href="sign-in-nft">
                <img
                  className={cn("landing-image")}
                  src="/assets-appolly/images/pnft-market.png"
                  alt="PNFT Market"
                />
              </Link>
            </div>
            <div className={cn("landing-links-container")}>
              <Link
                className={cn("landing-link")}
                href="https://www.figma.com/file/XKZyQTDS7WQNhELVFlftXw/Responsive-Sign-in-Web-Page-(Community)?node-id=101%3A127&mode=dev">
                Figma Project
              </Link>
              <Link className={cn("landing-link")} href="/sign-in-nft">
                Implementation
              </Link>
            </div>
          </div>
          <div className={cn("landing-card")}>
            <div className={cn("image-container")}>
              <Link className={cn("image-link")} href="digital-agency-enver">
                <img
                  className={cn("landing-image")}
                  src="/assets-appolly/images/enver.png"
                  alt="Enver"
                />
              </Link>
            </div>
            <div className={cn("landing-links-container")}>
              <Link
                className={cn("landing-link")}
                href="https://www.figma.com/file/pTCcQebjN00vwybT7JwaUG/Digital-Agency-Website---Freebie-(Community)?node-id=0%3A1&mode=dev">
                Figma Project
              </Link>
              <Link className={cn("landing-link")} href="/digital-agency-enver">
                Implementation
              </Link>
            </div>
          </div>
          <div className={cn("landing-card")}>
            <div className={cn("image-container")}>
              <Link className={cn("image-link")} href="wp-notes">
                <img
                  className={cn("landing-image")}
                  src="/assets-appolly/images/wp-notes.png"
                  alt="WP-Notes"
                />
              </Link>
            </div>
            <div className={cn("landing-links-container")}>
              <Link
                className={cn("landing-link")}
                href="https://www.figma.com/file/l0PCegKMUwBgDSH5jGAvqh/WP-Notes-(Community)?node-id=0%3A1&mode=dev">
                Figma Project
              </Link>
              <Link className={cn("landing-link")} href="/wp-notes">
                Implementation
              </Link>
            </div>
          </div>
          <div className={cn("landing-card")}>
            <div className={cn("image-container")}>
              <Link className={cn("image-link")} href="appolly">
                <img
                  className={cn("landing-image")}
                  src="/assets-appolly/images/appolly.png"
                  alt="Appolly"
                />
              </Link>
            </div>
            <div className={cn("landing-links-container")}>
              <Link
                className={cn("landing-link")}
                href="https://www.figma.com/file/jOlgJXc6Axl6c9KTL3GzrN/App-Landing-Page-Template-%7C-Mobile-App-Landing-Page-(Community)?node-id=0%3A1&mode=dev">
                Figma Project
              </Link>
              <Link className={cn("landing-link")} href="/appolly">
                Implementation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
