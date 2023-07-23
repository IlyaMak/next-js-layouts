import styles from "./page.module.css";
import Head from "next/head";
import globalStyles from "../app/style.global";

export default function Home() {
  return (
    <>
      <Head>
        <title>Layouts</title>
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <div className={styles.main}>
        <a href="sign-in-nft">Sign-in-NFT</a>
        <a href="digital-agency-enver">Digital Agency Enver</a>
        <a href="wp-notes">WP-Notes</a>
        <a href="appolly">Appolly</a>
      </div>
    </>
  );
}
